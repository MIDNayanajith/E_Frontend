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
          <Link to="/" className="nav-link">
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
      </ul>
    </aside>
  );
};

export default Sidebar;
