import React, { useState, useEffect } from "react";
import "./admin.css";
import Header from "./Header";
import Footer from "./Footer";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all"); // "all", "blocked", "unblocked"
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleBlockToggle = (email) => {
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, blocked: !user.blocked } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const filteredUsers = users.filter((user) => {
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "blocked" && user.blocked) ||
      (statusFilter === "unblocked" && !user.blocked);
    const matchesSearch = user.name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesRole && matchesStatus && matchesSearch;
  });

  return (
    <div className="admin-page-container">
      <Header />
      <div className="admin-main-content">
        <h2>User Management</h2>
        <p>Manage users (Owners, Leasers) of the platform.</p>

        <div className="admin-filter-controls">
          <select onChange={(e) => setRoleFilter(e.target.value)} value={roleFilter}>
            <option value="all">All Roles</option>
            <option value="owner">Owner</option>
            <option value="leaser">Leaser</option>
          </select>

          <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
            <option value="all">All Statuses</option>
            <option value="blocked">Blocked</option>
            <option value="unblocked">Unblocked</option>
          </select>

          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="user-list">
          {filteredUsers.map((user, idx) => (
            <div key={idx} className="user-card">
              <p><strong>Name:</strong> {user.name || "N/A"}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Status:</strong> {user.blocked ? "Blocked" : "Active"}</p>
              <button onClick={() => handleBlockToggle(user.email)}>
                {user.blocked ? "Unblock" : "Block"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserManagement;
