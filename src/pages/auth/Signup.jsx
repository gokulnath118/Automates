import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("leaser");
  const [gender, setGender] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      setError("User already exists. Please log in.");
      return;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNo)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    const newUser = { name, email, password, role, gender, mobileNo };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="signup-page-container">
      <header className="auth-header">
        <h1 className="logo">AutoMates</h1>
        <nav>
          <button className="back-button" onClick={() => navigate("/")}>
            ← Back
          </button>
        </nav>
      </header>

      <div className="signup-form-section">
        <div className="signup-form-wrapper">
          <div className="signup-form-container">
            <h2>Create Account</h2>
            <p>Sign up for your AutoMates account</p>
          </div>

          {error && (
            <div className="signup-error-message">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="signup-form">
            <div className="signup-input-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-input-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="signup-input"
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="signup-input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                type="text"
                placeholder="Enter 10-digit mobile number"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-input-group">
              <label htmlFor="role">Account Type</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="signup-input"
              >
                <option value="leaser">Leaser</option>
                <option value="owner">Owner</option>
              </select>
            </div>

            <button type="submit" className="signup-submit-button">
              Sign Up
            </button>
          </form>

          <p className="signup-signup-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-signup-link">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <footer className="signup-footer">
        <p>&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
