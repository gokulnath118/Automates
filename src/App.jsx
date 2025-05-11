import { Routes, Route } from "react-router-dom";

// common
import Home from "./pages/Home";
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Privacy from "./pages/Privacy";
import Safety from "./pages/Safety";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
// owner
import OwnerHome from "./pages/owner/Home";
import OwnerVehicleManagement from "./pages/owner/VehicleManagement";
import OwnerProfile from "./pages/owner/Profile"
import BookingManagement from "./pages/owner/BookingManagement";

// admin
import AdminHome from "./pages/admin/Home";
import UserManagement from "./pages/admin/UserManagement";
import VehicleManagement from "./pages/admin/VehicleManagement";
import AdminBookingManagement from "./pages/admin/BookingManagement";
import Analytics from "./pages/admin/Analytics";
// leaser
import LeaserHome from "./pages/leaser/Home";
import ManageBookings from "./pages/leaser/ManageBookings";
import SearchBookings from "./pages/leaser/SearchBookings";
import Profile from "./pages/leaser/Profile";
import About from "./pages/About";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />


      {/* Owner */}
      <Route path="/owner/dashboard" element={<OwnerHome />} />
      <Route path="/owner/vehicle-management" element={<OwnerVehicleManagement />} />
      <Route path="/owner/booking-management" element={<BookingManagement />} />
      <Route path="/owner/profile" element={<OwnerProfile />} />
      
      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminHome />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/vehicles" element={<VehicleManagement />} />
      <Route path="/admin/booking-management" element={<AdminBookingManagement />} />
      <Route path="/admin/analytics" element={<Analytics />} />

      {/* Leaser */}
      <Route path="/leaser/dashboard" element={<LeaserHome />} />
      <Route path="/leaser/bookings" element={<ManageBookings />} />
      <Route path="/leaser/search" element={<SearchBookings />} />
      <Route path="/leaser/profile" element={<Profile />} />
      

    </Routes>
    </>
  )
}

export default App
