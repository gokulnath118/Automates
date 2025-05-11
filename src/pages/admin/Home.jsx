import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./admin.css";

function AdminHome() {
  const [ownersCount, setOwnersCount] = useState(0);
  const [leasersCount, setLeasersCount] = useState(0);
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [carsCount, setCarsCount] = useState(0);
  const [bikesCount, setBikesCount] = useState(0);
  const [usersData, setUsersData] = useState([]);
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const owners = users.filter((user) => user.role === "owner");
    const leasers = users.filter((user) => user.role === "leaser");

    setOwnersCount(owners.length);
    setLeasersCount(leasers.length);

    setVehiclesCount(vehicles.length);
    setCarsCount(vehicles.filter((v) => v.type === "car").length);
    setBikesCount(vehicles.filter((v) => v.type === "bike").length);

    setUsersData([
      { name: "Owners", count: owners.length },
      { name: "Leasers", count: leasers.length },
    ]);

    const bookingsCount = {
      pending: bookings.filter((b) => b.status === "pending").length,
      approved: bookings.filter((b) => b.status === "approved").length,
      rejected: bookings.filter((b) => b.status === "rejected").length,
    };

    setBookingsData([
      { name: "Pending", count: bookingsCount.pending },
      { name: "Approved", count: bookingsCount.approved },
      { name: "Rejected", count: bookingsCount.rejected },
    ]);
  }, []);

  return (
    <div className="admin-page-container">
      <Header />
      <div className="admin-main-content">
        <h1 className="admin-welcome">Welcome, Admin</h1>
        <p className="admin-intro">
          You have full control over the platform. Use the tools below to manage
          users, vehicles, and view analytics.
        </p>

        {/* Admin Stats Grid */}
        <div className="admin-dashboard-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-icon">👤</div>
            <div className="admin-stat-content">
              <h3>Owners</h3>
              <p>{ownersCount}</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon">🧑‍💼</div>
            <div className="admin-stat-content">
              <h3>Leasers</h3>
              <p>{leasersCount}</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon">🚘</div>
            <div className="admin-stat-content">
              <h3>Cars</h3>
              <p>{carsCount}</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon">🏍️</div>
            <div className="admin-stat-content">
              <h3>Bikes</h3>
              <p>{bikesCount}</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon">📦</div>
            <div className="admin-stat-content">
              <h3>Total Vehicles</h3>
              <p>{vehiclesCount}</p>
            </div>
          </div>
        </div>

        {/* User Management Section */}
        <section className="admin-section">
          <div className="admin-section-header">
            <h2>👥 User Management</h2>
            <button onClick={() => window.location.href = "/admin/users"}>
              Manage Users
            </button>
          </div>
          <div className="admin-charts-column">
            <div className="admin-chart-container">
              <h4>User Overview</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={usersData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Vehicle Management Section */}
        <section className="admin-section">
          <div className="admin-section-header">
            <h2>🚗 Vehicle Management</h2>
            <button onClick={() => window.location.href = "/admin/vehicles"}>
              Manage Vehicles
            </button>
          </div>
          <div className="admin-charts-column">
            <div className="admin-chart-container">
              <h4>Vehicle Type Count</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={[
                    { name: "Cars", count: carsCount },
                    { name: "Bikes", count: bikesCount },
                  ]}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="admin-section">
          <div className="admin-section-header">
            <h2>📊 Booking Analytics</h2>
            <button onClick={() => window.location.href = "/admin/analytics"}>
              View Analytics
            </button>
          </div>
          <div className="admin-charts-column">
            <div className="admin-chart-container">
              <h4>Booking Status Overview</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={bookingsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;