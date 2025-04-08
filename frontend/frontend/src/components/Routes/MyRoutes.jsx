import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";

import { Routes, Route } from "react-router-dom";
import User from "../../pages/User/User";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default MyRoutes;
