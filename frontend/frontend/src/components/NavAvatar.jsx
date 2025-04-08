import { Link } from "react-router-dom";

const NavAvatar = () => {
  return (
    <li className="nav-item dropdown pe-3">
      <Link
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        {/* <img
          className="rounded-circle"
          src="https://via.placeholder.com/150"
          alt="profile"
        /> */}
        <i className="bi bi-person-circle fs-4 me-2"></i>
        <span className="d-none d-md-block dropdown-toggle ps-2">F.David</span>
      </Link>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>David</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-power-off"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default NavAvatar;
