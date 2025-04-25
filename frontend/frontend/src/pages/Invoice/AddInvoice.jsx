import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddInvoice = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState([
    {
      item_id: "",
      quantity: 1,
      unit_price: 0,
      warranty_period: 0,
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [errors, setErrors] = useState({});
  const [availableItems, setAvailableItems] = useState([]);

  // Fetch available items from backend
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/items/getItem")
      .then((res) => {
        const itemsWithNumbers = res.data.map((item) => ({
          ...item,
          id: Number(item.id),
          unit_price: Number(item.unit_price),
          quantity: Number(item.quantity),
        }));
        setAvailableItems(itemsWithNumbers);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        toast.error("Failed to load items");
      });
  }, []);

  // Calculate total amount whenever items change
  useEffect(() => {
    const total = items.reduce(
      (acc, item) => acc + item.quantity * item.unit_price,
      0
    );
    setTotalAmount(total);
  }, [items]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        item_id: "",
        quantity: 1,
        unit_price: 0,
        warranty_period: 0,
      },
    ]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...items];

    if (name === "item_id") {
      const numericValue = Number(value);
      const selectedItem = availableItems.find(
        (item) => item.id === numericValue
      );

      newItems[index] = {
        ...newItems[index],
        [name]: numericValue,
        unit_price: selectedItem?.unit_price || 0,
        // Reset quantity when changing item
        quantity: 1,
      };

      // Auto-validate quantity against stock
      if (selectedItem) {
        const currentQty = newItems[index].quantity;
        if (currentQty > selectedItem.quantity) {
          newItems[index].quantity = selectedItem.quantity;
          toast.warn(
            `Quantity adjusted to available stock (${selectedItem.quantity})`
          );
        }
      }
    } else if (name === "quantity") {
      const numericValue = Math.max(1, Number(value));
      const selectedItem = availableItems.find(
        (item) => item.id === newItems[index].item_id
      );

      // Validate against available stock
      if (selectedItem && numericValue > selectedItem.quantity) {
        toast.warn(`Cannot exceed available stock (${selectedItem.quantity})`);
        newItems[index].quantity = selectedItem.quantity;
      } else {
        newItems[index].quantity = numericValue;
      }
    } else {
      newItems[index][name] = Number(value);
    }

    setItems(newItems);
  };

  const validateForm = () => {
    const errors = {};

    if (!customerName.trim()) {
      errors.customerName = "Customer name is required";
    }

    items.forEach((item, index) => {
      if (!item.item_id) {
        errors[`item_${index}`] = "Item selection is required";
      }
      if (item.quantity < 1) {
        errors[`quantity_${index}`] = "Quantity must be at least 1";
      }

      // Additional stock validation
      const selectedItem = availableItems.find((i) => i.id === item.item_id);
      if (selectedItem && item.quantity > selectedItem.quantity) {
        errors[
          `quantity_${index}`
        ] = `Insufficient stock! Available: ${selectedItem.quantity}`;
      }
    });

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const invoiceData = {
      customer_name: customerName,
      items: items.map((item) => ({
        item_id: item.item_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        warranty_period: item.warranty_period,
      })),
    };

    axios
      .post("http://localhost:8800/api/invoice/createInvoice", invoiceData)
      .then((res) => {
        toast.success("Invoice created successfully!");
        navigate(`/invoice/details/${res.data.invoiceId}`);
      })
      .catch((err) => {
        const errorMsg =
          err.response?.data?.message || "Error creating invoice";
        toast.error(errorMsg);
        console.error("Invoice creation error:", err.response?.data);
      });
  };

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle
        page="Invoice"
        pages={["Invoice", "Add Invoice"]}
        icon="bi bi-file-earmark-plus"
      />

      <main id="main" className="main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Create New Invoice</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Customer Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.customerName && "is-invalid"
                      }`}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                    {errors.customerName && (
                      <div className="invalid-feedback">
                        {errors.customerName}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h5>Items</h5>
                    {items.map((item, index) => {
                      const selectedItem = availableItems.find(
                        (i) => i.id === item.item_id
                      );
                      const maxQuantity = selectedItem?.quantity || 0;

                      return (
                        <div
                          key={index}
                          className="row mb-3 border-bottom pb-3"
                        >
                          <div className="col-md-3">
                            <label className="form-label">Item</label>
                            <select
                              className={`form-select ${
                                errors[`item_${index}`] && "is-invalid"
                              }`}
                              name="item_id"
                              value={item.item_id}
                              onChange={(e) => handleItemChange(index, e)}
                            >
                              <option value="">Select Item</option>
                              {availableItems.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name} (Stock: {item.quantity})
                                </option>
                              ))}
                            </select>
                            {errors[`item_${index}`] && (
                              <div className="invalid-feedback">
                                {errors[`item_${index}`]}
                              </div>
                            )}
                          </div>

                          <div className="col-md-2">
                            <label className="form-label">Quantity</label>
                            <input
                              type="number"
                              className={`form-control ${
                                errors[`quantity_${index}`] && "is-invalid"
                              }`}
                              name="quantity"
                              min="1"
                              max={maxQuantity}
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                            {errors[`quantity_${index}`] && (
                              <div className="invalid-feedback">
                                {errors[`quantity_${index}`]}
                              </div>
                            )}
                          </div>

                          <div className="col-md-2">
                            <label className="form-label">Unit Price</label>
                            <input
                              type="number"
                              className="form-control"
                              name="unit_price"
                              value={item.unit_price}
                              readOnly
                            />
                          </div>

                          <div className="col-md-2">
                            <label className="form-label">
                              Warranty (Months)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="warranty_period"
                              min="0"
                              value={item.warranty_period}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                          </div>

                          <div className="col-md-2 d-flex align-items-end">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleRemoveItem(index)}
                              disabled={items.length === 1}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <button
                      type="button"
                      className="btn btn-secondary mb-3"
                      onClick={handleAddItem}
                    >
                      Add Item
                    </button>
                  </div>

                  <div className="mb-3">
                    <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
                  </div>

                  <div className="d-flex justify-content-between">
                    <Link to="/invoice" className="btn btn-secondary">
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Create Invoice
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddInvoice;
