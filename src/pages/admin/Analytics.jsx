import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import "./admin.css";
import Header from "./Header";
import Footer from "./Footer";

function AdminAnalytics() {
  const [bookings, setBookings] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [chartType, setChartType] = useState("bar");

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  // Filter bookings by date range
  const filteredBookings = bookings.filter((b) => {
    const bookingDate = new Date(b.date);
    return (
      (startDate ? bookingDate >= new Date(startDate) : true) &&
      (endDate ? bookingDate <= new Date(endDate) : true)
    );
  });

  // Data for chart (status counts)
  const chartData = [
    { name: "Pending", count: filteredBookings.filter(b => b.status === "pending").length },
    { name: "Approved", count: filteredBookings.filter(b => b.status === "approved").length },
    { name: "Rejected", count: filteredBookings.filter(b => b.status === "rejected").length },
  ];

  const COLORS = ['#82ca9d', '#8884d8', '#ffc658'];

  return (
    <div className="admin-analytics-page-container">
      <Header />
      <div className="admin-analytics-main-content">
        <h2 className="admin-analytics-heading">Analytics</h2>
        <p className="admin-analytics-subtext">Analyze platform booking statistics.</p>

        <div className="admin-analytics-filters">
          {/*<label>Start Date:</label>
           <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="admin-analytics-date-filter"
          />

          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="admin-analytics-date-filter"
          /> */}

          <label>Chart Type:</label>
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className="admin-analytics-chart-type-select"
          >
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>

        <div className="admin-analytics-chart-section">
          <h4>Status Overview</h4>
          <ResponsiveContainer width="100%" height={300}>
            {chartType === "bar" ? (
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            ) : chartType === "line" ? (
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            ) : (
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminAnalytics;
