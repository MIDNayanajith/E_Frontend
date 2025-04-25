import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Supplier = () => {
  const [sup, setSup] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/suppliers/getSuppliers")
      .then((res) => setSup(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (SupId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:8800/api/suppliers/delete/${SupId}`);

      setSup(sup.filter((s) => s.id !== SupId));
      alert("Supplier Deleted Successfully!");
    } catch (err) {
      console.error("Delete error", err);
      alert("Failed delete Supplier!");
    }
  };
  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle page="Suppliers" pages={["Suppliers"]} icon="bi bi-house-up" />
      <main id="main" className="main supplier-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Suppliers List
                  <Link
                    to="/addsuppliers"
                    className="btn btn-primary float-end"
                  >
                    Add Supplier
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sup.map((data, s) => (
                      <tr key={s}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.contact}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>

                        <td>
                          <Link
                            to={`/editsuppliers/${data.id}`}
                            className="me-3"
                          >
                            <i
                              className="bi bi-pencil text-primary"
                              style={{ fontSize: "1.2rem", cursor: "pointer" }}
                            ></i>
                          </Link>
                          <i
                            className="bi bi-trash3 text-danger"
                            style={{ fontSize: "1.2rem", cursor: "pointer" }}
                            onClick={() => handleDelete(data.id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Supplier;
