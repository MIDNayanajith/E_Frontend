import React from "react";
import { Link } from "react-router-dom";

const CardFilter = ({ filterChange }) => {
  return (
    <div className="filter d-flex justify-content-end">
      <Link
        className="icon"
        to="#"
        data-bs-toggle="dropdown"
        style={{ color: "grey" }}
      >
        <i className="bi bi-three-dots"></i>
      </Link>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="#"
            onClick={() => filterChange("Today")}
          >
            Today
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="#"
            onClick={() => filterChange("This Month")}
          >
            This Month
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="#"
            onClick={() => filterChange("This Year")}
          >
            This Year
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CardFilter;
