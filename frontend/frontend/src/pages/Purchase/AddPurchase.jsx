import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPurchase = () => {
  const [purchase, setPurchase] = useState({
    item_id: "",
    supplier_id: "",
    quantity: "",
    unit_price: "",
  });
  const [items, setItems] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const navigate = useNavigate();

  // Add these useEffect hooks to fetch data
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/items/getItem");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/suppliers/getSuppliers"
        );
        setSuppliers(res.data);
      } catch (err) {
        console.error("Error fetching suppliers:", err);
      }
    };
    fetchSuppliers();
  }, []);

  // Keep your existing handleChange and handleClick functions unchanged
  const handleChange = (e) => {
    setPurchase((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...purchase,
        quantity: Number(purchase.quantity),
        unit_price: Number(purchase.unit_price),
      };

      await axios.post(
        "http://localhost:8800/api/purchase/addPurchase",
        payload
      );
      navigate("/purchase");
    } catch (e) {
      console.log(e);
      alert("Failed to add purchase! Please try Again!");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle
        page="Add Purchase"
        pages={["Add Purchase"]}
        icon="bi bi-house-up"
      />
      <main id="main" className="main purchase-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Add new Purchase</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="Item Id" className="form-label">
                        Item
                      </label>
                      <select
                        name="item_id"
                        className="form-control"
                        onChange={handleChange}
                      >
                        <option value="">Select Item</option>
                        {items.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name} (ID: {item.id})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="supplier_id" className="form-label">
                        Supplier
                      </label>
                      <select
                        name="supplier_id"
                        className="form-control"
                        onChange={handleChange}
                      >
                        <option value="">Select Supplier</option>
                        {suppliers.map((supplier) => (
                          <option key={supplier.id} value={supplier.id}>
                            {supplier.name} (ID: {supplier.id})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Keep the rest of your existing form fields unchanged */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantity"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Unit Price</label>
                      <input
                        type="number"
                        name="unit_price"
                        id="unit_price"
                        placeholder="Unit Price"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="btn btn-primary"
                    >
                      Submit
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

export default AddPurchase;
