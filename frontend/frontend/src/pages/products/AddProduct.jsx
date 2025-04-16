import { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [items, setItems] = useState({
    image: "",
    name: "",
    category: "",
    unit_price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setItems((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in items) {
      formData.append(key, items[key]);
    }

    try {
      await axios.post("http://localhost:8800/api/items/addItem", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products");
    } catch (e) {
      console.log(e);
      alert("Failed to add product! Try Again !");
    }
  };
  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle
        page="Add Product"
        pages={["Add Product"]}
        icon="bi bi-house-up"
      />
      <main id="main" className="main user-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Add new Product</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Product Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product Name"
                        className="form-control"
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
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      type="submit"
                      onClick={handleClick}
                      class="btn btn-primary"
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

export default AddProduct;
