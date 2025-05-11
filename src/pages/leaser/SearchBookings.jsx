import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./leaser.css";

export default function SearchBookings() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [vehicleType, setVehicleType] = useState("car");
  const [carType, setCarType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [pincode, setPincode] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  useEffect(() => {
    handleSearch(); // auto-filter when filter dependencies change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicleType, carType, fuelType, pincode, minMileage, vehicles]);

  const handleSearch = () => {
    let filtered = vehicles.filter(
      (vehicle) =>
        vehicle.type === vehicleType &&
        vehicle.availability === "yes" &&
        (!date || vehicle.date === date) &&
        (!fuelType || vehicle.fuelType.toLowerCase() === fuelType.toLowerCase()) &&
        (!pincode || vehicle.pincode === pincode) &&
        (!minMileage || parseInt(vehicle.mileage) >= parseInt(minMileage))
    );

    if (vehicleType === "car" && carType) {
      filtered = filtered.filter(vehicle => vehicle.carType === carType);
    }

    setFilteredVehicles(filtered);
  };

  const handleBooking = (vehicleId) => {
    if (!date) {
      setError("Please select a booking date.");
      return;
    }

    const vehicle = vehicles.find(v => v.id === vehicleId);
    const newBooking = {
      id: Date.now(),
      vehicleId,
      leaserName: "Leaser Name",
      ownerName: "Owner Name",
      vehicleName: vehicle.name,
      status: "pending",
      date
    };

    const updatedVehicles = vehicles.map((v) =>
      v.id === vehicleId ? { ...v, availability: "no" } : v
    );
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));

    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    storedBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(storedBookings));

    setFilteredVehicles(updatedVehicles.filter(
      (v) => v.type === vehicleType && v.availability === "yes"
    ));
    setError("");
  };

  return (
    <div className="leaser-search-page-container">
      <Header />
      <div className="leaser-search-main-content">
        <h1>Search and Book Vehicles</h1>

        <div className="leaser-search-filters">
          <select
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
              setCarType("");
            }}
            className="leaser-search-select"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>

          {vehicleType === "car" && (
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="leaser-search-select"
            >
              <option value="">Select Car Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
              <option value="convertible">Convertible</option>
              <option value="minivan">Minivan</option>
              <option value="pickup">Pickup Truck</option>
            </select>
          )}

          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className="leaser-search-select"
          >
            <option value="">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="leaser-search-input"
          />

          <input
            type="number"
            placeholder="Min Mileage (km)"
            value={minMileage}
            onChange={(e) => setMinMileage(e.target.value)}
            className="leaser-search-input"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={today}
            className="leaser-search-date"
          />

          <button onClick={handleSearch} className="leaser-search-button">
            Search
          </button>
        </div>

        {error && <p className="leaser-search-error">{error}</p>}

        <div className="leaser-search-vehicle-list">
          <h3>Available Vehicles</h3>
          <div className="leaser-search-vehicle-card-container">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="leaser-search-vehicle-card">
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
                    onClick={() => handleBooking(vehicle.id)}
                    disabled={vehicle.availability === "no"}
                    className="leaser-search-book-button"
                  >
                    Book
                  </button>
                </div>
              ))
            ) : (
              <p>No vehicles available based on your search criteria.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
