import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./leaser.css";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    setBookings(storedBookings);
    setVehicles(storedVehicles);
    setFilteredBookings(storedBookings);
  }, []);

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setFilteredBookings(
      updatedBookings.filter(
        (booking) => booking.status === filterStatus || filterStatus === "all"
      )
    );
  };

  const handleFilterChange = (e) => {
    const status = e.target.value;
    setFilterStatus(status);
    if (status === "all") {
      setFilteredBookings(bookings);
    } else {
      setFilteredBookings(bookings.filter((booking) => booking.status === status));
    }
  };

  const getVehicleDetails = (vehicleId) => {
    return vehicles.find((v) => v.id === vehicleId);
  };

  return (
    <div className="leaser-managebookings-page-container">
      <Header />
      <div className="leaser-managebookings-main-content">
        <h1>My Bookings</h1>

        <div className="leaser-managebookings-filter-container">
          <div className="leaser-managebookings-filter-wrapper">
            <label htmlFor="status-filter" className="leaser-managebookings-filter-label">
              Filter by Status:
            </label>
            <select
              id="status-filter"
              value={filterStatus}
              onChange={handleFilterChange}
              className="leaser-managebookings-filter-select"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="leaser-managebookings-booking-card-container">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => {
              const vehicle = getVehicleDetails(booking.vehicleId);
              return (
                <div key={booking.id} className="leaser-managebookings-booking-card">
                  <img
                    src={vehicle?.image || "/default-car-image.jpg"}
                    alt={vehicle?.name}
                    className="leaser-managebookings-booking-image"
                  />
                  <div className="leaser-managebookings-booking-content">
                    <h3>{vehicle?.name}</h3>
                    <p className={`booking-status booking-status-${booking.status}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </p>
                    <div className="leaser-managebookings-booking-info">
                      <p><strong>From:</strong> {booking.startDate}</p>
                      <p><strong>To:</strong> {booking.endDate}</p>
                      <p><strong>Type:</strong> {vehicle?.type}</p>
                      {vehicle?.type === "car" && (
                        <p><strong>Category:</strong> {vehicle?.vehicleCategory}</p>
                      )}
                      <p><strong>Fuel:</strong> {vehicle?.fuelType}</p>
                      <p><strong>Price:</strong> ₹{vehicle?.rentPerDay}/day</p>
                      <p><strong>Contact:</strong> {vehicle?.mobileNo || "N/A"}</p>
                    </div>

                    {booking.status === "pending" && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="leaser-managebookings-cancel-button"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="leaser-managebookings-empty-state">
              <p>No bookings to manage.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
