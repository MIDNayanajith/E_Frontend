import { Link } from "react-router-dom";

const NavMessage = () => {
  return (
    <li className="nav-item dropdown">
      <Link className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </Link>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <Link to="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <Link to="#" src="#" alt="" className="rounded-circle" />
          <div>
            <h4>Maria Hudson</h4>
            <p>
              Velt asperiores et ducimus solta repudiance labore officia est
              ut..
            </p>
            <p>4 hrs ago</p>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default NavMessage;
