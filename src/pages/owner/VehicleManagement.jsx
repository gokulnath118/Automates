import React, { useState, useEffect } from "react";
import "./owner.css";
import Header from './Header';
import Footer from './Footer';

export default function VehicleManagement() {
  const [name, setName] = useState("");
  const [type, setType] = useState("car");
  const [mobileNo, setMobileNo] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [description, setDescription] = useState("");
  const [mileage, setMileage] = useState("");
  const [availability, setAvailability] = useState("yes");
  const [vehicles, setVehicles] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [fuelType, setFuelType] = useState("petrol");
  const [transmission, setTransmission] = useState("manual");
  const [vehicleCategory, setVehicleCategory] = useState("");
  const [showForm, setShowForm] = useState(false); // New state

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVehicle = () => {
    const newVehicle = {
      id: editMode || Date.now(),
      name,
      type,
      mobileNo,
      vehicleNo,
      rentPerDay,
      description,
      mileage,
      availability,
      image: imagePreview || (editMode && vehicles.find(v => v.id === editMode)?.image) || "",
      address,
      pincode,
      seatingCapacity,
      fuelType,
      vehicleCategory,
      transmission
    };

    let updatedVehicles;
    if (editMode) {
      updatedVehicles = vehicles.map((vehicle) =>
        vehicle.id === editMode ? newVehicle : vehicle
      );
    } else {
      updatedVehicles = [...vehicles, newVehicle];
    }

    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    resetForm();
    setShowForm(false); // Hide form after adding/updating
  };

  const resetForm = () => {
    setName("");
    setType("car");
    setMobileNo("");
    setVehicleNo("");
    setRentPerDay("");
    setDescription("");
    setMileage("");
    setAvailability("yes");
    setEditMode(null);
    setImage(null);
    setImagePreview("");
    setAddress("");
    setPincode("");
    setSeatingCapacity("");
    setFuelType("petrol");
    setTransmission("manual");
    setVehicleCategory("");
  };

  const handleEdit = (vehicleId) => {
    const vehicle = vehicles.find((v) => v.id === vehicleId);
    setName(vehicle.name);
    setType(vehicle.type);
    setMobileNo(vehicle.mobileNo);
    setVehicleNo(vehicle.vehicleNo);
    setRentPerDay(vehicle.rentPerDay);
    setDescription(vehicle.description);
    setMileage(vehicle.mileage);
    setAvailability(vehicle.availability);
    setImagePreview(vehicle.image || "");
    setAddress(vehicle.address || "");
    setPincode(vehicle.pincode || "");
    setSeatingCapacity(vehicle.seatingCapacity || "");
    setFuelType(vehicle.fuelType || "petrol");
    setTransmission(vehicle.transmission || "manual");
    setVehicleCategory(vehicle.vehicleCategory || "");
    setEditMode(vehicleId);
    setShowForm(true); // Show form
  };

  const handleDelete = (vehicleId) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== vehicleId);
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  };

  return (
    <div className="owner-vehicle-manage-page-container">
      <Header />
      <div className="owner-vehicle-manage-main-content">
        <p>List your vehicles and manage their bookings efficiently.</p>

        <button 
          onClick={() => {
            resetForm();
            setShowForm(true);
          }} 
          className="owner-vehicle-manage-showform-btn"
        >
          Add New Vehicle
        </button>

        {showForm && (
          <form onSubmit={(e) => { e.preventDefault(); handleAddVehicle(); }}>
            <div className="owner-vehicle-manage-image-upload">
              <label htmlFor="vehicle-image">Vehicle Image:</label>
              <input 
                type="file" 
                id="vehicle-image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <div className="owner-vehicle-manage-image-preview">
                  <img src={imagePreview} alt="Vehicle Preview" />
                </div>
              )}
            </div>

            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Vehicle Name" 
              required 
            />

            <select 
              className="owner-vehicle-manage-select" 
              value={type} 
              onChange={(e) => {
                setType(e.target.value);
                setVehicleCategory("");
              }}
            >
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>

            {type === "car" && (
              <select
                className="owner-vehicle-manage-select"
                value={vehicleCategory}
                onChange={(e) => setVehicleCategory(e.target.value)}
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

            <input 
              type="text" 
              value={mobileNo} 
              onChange={(e) => setMobileNo(e.target.value)} 
              placeholder="Mobile No." 
              required 
            />

            <input 
              type="text" 
              value={vehicleNo} 
              onChange={(e) => setVehicleNo(e.target.value)} 
              placeholder="Vehicle No." 
              required 
            />

            <input 
              type="number" 
              value={rentPerDay} 
              onChange={(e) => setRentPerDay(e.target.value)} 
              placeholder="Rent per Day (₹)" 
              required 
            />

            <input 
              type="number" 
              value={seatingCapacity} 
              onChange={(e) => setSeatingCapacity(e.target.value)} 
              placeholder="Seating Capacity" 
            />

            <select 
              className="owner-vehicle-manage-select" 
              value={fuelType} 
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
              <option value="cng">CNG</option>
            </select>

            <select 
              className="owner-vehicle-manage-select" 
              value={transmission} 
              onChange={(e) => setTransmission(e.target.value)}
            >
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>

            <textarea
              className="owner-vehicle-manage-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (features, condition, etc.)"
            ></textarea>

            <input 
              type="number" 
              value={mileage} 
              onChange={(e) => setMileage(e.target.value)} 
              placeholder="Mileage (kmpl)" 
            />

            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              placeholder="Full Address" 
            />

            <input 
              type="text" 
              value={pincode} 
              onChange={(e) => setPincode(e.target.value)} 
              placeholder="Pincode" 
              pattern="[0-9]{6}"
            />

            <select 
              className="owner-vehicle-manage-select" 
              value={availability} 
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="yes">Available</option>
              <option value="no">Not Available</option>
            </select>

            <button type="submit" className="owner-vehicle-manage-submit-btn">
              {editMode ? "Update Vehicle" : "Add Vehicle"}
            </button>

            <button 
              type="button" 
              className="owner-vehicle-manage-cancel-btn" 
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
            >
              Cancel
            </button>
          </form>
        )}

        <h3>Your Vehicles</h3>
        <div className="owner-vehicle-manage-vehicles-container">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="owner-vehicle-manage-vehicle-card">
              {vehicle.image && (
                <div className="owner-vehicle-manage-vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
              )}
              <h3>
                {vehicle.name} 
                {vehicle.type === "car" && vehicle.vehicleCategory && ` (${vehicle.vehicleCategory})`}
                {vehicle.type === "bike" && " (Bike)"}
              </h3>
              <p><strong>Mobile No:</strong> {vehicle.mobileNo}</p>
              <p><strong>Vehicle No:</strong> {vehicle.vehicleNo}</p>
              <p><strong>Rent per Day:</strong> ₹{vehicle.rentPerDay}</p>
              <p><strong>Seats:</strong> {vehicle.seatingCapacity || "N/A"}</p>
              <p><strong>Fuel Type:</strong> {vehicle.fuelType || "N/A"}</p>
              <p><strong>Transmission:</strong> {vehicle.transmission || "N/A"}</p>
              <p><strong>Description:</strong> {vehicle.description}</p>
              <p><strong>Mileage:</strong> {vehicle.mileage || "N/A"} kmpl</p>
              <p><strong>Location:</strong> {vehicle.address || "N/A"}, {vehicle.pincode || "N/A"}</p>
              <span className={`owner-vehicle-manage-vehicle-status ${vehicle.availability === "yes" ? "available" : "not-available"}`}>
                {vehicle.availability === "yes" ? "Available" : "Not Available"}
              </span>
              <div className="owner-vehicle-manage-action-buttons">
                <button 
                  onClick={() => handleEdit(vehicle.id)} 
                  className="owner-vehicle-manage-edit-btn"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(vehicle.id)} 
                  className="owner-vehicle-manage-delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
