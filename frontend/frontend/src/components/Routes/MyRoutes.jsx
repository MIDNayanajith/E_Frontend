import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";

import { Routes, Route } from "react-router-dom";
import User from "../../pages/User/User";
import AddUser from "../../pages/User/AddUser";
import EditUser from "../../pages/User/EditUser";
import Products from "../../pages/products/Products";
import AddProduct from "../../pages/products/AddProduct";
import EditProduct from "../../pages/products/EditProduct";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/edituser/:userId" element={<EditUser />} />
      <Route path="/products" element={<Products />} />
      <Route path="/addproducts" element={<AddProduct />} />
      <Route path="/editproducts/:ItemId" element={<EditProduct />} />
    </Routes>
  );
}

export default MyRoutes;
