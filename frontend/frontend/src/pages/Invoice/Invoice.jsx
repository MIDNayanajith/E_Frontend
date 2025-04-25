import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Invoice = () => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/invoice/getInvoice")
      .then((res) => setInvoice(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle page="Invoice" pages={["Invoice"]} icon="bi bi-house-up" />
      <main id="main" className="main invoice-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Invoice List
                  <Link to="/addinvoice" className="btn btn-primary float-end">
                    Add Invoice
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Name</th>
                      <th>Total Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.map((data, i) => (
                      <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.customer_name}</td>
                        <td>{data.total_amount}</td>

                        <td>
                          <Link
                            // to={`/editsuppliers/${data.id}`}
                            className="me-3"
                          >
                            <i
                              className="bi bi-printer text-primary"
                              style={{ fontSize: "1.2rem", cursor: "pointer" }}
                            ></i>
                          </Link>
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

export default Invoice;
