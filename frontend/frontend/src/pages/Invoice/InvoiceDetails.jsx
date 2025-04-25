// InvoiceDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InvoiceBill from "./InvoiceBill";
import { toast } from "react-toastify";
import "./invoice.css";

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/invoice/getInvoice/${invoiceId}`
        );
        setInvoice(res.data);
      } catch (err) {
        toast.error("Error loading invoice");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoice();
  }, [invoiceId]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <div>Loading...</div>;
  if (!invoice) return <div>Invoice not found</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <button
          className="btn btn-secondary"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button className="btn btn-primary" onClick={handlePrint}>
          Print Bill
        </button>
      </div>

      <InvoiceBill invoice={invoice} saleItems={invoice.items} />
    </div>
  );
};

export default InvoiceDetails;
