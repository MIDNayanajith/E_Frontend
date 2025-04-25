import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            {" "}
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">
            {" "}
            <i class="bi bi-person"></i>
            <span>User</span>
          </Link>
        </li>
        <p className="topic">Inventory</p>
        {/* <hr /> */}
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            {" "}
            <i class="bi bi-laptop"></i>
            <span>Products</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/purchase" className="nav-link">
            {" "}
            <i class="bi bi-bag"></i>
            <span>Purchase</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            {" "}
            <i className="bi bi-cash-stack"></i>
            <span>Sales</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/suppliers" className="nav-link">
            {" "}
            <i class="bi bi-person-up"></i>
            <span>Suppliers</span>
          </Link>
        </li>
        {/* Invoice */}
        <li className="nav-item">
          <Link
            to="#"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i class="bi bi-receipt"></i>
            <span>Invoice</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/addinvoice ">
                <i className="bi bi-circle"></i>
                <span>Add Invoice</span>
              </Link>
            </li>
            <li>
              <Link to="/invoice">
                <i className="bi bi-circle"></i>
                <span>View Invoice</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
