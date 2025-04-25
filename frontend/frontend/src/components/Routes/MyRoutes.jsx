import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";

import { Routes, Route } from "react-router-dom";
import User from "../../pages/User/User";
import AddUser from "../../pages/User/AddUser";
import EditUser from "../../pages/User/EditUser";
import Products from "../../pages/products/Products";
import AddProduct from "../../pages/products/AddProduct";
import EditProduct from "../../pages/products/EditProduct";
import Supplier from "../../pages/Suppliers/Supplier";
import AddSupplier from "../../pages/Suppliers/AddSupplier";
import EditSupplier from "../../pages/Suppliers/EditSupplier";
import Purchase from "../../pages/Purchase/Purchase";
import AddPurchase from "../../pages/Purchase/AddPurchase";
import EditPurchase from "../../pages/Purchase/EditPurchase";
import Invoice from "../../pages/Invoice/Invoice";
import AddInvoice from "../../pages/Invoice/AddInvoice";
import InvoiceDetails from "../../pages/Invoice/InvoiceDetails";
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
      <Route path="/suppliers" element={<Supplier />} />
      <Route path="/addsuppliers" element={<AddSupplier />} />
      <Route path="/editsuppliers/:SupId" element={<EditSupplier />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/addpurchase" element={<AddPurchase />} />
      <Route path="editpurchase/:PurchaseId" element={<EditPurchase />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/addinvoice" element={<AddInvoice />} />
      <Route path="/invoice/details/:invoiceId" element={<InvoiceDetails />} />
    </Routes>
  );
}

export default MyRoutes;
