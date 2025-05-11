import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import "./owner.css";
import Header from './Header';
import Footer from './Footer';

export default function Profile() {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate(); 
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser?.role === "owner") setUser(storedUser);
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
    <div className="owner-profile-page-container"> 
      <Header />
      <div className="owner-profile-main-content">
        <div className="owner-profile-photo">
          <img src={user.photo} alt="Profile" />
        </div>
        <div className="owner-profile-info">
          <h1>Owner Profile</h1>
          {editing ? (
            <>
              <input
                name="name"
                value={user.name || ""}
                onChange={handleChange}
                placeholder="Name"
                type="text"
              />
              <input
                name="email"
                value={user.email || ""}
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
              <input
                name="mobileNo"
                value={user.mobileNo || ""}
                onChange={handleChange}
                placeholder="Mobile Number"
                type="text"
              />
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
              <p><strong>Mobile:</strong> {user.mobileNo}</p>
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
