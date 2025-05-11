import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./owner.css";

function OwnerHome() {
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalVehicles: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    setVehicles(storedVehicles);
    setBookings(storedBookings);

    const pending = storedBookings.filter(b => b.status === "pending").length;
    const approved = storedBookings.filter(b => b.status === "approved").length;
    const rejected = storedBookings.filter(b => b.status === "rejected").length;

    setStats({
      totalVehicles: storedVehicles.length,
      pending,
      approved,
      rejected
    });
  }, []);

  return (
    <div className="owner-home-page-container">
      <Header />
      <div className="owner-home-main-content">
        <div className="owner-home-header">
          <h1 className="owner-home-welcome">Welcome Owner</h1>
        </div>

        {/* Stats Overview */}
        <div className="owner-home-stats-grid">
          <div className="owner-home-stat-card">
            <div className="stat-icon">🚗</div>
            <div className="stat-content">
              <h3>Total Vehicles</h3>
              <p>{stats.totalVehicles}</p>
            </div>
          </div>
          <div className="owner-home-stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>Pending</h3>
              <p>{stats.pending}</p>
            </div>
          </div>
          <div className="owner-home-stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>Approved</h3>
              <p>{stats.approved}</p>
            </div>
          </div>
          <div className="owner-home-stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>Rejected</h3>
              <p>{stats.rejected}</p>
            </div>
          </div>
        </div>

        {/* Vehicle Management Section */}
        <section className="owner-home-vehicle-section">
          <div className="owner-home-section-header">
            <h2 style={{color:'white'}}>Your Vehicles</h2>
            <button 
              className="owner-home-add-btn"
              onClick={() => window.location.href = "/owner/vehicle-management"}
            >
              + Add Vehicle
            </button>
          </div>

          {vehicles.length > 0 ? (
            <div className="owner-home-vehicle-row">
              {vehicles.slice(0, 4).map((vehicle) => (
                <div key={vehicle.id} className="owner-home-vehicle-card">
                  {vehicle.image && (
                    <div className="owner-home-vehicle-image">
                      <img src={vehicle.image} alt={vehicle.name} />
                    </div>
                  )}
                  <div className="owner-home-vehicle-info">
                    <h4>{vehicle.name}</h4>
                    <p>{vehicle.vehicleNo}</p>
                    <span className={`owner-home-vehicle-status ${vehicle.availability === "yes" ? "available" : "not-available"}`}>
                      {vehicle.availability === "yes" ? "Available" : "Booked"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="owner-home-empty-state">
              <p>No vehicles added yet</p>
              <button 
                className="owner-home-action-btn"
                onClick={() => window.location.href = "/owner/vehicle-management"}
              >
                Add Your First Vehicle
              </button>
            </div>
          )}
        </section>

        {/* Booking Management Section */}
        <section className="owner-home-booking-section">
          <div className="owner-home-section-header">
            <h2 style={{color:"white"}}>Recent Bookings</h2>
            <button 
              className="owner-home-view-all-btn"
              onClick={() => window.location.href = "/owner/booking-management"}
            >
              View All Bookings
            </button>
          </div>

          {bookings.filter(b => b.status === "pending").length > 0 ? (
            <div className="owner-home-booking-list">
              {bookings
                .filter(b => b.status === "pending")
                .slice(0, 3)
                .map((booking) => (
                  <div key={booking.id} className="owner-home-booking-card">
                    <div className="booking-info">
                      <h4>{booking.leaserName}</h4>
                      <p>Requested: {booking.vehicleName}</p>
                      <p>Date: {booking.date}</p>
                    </div>
                    <span className={`owner-home-booking-status ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
            </div>
          ) : (
            <div className="owner-home-empty-state">
              <p>No pending bookings</p>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default OwnerHome;