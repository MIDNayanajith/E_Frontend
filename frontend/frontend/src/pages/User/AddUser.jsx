import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
    profile: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // handle file input
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }

    try {
      await axios.post("http://localhost:8800/api/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/user");
    } catch (e) {
      console.log(e);
      alert("Failed to add user. Please try again!");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <PageTitle page="Add User" pages={["Add User"]} icon="bi bi-house-up" />
      <main id="main" className="main user-main">
        <div className="container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Add new User</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="fname"
                        placeholder="First Name"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        id="lname"
                        placeholder="Last Name"
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
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="role" className="form-label">
                        Role
                      </label>
                      <select
                        name="role"
                        id="role"
                        className="form-control"
                        onChange={handleChange}
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>Profile</label>
                      <input
                        type="file"
                        className="form-control"
                        name="profile"
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

export default AddUser;
