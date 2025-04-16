import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/items/getItem")
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (ItemId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:8800/api/items/delete/${ItemId}`);

      setItem(items.filter((i) => i.id !== ItemId));
      alert("Product Deleted Successfully!");
    } catch (err) {
      console.error("Delete error", err);
      alert("Failed delete product!");
    }
  };
  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle page="Products" pages={["Products"]} icon="bi bi-house-up" />
      <main id="main" className="main user-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Product List
                  <Link to="/addproducts" className="btn btn-primary float-end">
                    Add Product
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Selling Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((data, i) => (
                      <tr key={i}>
                        <td>{data.id}</td>
                        <td>
                          <img
                            src={
                              data.image.startsWith("http")
                                ? data.image // if it's a full external link
                                : `http://localhost:8800/uploads/products/${data.image}` // if it's just a filename
                            }
                            alt="Profile"
                            style={{
                              width: "35px",
                              height: "35px",
                              objectFit: "cover",
                              borderRadius: "25%",
                            }}
                          />
                        </td>
                        <td>{data.name}</td>
                        <td>{data.category}</td>
                        <td>{data.unit_price}</td>
                        <td>{data.quantity}</td>
                        <td>{data.status}</td>
                        <td>
                          <Link
                            to={`/editproducts/${data.id}`}
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

export default Products;
