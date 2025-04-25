import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditSupplier = () => {
  const { SupId } = useParams();
  const [sup, setSup] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        if (!SupId) {
          alert("Invalid Sup ID!");
          return;
        }
        const res = await axios.get(
          `http://localhost:8800/api/suppliers/find/${SupId}`
        );
        setSup(res.data);
      } catch (err) {
        console.log("Error fetching Supplier!", err);
        alert("Error Loading supplier data!");
        navigate("/suppliers");
      }
    };
    fetchSupplier();
  }, [SupId, navigate]);

  const handleChange = (e) => {
    setSup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8800/api/suppliers/update/${SupId}`,
        sup
      );
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
        page="Update Supplier"
        pages={["Update Supplier"]}
        icon="bi bi-house-up"
      />
      <main id="main" className="main supplier-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Update Supplier</h4>
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
                        value={sup.name}
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
                        value={sup.contact}
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
                        value={sup.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Address</label>
                      <textarea
                        name="address"
                        id="address"
                        placeholder="Enter address"
                        value={sup.address}
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

export default EditSupplier;
