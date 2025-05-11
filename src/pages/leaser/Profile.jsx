import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./leaser.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser?.role === "leaser") setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/";
  };

  return (
    <div className="leaser-page-container">
      <Header />
      <div className="leaser-profilemain-content">
        <div className="leaser-profile-photo">
          <img src={user.photo} alt="Profile" />
        </div>

        <div className="leaser-profile-info">
          <h1>Leaser Profile</h1>

          {editing ? (
            <>
              <input name="name" value={user.name || ""} onChange={handleChange} placeholder="Name" />
              <input name="email" value={user.email || ""} onChange={handleChange} placeholder="Email" />
              <input name="mobileNo" value={user.mobileNo || ""} onChange={handleChange} placeholder="Mobile Number" />
              <select name="gender" value={user.gender || ""} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="file" name="photo" onChange={handleChange} />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Mobile No:</strong> {user.mobileNo}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <button onClick={() => setEditing(true)}>Edit</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}

          
        </div>
      </div>
      <Footer />
    </div>
  );
}
