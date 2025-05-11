import { Link } from "react-router-dom";
import "./Pages.css";

const Safety = () => {
  return (
    <div className="safety-page-container">
      <header className="safety-header">
        <Link to="/" className="safety-logo-link">AutoMates</Link>
        <nav className="safety-nav">
          <Link to="/login" className="safety-nav-btn">Log in</Link>
        </nav>
      </header>

      <main className="safety-main-content">
        <section className="safety-hero">
          <h1 className="safety-hero-title">Your Safety is Our Priority</h1>
          <p className="safety-hero-subtitle">We're committed to creating a secure environment for all AutoMates users</p>
        </section>

        <div className="safety-features-grid">
          <div className="safety-feature-card">
            <div className="safety-feature-icon">🆔</div>
            <h3 className="safety-feature-title">Verified Users</h3>
            <p className="safety-feature-desc">All users undergo identity verification before they can list or rent vehicles</p>
          </div>

          <div className="safety-feature-card">
            <div className="safety-feature-icon">📱</div>
            <h3 className="safety-feature-title">Real-Time Tracking</h3>
            <p className="safety-feature-desc">Optional trip tracking available for added security during rentals</p>
          </div>

          <div className="safety-feature-card">
            <div className="safety-feature-icon">🛡️</div>
            <h3 className="safety-feature-title">Insurance Coverage</h3>
            <p className="safety-feature-desc">All rentals include basic insurance protection</p>
          </div>

          <div className="safety-feature-card">
            <div className="safety-feature-icon">📞</div>
            <h3 className="safety-feature-title">24/7 Support</h3>
            <p className="safety-feature-desc">Emergency assistance available anytime</p>
          </div>
        </div>

        <section className="safety-tips-section">
          <h2 className="safety-tips-title">Safety Tips</h2>
          <div className="safety-tips-container">
            <div className="safety-tip-card">
              <h3 className="safety-tip-card-title">For Owners</h3>
              <ul className="safety-tip-list">
                <li className="safety-tip-item">Meet renters in a public place</li>
                <li className="safety-tip-item">Take photos of your vehicle before and after each rental</li>
                <li className="safety-tip-item">Use our in-app messaging for all communication</li>
              </ul>
            </div>
            <div className="safety-tip-card">
              <h3 className="safety-tip-card-title">For Renters</h3>
              <ul className="safety-tip-list">
                <li className="safety-tip-item">Inspect the vehicle thoroughly before driving</li>
                <li className="safety-tip-item">Verify the owner's identity matches their profile</li>
                <li className="safety-tip-item">Report any issues immediately</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="safety-footer">
        <div className="safety-footer-content">
          <p className="safety-footer-text">&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Safety;