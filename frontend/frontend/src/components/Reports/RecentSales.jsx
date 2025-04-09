import { useState } from "react";
import CardFilter from "../Cards/CardFilter";
import "./recentSales.css";

const RecentSales = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span> | {filter} </span>
        </h5>
        {/* IMPLEMENT TABLE HERE */}
        <table className="table table-borderless datatable">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer</th>
              <th scope="col">Product</th>
              <th scope="col">price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="highlight-row">
              <th scope="row">1</th>
              <td>Kasun Perera</td>
              <td>Banana Muffins</td>
              <td>Rs. 1200</td>
              <td>
                <span className="badge badge-success">Delivered</span>
              </td>
            </tr>
            <tr className="highlight-row">
              <th scope="row">2</th>
              <td>Sanduni Silva</td>
              <td>Fiber Handbag</td>
              <td>Rs. 2200</td>
              <td>
                <span className="badge badge-warning">Pending</span>
              </td>
            </tr>
            <tr className="highlight-row">
              <th scope="row">3</th>
              <td>Isuru Fernando</td>
              <td>Banana Cake</td>
              <td>Rs. 1800</td>
              <td>
                <span className="badge badge-success">Delivered</span>
              </td>
            </tr>
            <tr className="highlight-row">
              <th scope="row">4</th>
              <td>Nimali Jayasuriya</td>
              <td>Wall Art</td>
              <td>Rs. 3500</td>
              <td>
                <span className="badge badge-danger">Cancelled</span>
              </td>
            </tr>
            <tr className="highlight-row">
              <th scope="row">5</th>
              <td>Tharindu Nimesh</td>
              <td>Lunch Box</td>
              <td>Rs. 950</td>
              <td>
                <span className="badge badge-info">Shipped</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSales;
