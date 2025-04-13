import "./user.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/getUser")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = async (userId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:8800/api/users/delete/${userId}`);

      // Update the UI by filtering out the deleted user
      setUser(user.filter((u) => u.id !== userId));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete user");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle page="User" pages={["User"]} icon="bi bi-house-up" />
      <main id="main" className="main user-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  User List
                  <Link to="/adduser" className="btn btn-primary float-end">
                    Add User
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Profile</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((data, i) => (
                      <tr key={i}>
                        <td>{data.id}</td>
                        <td>
                          <img
                            src={
                              data.profile.startsWith("http")
                                ? data.profile // if it's a full external link
                                : `http://localhost:8800/uploads/user/${data.profile}` // if it's just a filename
                            }
                            alt="Profile"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        </td>

                        <td>
                          {data.first_name} {data.last_name}
                        </td>
                        <td>{data.email}</td>
                        <td>{data.role}</td>
                        <td>
                          <Link to={`/edituser/${data.id}`} className="me-3">
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

export default User;
