import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { ItemId } = useParams();
  const [items, setItems] = useState({
    image: "",
    name: "",
    category: "",
    unit_price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        // Add null check for userId
        if (!ItemId) {
          alert("Invalid Item ID");
          return;
        }

        const res = await axios.get(
          `http://localhost:8800/api/items/find/${ItemId}`
        );
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching item:", err);
        alert("Error loading item data");
        navigate("/products");
      }
    };

    fetchItemData();
  }, [ItemId, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setItems((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", items.image instanceof File ? items.image : "");
      formData.append("name", items.name);
      formData.append("category", items.category);
      formData.append("unit_price", items.unit_price);

      await axios.put(
        `http://localhost:8800/api/items/update/${ItemId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/products");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update Product. Please try again!");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle
        page="Update Product"
        pages={["Update Product"]}
        icon="bi bi-house-up"
      />
      <main id="main" className="main product-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Update User</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Product Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product Name"
                        className="form-control"
                        value={items.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select
                        name="category"
                        id="category"
                        className="form-control"
                        value={items.category}
                        onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        <option value="laptop">Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="mouse">Mouse</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Selling Price</label>
                      <input
                        type="text"
                        name="unit_price"
                        id="unit_price"
                        placeholder="Selling Price"
                        className="form-control"
                        value={items.unit_price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Product Image</label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                      />
                      {items.image && typeof items.image === "string" && (
                        <div className="mt-2">
                          <img
                            src={`http://localhost:8800/uploads/products/${items.image}`}
                            alt="product"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      Update User
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

export default EditProduct;
