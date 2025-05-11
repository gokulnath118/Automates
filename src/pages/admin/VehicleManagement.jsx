import React, { useState, useEffect } from "react";
import "./admin.css";
import Header from "./Header";
import Footer from "./Footer";

function VehicleManagement() {
  const [vehicles, setVehicles] = useState([]);
  const [filters, setFilters] = useState({
    type: "all",
    vehicleCategory: "all",
    fuelType: "all",
    pincode: "",
    name: "",
  });

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  const handleDelete = (vehicleId) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== vehicleId);
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesType = filters.type === "all" || vehicle.type === filters.type;
    const matchesCategory = filters.vehicleCategory === "all" || vehicle.vehicleCategory === filters.vehicleCategory;
    const matchesFuel = filters.fuelType === "all" || vehicle.fuelType === filters.fuelType;
    const matchesPincode = filters.pincode === "" || vehicle.pincode === filters.pincode;
    const matchesName = vehicle.name.toLowerCase().includes(filters.name.toLowerCase());

    return matchesType && matchesCategory && matchesFuel && matchesPincode && matchesName;
  });

  return (
    <div className="admin-page-container">
      <Header />
      <div className="admin-main-content">
        <h2>Vehicle Management</h2>
        <p>Here you can manage all vehicles listed by owners.</p>

        <div className="admin-filters">
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="all">All Types</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>

          <select name="vehicleCategory" value={filters.vehicleCategory} onChange={handleFilterChange}>
            <option value="all">All Car Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
          </select>

          <select name="fuelType" value={filters.fuelType} onChange={handleFilterChange}>
            <option value="all">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <input
            type="text"
            name="pincode"
            placeholder="Filter by Pincode"
            value={filters.pincode}
            onChange={handleFilterChange}
          />

          <input
            type="text"
            name="name"
            placeholder="Search Vehicle Name"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </div>

        <div className="admin-vehicles-card-container">
          {[...filteredVehicles].reverse().map((vehicle) => (
            <div className="admin-vehicle-card" key={vehicle.id}>
              <img
                src={vehicle.image || "/default-car-image.jpg"}
                alt={vehicle.name}
                className="leaser-search-vehicle-image"
              />
              <h3>{vehicle.name}</h3>
              <p><strong>Vehicle:</strong> {vehicle.type}</p>
              {vehicle.type === "car" && (
                <p><strong>Car Type:</strong> {vehicle.vehicleCategory}</p>
              )}
              <p><strong>Transmission:</strong> {vehicle.transmission}</p>
              <p><strong>Fuel Type:</strong> {vehicle.fuelType}</p>
              <p><strong>Seating Capacity:</strong> {vehicle.seatingCapacity}</p>
              <p><strong>Rent per Day:</strong> ₹ {vehicle.rentPerDay}</p>
              <p><strong>Description:</strong> {vehicle.description}</p>
              <p><strong>Mileage:</strong> {vehicle.mileage} km</p>
              <p><strong>Vehicle Number:</strong> {vehicle.vehicleNo}</p>
              <p><strong>Full Address:</strong> {vehicle.address}</p>
              <p><strong>Pincode:</strong> {vehicle.pincode || "Not Provided"}</p>
              <p><strong>Owner Contact:</strong> {vehicle.mobileNo || "Not Provided"}</p>
              <p className={`vehicle-status ${vehicle.availability === "yes" ? "available" : "not-available"}`}>
                {vehicle.availability === "yes" ? "Available" : "Not Available"}
              </p>
              <button
                className="admin-delete-button"
                onClick={() => handleDelete(vehicle.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VehicleManagement;
