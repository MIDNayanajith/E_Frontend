import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";

import { Routes, Route } from "react-router-dom";
import User from "../../pages/User/User";
import AddUser from "../../pages/User/AddUser";
import EditUser from "../../pages/User/EditUser";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/edituser/:userId" element={<EditUser />} />
    </Routes>
  );
}

export default MyRoutes;
