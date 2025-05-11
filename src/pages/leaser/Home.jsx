import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./leaser.css";

function LeaserHome() {
  const [bookings, setBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [confirmedBookings, setConfirmedBookings] = useState([]);
  const [approvedBookings, setApprovedBookings] = useState([]);
  const [rejectedBookings, setRejectedBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);

    // Categorize bookings based on status
    setPendingBookings(storedBookings.filter((booking) => booking.status === "pending"));
    setConfirmedBookings(storedBookings.filter((booking) => booking.status === "approved"));
    setApprovedBookings(storedBookings.filter((booking) => booking.status === "approved"));
    setRejectedBookings(storedBookings.filter((booking) => booking.status === "rejected"));
  }, []);

  return (
    <div className="leaser-home-page-container">
      <Header />
      <div className="leaser-home-main-content">
        <div className="leaser-home-header">
          <h1 className="leaser-home-welcome">Welcome, Leaser</h1>
        </div>

        {/* Leaser Dashboard Stats */}
        <div className="leaser-home-stats-grid">
          <div className="leaser-home-stat-card total-bookings">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3>Total Bookings</h3>
              <p>{bookings.length}</p>
            </div>
          </div>
          <div className="leaser-home-stat-card approved-bookings">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>Approved</h3>
              <p>{approvedBookings.length}</p>
            </div>
          </div>
          <div className="leaser-home-stat-card rejected-bookings">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>Rejected</h3>
              <p>{rejectedBookings.length}</p>
            </div>
          </div>
          <div className="leaser-home-stat-card pending-bookings">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>Pending</h3>
              <p>{pendingBookings.length}</p>
            </div>
          </div>
        </div>

        {/* Confirmed Bookings Section */}
        <section className="leaser-home-confirmed-section">
          <div className="leaser-home-section-header">
            <h2>Confirmed Bookings</h2>
            <button 
              className="leaser-home-view-all-btn"
              onClick={() => window.location.href = "/leaser/search"}
            >
              Add new Bookings
            </button>
          </div>

          {confirmedBookings.length > 0 ? (
            <div className="leaser-home-vehicle-row">
              {confirmedBookings.slice(0, 4).map((booking) => (
                <div key={booking.id} className="leaser-home-vehicle-card">
                  <div className="leaser-home-vehicle-image">
                    <img 
                      src={booking.vehicleImage || "/default-car-image.jpg"} 
                      alt={booking.vehicleName} 
                    />
                  </div>
                  <div className="leaser-home-vehicle-info">
                    <h4>{booking.vehicleName}</h4>
                    <p><strong>Vehicle No:</strong> {booking.vehicleNo}</p>
                    <p><strong>Owner:</strong> {booking.ownerName}</p>
                    <span className="leaser-home-vehicle-status available">
                      Confirmed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="leaser-home-empty-state">
              <p>No confirmed bookings yet</p>
              <button 
                className="leaser-home-action-btn"
                onClick={() => window.location.href = "/leaser/search"}
              >
                Find Vehicles
              </button>
            </div>
          )}
        </section>

        {/* Pending Bookings Section */}
        <section className="leaser-home-pending-section">
          <div className="leaser-home-section-header">
            <h2>Pending Bookings</h2>
            <button 
              className="leaser-home-view-all-btn"
              onClick={() => window.location.href = "/leaser/bookings"}
            >
              Manage My Bookings
            </button>
          </div>

          {pendingBookings.length > 0 ? (
            <div className="leaser-home-booking-list">
              {pendingBookings.slice(0, 3).map((booking) => (
                <div key={booking.id} className="leaser-home-booking-card">
                  <div className="booking-info">
                    <h4>{booking.vehicleName}</h4>
                    <p><strong>Owner:</strong> {booking.ownerName}</p>
                    <p><strong>Contact:</strong> {booking.ownerMobileNo}</p>
                  </div>
                  <span className="leaser-home-booking-status pending">
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="leaser-home-empty-state">
              <p>No pending bookings</p>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default LeaserHome;