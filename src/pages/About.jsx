import { Link } from "react-router-dom";
import "./Pages.css";

const About = () => {
  return (
    <div className="about-page-container">
      <header className="about-header">
        <Link to="/" className="about-logo-link">AutoMates</Link>
        <nav className="about-nav">
          <Link to="/login" className="about-nav-btn">Log in</Link>
        </nav>
      </header>

      <main className="about-main-content">
        <section className="about-hero">
          <h1 className="about-hero-title">About AutoMates</h1>
          <p className="about-hero-subtitle">Revolutionizing vehicle sharing through technology</p>
        </section>

        <section className="about-story-section">
          <div className="about-story-content">
            <h2 className="about-section-title">Our Story</h2>
            <p className="about-section-text">
              Founded in 2023, AutoMates began with a simple idea: what if vehicle owners could easily share their idle cars with trusted community members? 
              Today, we've grown into a leading peer-to-peer vehicle sharing platform, connecting thousands of owners and renters across the country.
            </p>
            <p className="about-section-text">
              Our mission is to make vehicle access more affordable and sustainable while helping owners earn from their underutilized assets.
            </p>
          </div>
          <div className="about-story-image"></div>
        </section>

        <section className="about-team-section">
          <h2 className="about-section-title">Meet the Team</h2>
          <div className="about-team-grid">
            <div className="about-team-member">
              <div className="about-member-photo team-photo-1"></div>
              <h3 className="about-member-name">Alex Johnson</h3>
              <p className="about-member-role">CEO & Founder</p>
            </div>
            <div className="about-team-member">
              <div className="about-member-photo team-photo-2"></div>
              <h3 className="about-member-name">Maria Garcia</h3>
              <p className="about-member-role">CTO</p>
            </div>
            <div className="about-team-member">
              <div className="about-member-photo team-photo-3"></div>
              <h3 className="about-member-name">James Wilson</h3>
              <p className="about-member-role">Head of Operations</p>
            </div>
            <div className="about-team-member">
              <div className="about-member-photo team-photo-4"></div>
              <h3 className="about-member-name">Sarah Chen</h3>
              <p className="about-member-role">Head of Community</p>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <h2 className="about-section-title">Our Values</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <h3 className="about-value-title">Trust</h3>
              <p className="about-value-desc">We verify all users and vehicles to create a safe sharing community</p>
            </div>
            <div className="about-value-card">
              <h3 className="about-value-title">Accessibility</h3>
              <p className="about-value-desc">Making vehicle access affordable for everyone</p>
            </div>
            <div className="about-value-card">
              <h3 className="about-value-title">Sustainability</h3>
              <p className="about-value-desc">Reducing carbon footprint through shared mobility</p>
            </div>
            <div className="about-value-card">
              <h3 className="about-value-title">Innovation</h3>
              <p className="about-value-desc">Continually improving our technology and services</p>
            </div>
          </div>
        </section>

        <section className="about-stats-section">
          <h2 className="about-section-title">By The Numbers</h2>
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-number">10,000+</div>
              <div className="about-stat-label">Vehicles Shared</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">50,000+</div>
              <div className="about-stat-label">Happy Users</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">100+</div>
              <div className="about-stat-label">Cities</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">4.8★</div>
              <div className="about-stat-label">Average Rating</div>
            </div>
          </div>
        </section>

        <section className="about-cta-section">
          <h2 className="about-cta-title">Join Our Community</h2>
          <p className="about-cta-text">Whether you have a vehicle to share or need one to rent, we've got you covered</p>
          <div className="about-cta-buttons">
            <Link to="/signup?role=owner" className="about-cta-btn black">List Your Vehicle</Link>
            <Link to="/signup?role=leaser" className="about-cta-btn white">Find a Ride</Link>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-footer-content">
          <p className="about-footer-text">&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;