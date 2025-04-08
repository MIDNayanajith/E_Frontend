import React, { useState } from "react";
import CardFilter from "./CardFilter"; // Import CardFilter
import "./card.css";
const Crads = () => {
  const [filter, setFilter] = useState("Today");

  // Corrected filter change handler
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="row">
      <div className="col-xxl-4 col-md-6">
        <div className="card info-card dashboard-card">
          <div className="card-body">
            <CardFilter filterChange={handleFilterChange} />
            <h5 className="card-title">
              Customers <span className="filter-text">| {filter}</span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-person"></i>
              </div>
              <div className="ps-3">
                <h6>120</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-4 col-md-6">
        <div className="card info-card dashboard-card">
          <div className="card-body">
            <CardFilter filterChange={handleFilterChange} />
            <h5 className="card-title">
              Revenue <span className="filter-text">| {filter}</span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div className="ps-3">
                <h6>$56,000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-4 col-md-6">
        <div className="card info-card dashboard-card">
          <div className="card-body">
            <CardFilter filterChange={handleFilterChange} />
            <h5 className="card-title">
              Orders <span className="filter-text">| {filter}</span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-cart"></i>
              </div>
              <div className="ps-3">
                <h6>78</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crads;
