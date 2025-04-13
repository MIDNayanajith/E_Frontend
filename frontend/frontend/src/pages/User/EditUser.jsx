import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    profile: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Add null check for userId
        if (!userId) {
          alert("Invalid user ID");
          return;
        }

        const res = await axios.get(
          `http://localhost:8800/api/users/find/${userId}`
        );
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Error loading user data");
        navigate("/user");
      }
    };

    fetchUserData();
  }, [userId, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("first_name", user.first_name);
      formData.append("last_name", user.last_name);
      formData.append("email", user.email);
      formData.append("role", user.role);
      formData.append(
        "profile",
        user.profile instanceof File ? user.profile : ""
      );

      await axios.put(
        `http://localhost:8800/api/users/update/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/user");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update user. Please try again!");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle
        page="Update User"
        pages={["Update User"]}
        icon="bi bi-house-up"
      />
      <main id="main" className="main user-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Edit User</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        value={user.last_name}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Role</label>
                      <select
                        name="role"
                        value={user.role}
                        className="form-control"
                        onChange={handleChange}
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>Profile Image</label>
                      <input
                        type="file"
                        className="form-control"
                        name="profile"
                        onChange={handleChange}
                        accept="image/*"
                      />
                      {user.profile && typeof user.profile === "string" && (
                        <div className="mt-2">
                          <img
                            src={`http://localhost:8800/uploads/user/${user.profile}`}
                            alt="Current Profile"
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

export default EditUser;
