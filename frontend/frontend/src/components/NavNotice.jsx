import { Link } from "react-router-dom";

const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
      <Link className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </Link>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <Link to="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View All
            </span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum variants oditseno</p>
            <p>30 min.ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum variants oditeno</p>
            <p>35 min.ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <Link to="#">See All Notifications</Link>
        </li>
      </ul>
    </li>
  );
};

export default NavNotice;
