import React, { useState, useEffect } from "react";
import "./admin.css";
import Header from "./Header";
import Footer from "./Footer";

function AdminBookingManagement() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  useEffect(() => {
    let filtered = bookings;

    if (statusFilter !== "all") {
      filtered = filtered.filter((b) => b.status === statusFilter);
    }

    if (startDate) {
      filtered = filtered.filter((b) => new Date(b.date) >= new Date(startDate));
    }

    if (endDate) {
      filtered = filtered.filter((b) => new Date(b.date) <= new Date(endDate));
    }

    setFilteredBookings(filtered);
  }, [statusFilter, startDate, endDate, bookings]);

  const downloadReport = () => {
    let csvContent = "Date,Booking ID,Vehicle No.,Status,Leaser,Owner\n";

    filteredBookings.forEach(booking => {
      csvContent += `${booking.date},${booking.id},${booking.vehicleNo || 'N/A'},${booking.status},${booking.leaserName},${booking.ownerName}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `bookings_report_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-booking-management-page-container">
      <Header />
      <div className="admin-booking-management-main-content">
        <div className="admin-booking-management-header">
          <div className="admin-booking-management-title-group">
            <h2 className="admin-booking-management-heading">Booking Management</h2>
            <p className="admin-booking-management-subtext">View and analyze all platform bookings.</p>
          </div>
          <button 
            onClick={downloadReport}
            className="admin-booking-management-download-btn"
            disabled={filteredBookings.length === 0}
          >
            Download Report
          </button>
        </div>

        <div className="admin-booking-management-filters">
          <div className="admin-booking-management-filter-group">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="admin-booking-management-status-filter-select"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="admin-booking-management-filter-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="admin-booking-management-date-input"
            />
          </div>

          <div className="admin-booking-management-filter-group">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="admin-booking-management-date-input"
            />
          </div>
        </div>

        <div className="admin-booking-management-booking-list">
          {filteredBookings.length > 0 ? (
            <div className="admin-booking-management-booking-cards-container">
              {filteredBookings.map((booking, index) => (
                <div 
                  key={booking.id} 
                  className="admin-booking-management-booking-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="admin-booking-management-card-header">
                    <h4 className="admin-booking-management-vehicle-name">{booking.vehicleName}</h4>
                    <span className={`admin-booking-management-status admin-booking-management-status-${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="admin-booking-management-card-body">
                    <p><strong>Booking ID:</strong> {booking.id}</p>
                    <p><strong>Vehicle No.:</strong> {booking.vehicleNo || 'N/A'}</p>
                    <p><strong>Leaser:</strong> {booking.leaserName}</p>
                    <p><strong>Owner:</strong> {booking.ownerName}</p>
                    <p><strong>Date:</strong> {booking.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="admin-booking-management-no-bookings">
              <p>No bookings available for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminBookingManagement;
