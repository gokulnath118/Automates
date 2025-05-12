import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./leaser.css";

function LeaserHome() {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [approvedBookings, setApprovedBookings] = useState([]);
  const [rejectedBookings, setRejectedBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    setBookings(storedBookings);
    setVehicles(storedVehicles);

    const getVehicle = (id) => storedVehicles.find(v => v.id === id);

    setPendingBookings(storedBookings
      .filter((b) => b.status === "pending")
      .map((b) => ({ ...b, vehicle: getVehicle(b.vehicleId) }))
    );
    setApprovedBookings(storedBookings
      .filter((b) => b.status === "approved")
      .map((b) => ({ ...b, vehicle: getVehicle(b.vehicleId) }))
    );
    setRejectedBookings(storedBookings
      .filter((b) => b.status === "rejected")
      .map((b) => ({ ...b, vehicle: getVehicle(b.vehicleId) }))
    );
  }, []);

  return (
    <div className="leaser-home-page-container">
      <Header />
      <div className="leaser-home-main-content">
        <div className="leaser-home-header">
          <h1 className="leaser-home-welcome">Welcome, Leaser</h1>
        </div>

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

        {/* Approved Bookings */}
        <section className="leaser-home-confirmed-section">
          <div className="leaser-home-section-header">
            <h2>Confirmed Bookings</h2>
            <button
              className="leaser-home-view-all-btn"
              onClick={() => navigate("/leaser/search")}
            >
              Add new Bookings
            </button>
          </div>

          {approvedBookings.length > 0 ? (
            <div className="leaser-home-vehicle-row">
              {approvedBookings.map((booking) => (
                <div key={booking.id} className="leaser-home-vehicle-card">
                  <div className="leaser-home-vehicle-image">
                    <img
                      src={booking.vehicle?.image || "/default-car-image.jpg"}
                      alt={booking.vehicle?.name || "Vehicle"}
                    />
                  </div>
                  <div className="leaser-home-vehicle-info">
                    <h4>{booking.vehicle?.name}</h4>
                    <p><strong>Vehicle No:</strong> {booking.vehicle?.vehicleNo}</p>
                    <p><strong>Contact:</strong> {booking.vehicle?.mobileNo}</p>
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
            </div>
          )}
        </section>

        {/* Pending Bookings */}
        <section className="leaser-home-pending-section">
          <div className="leaser-home-section-header">
            <h2>Pending Bookings</h2>
            <button
              className="leaser-home-view-all-btn"
              onClick={() => navigate("/leaser/bookings")}
            >
              Manage My Bookings
            </button>
          </div>

          {pendingBookings.length > 0 ? (
            <div className="leaser-home-booking-list">
              {pendingBookings.map((booking) => (
                <div key={booking.id} className="leaser-home-booking-card">
                  <div className="booking-info">
                    <h4>{booking.vehicle?.name}</h4>
                    <p><strong>Contact:</strong> {booking.vehicle?.mobileNo}</p>
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
