// components/InvoiceBill.js
import React from "react";
import "./invoice.css";

const InvoiceBill = ({ invoice, saleItems }) => {
  // Company details
  const companyInfo = {
    name: "NeonTech",
    address: "Main Street Godakawela, Rathnapura",
    contact: "0769303605",
    email: "info@neontech.lk", // Added email based on your info
  };

  return (
    <div className="invoice-box" style={styles.invoiceBox}>
      {/* Company Header */}
      <div style={styles.header}>
        <h1>{companyInfo.name}</h1>
        <div>
          <p>{companyInfo.address}</p>
          <p>
            Contact: {companyInfo.contact} | Email: {companyInfo.email}
          </p>
        </div>
      </div>

      {/* Invoice Details */}
      <div style={styles.detailsSection}>
        <div style={styles.detailRow}>
          <span>Invoice #:</span>
          <span>{invoice.id}</span>
        </div>
        <div style={styles.detailRow}>
          <span>Date:</span>
          <span>{new Date(invoice.created_at).toLocaleDateString()}</span>
        </div>
        <div style={styles.detailRow}>
          <span>Customer:</span>
          <span>{invoice.customer_name}</span>
        </div>
      </div>

      {/* Items Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Warranty</th>
          </tr>
        </thead>
        <tbody>
          {saleItems.map((item, index) => (
            <tr key={index}>
              <td>
                {item.item_name} (ID: {item.item_id})
              </td>
              <td>{item.quantity}</td>
              <td>Rs.{item.unit_price.toFixed(2)}</td>
              <td>Rs.{item.total_price.toFixed(2)}</td>
              <td>{item.warranty_period} months</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
      <div style={styles.totalSection}>
        <h3>Total Amount: Rs.{invoice.total_amount.toFixed(2)}</h3>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>Thank you for your business!</p>
        <p>
          {companyInfo.name} | {companyInfo.address}
        </p>
      </div>
    </div>
  );
};

const styles = {
  invoiceBox: {
    maxWidth: "800px",
    margin: "auto",
    padding: "30px",
    border: "1px solid #eee",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Helvetica, Arial, sans-serif",
    color: "#555",
  },
  header: {
    textAlign: "center",
    borderBottom: "2px solid #eee",
    marginBottom: "20px",
    paddingBottom: "20px",
  },
  detailsSection: {
    marginBottom: "20px",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    "& td, & th": {
      border: "1px solid #eee",
      padding: "12px",
      textAlign: "left",
    },
    "& th": {
      backgroundColor: "#f9f9f9",
    },
  },
  totalSection: {
    textAlign: "right",
    borderTop: "2px solid #eee",
    paddingTop: "20px",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    color: "#888",
  },
};

export default InvoiceBill;
