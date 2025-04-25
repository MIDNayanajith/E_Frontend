import { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSupplier = () => {
  const [sup, setSup] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/suppliers/addSuppliers", sup);
      navigate("/suppliers");
    } catch (e) {
      console.log(e);
      alert("Failed to add supplier ! Please try Again!");
    }
  };
  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle
        page="Add Supplier"
        pages={["Add Supplier"]}
        icon="bi bi-house-up"
      />
      <main id="main" className="main supplier-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Add new Supplier</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Supplier Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Supplier Name"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Contact</label>
                      <input
                        type="text"
                        name="contact"
                        id="contact"
                        placeholder="contact"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Address</label>
                      <textarea
                        name="address"
                        id="address"
                        placeholder="Enter address"
                        className="form-control"
                        onChange={handleChange}
                        rows="4" // optional: controls height
                      ></textarea>
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

export default AddSupplier;
