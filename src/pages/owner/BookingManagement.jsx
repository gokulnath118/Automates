import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import "./owner.css";

export default function BookingManagement() {
  const [bookings, setBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleApprove = (bookingId) => {
    const updated = bookings.map(b =>
      b.id === bookingId ? { ...b, status: "approved" } : b
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const handleReject = (bookingId) => {
    const updated = bookings.map(b =>
      b.id === bookingId ? { ...b, status: "rejected" } : b
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const pending = bookings.filter(b => b.status === "pending");
  const processed = bookings.filter(b => b.status !== "pending");
  const filteredProcessed = processed.filter(b =>
    statusFilter === "all" ? true : b.status === statusFilter
  );

  return (
    <div className="owner-booking-manage-page-container">
      <Header />
      <div className="owner-booking-manage-main-content">
        <h1 className="owner-booking-manage-title">Booking Management</h1>

        {/* Pending Bookings Section */}
        <div className="owner-booking-manage-pending-section">
          <h2 className="owner-booking-manage-section-title">Pending Bookings</h2>
          {pending.length > 0 ? (
            <div className="owner-booking-manage-cards-grid">
              {pending.map((b) => (
                <div key={b.id} className="owner-booking-manage-card pending">
                  <h4 className="owner-booking-manage-vehicle-name">{b.vehicleName}</h4>
                  <p><strong>Status:</strong> <span className="owner-booking-manage-status-pending">{b.status}</span></p>
                  <p><strong>Leaser:</strong> {b.leaserName}</p>
                  <div className="owner-booking-manage-action-buttons">
                    <button 
                      onClick={() => handleApprove(b.id)} 
                      className="owner-booking-manage-approve-btn"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleReject(b.id)} 
                      className="owner-booking-manage-reject-btn"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="owner-booking-manage-no-bookings">No pending bookings.</p>
          )}
        </div>

        {/* Processed Bookings Section */}
        <div className="owner-booking-manage-processed-section">
          <div className="owner-booking-manage-processed-header">
            <h2 className="owner-booking-manage-section-title">Processed Bookings</h2>
            <select
              className="owner-booking-manage-filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {filteredProcessed.length > 0 ? (
            <div className="owner-booking-manage-cards-row">
              {filteredProcessed.map((b) => (
                <div key={b.id} className="owner-booking-manage-card processed">
                  <h4 className="owner-booking-manage-vehicle-name">{b.vehicleName}</h4>
                  <p><strong>Leaser:</strong> {b.leaserName}</p>
                  <p className={`owner-booking-manage-status ${
                    b.status === "approved" ? "approved" : "rejected"
                  }`}>
                    {b.status.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="owner-booking-manage-no-bookings">No processed bookings found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}