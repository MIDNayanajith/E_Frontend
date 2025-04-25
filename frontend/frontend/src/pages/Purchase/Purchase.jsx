import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Purchase = () => {
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/purchase/getPurchase")
      .then((res) => setPurchase(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (PurchaseId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this ?"
      );
      if (!confirmDelete) return;

      await axios.delete(
        `http://localhost:8800/api/purchase/delete/${PurchaseId}`
      );

      setPurchase(purchase.filter((p) => p.id !== PurchaseId));
      alert("Purchase Deleted Successfully!");
    } catch (err) {
      console.error("Delete error", err);
      alert("Failed delete data!");
    }
  };
  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle page="Purchase" pages={["Purchase"]} icon="bi bi-house-up" />
      <main id="main" className="main purchase-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Purchase List
                  <Link to="/addpurchase" className="btn btn-primary float-end">
                    Add Purchase
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Id</th>
                      <th>Supplier Id</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total Price</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchase.map((data, p) => (
                      <tr key={p}>
                        <td>{data.id}</td>
                        <td>{data.item_id}</td>
                        <td>{data.supplier_id}</td>
                        <td>{data.quantity}</td>
                        <td>{data.unit_price}</td>
                        <td>{data.total_price}</td>
                        <td>{data.date}</td>

                        <td>
                          <Link
                            to={`/editpurchase/${data.id}`}
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

export default Purchase;
