import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Header from "../owner/Header";

const hardcodedUsers = [
  { email: "owner@gmail.com", password: "owner123", role: "owner" },
  { email: "leaser@gmail.com", password: "leaser123", role: "leaser" },
  { email: "admin@gmail.com", password: "admin123", role: "admin" },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call delay
    setTimeout(() => {
      const localUsers = JSON.parse(localStorage.getItem("users")) || [];
      const allUsers = [...hardcodedUsers, ...localUsers];

      const user = allUsers.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("token", "mock-jwt-token");
        localStorage.setItem("role", user.role);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("loggedInUser", JSON.stringify(user)); 

        if (user.role === "owner") navigate("/owner/dashboard");
        else if (user.role === "leaser") navigate("/leaser/dashboard");
        else if (user.role === "admin") navigate("/admin/dashboard");
      } else {
        setError("Invalid email or password.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page-container">
      {/* header */}
      <header className="login-auth-header">
        <h1 className="logo">AutoMates</h1>
        <nav>
          <button className="back-button" onClick={() => navigate("/")}>← Back</button>
        </nav>
      </header>
      <div className="login-form-section">
        <div className="login-form-wrapper">
          <div className="login-form-container">
            <h2>Welcome Back</h2>
            <p>Log in to your AutoMates account</p>
          </div>

          {error && (
            <div className="login-error-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>

            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </div>

            <button type="submit" className="login-submit-button" disabled={isLoading}>
              {isLoading ? (
                <div className="login-spinner"></div>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <p className="login-signup-text">
            Don't have an account? <Link to="/signup" className="login-signup-link">Sign up</Link>
          </p>
        </div>

        
      </div>
      <footer className="login-footer">
          <p>&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Login;