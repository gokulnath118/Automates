import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Navigation */}
      <header className="hero-section">
        <div className="nav-container">
          <h1 className="logo">AutoMates</h1>
          <nav className="auth-nav">
            <Link to="/login" className="nav-btn outline">Log in</Link>
            <Link to="/signup" className="nav-btn solid">Sign up</Link>
          </nav>
        </div>
        
        <div className="hero-content">
          <h2>Your wheels, on demand</h2>
          <p>Rent or list vehicles</p>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section className="value-props">
        <div className="prop-card">
          <div className="prop-icon">🚗</div>
          <h3>For Owners</h3>
          <p>Turn your idle vehicle into income. Set your price, availability, and watch the bookings come in.</p>
        </div>
        
        <div className="prop-card">
          <div className="prop-icon">🔍</div>
          <h3>For Leasers</h3>
          <p>Find the perfect ride for your needs. Filter by type, price, and availability.</p>
        </div>
        
        <div className="prop-card">
          <div className="prop-icon">🛡️</div>
          <h3>Safe & Secure</h3>
          <p>Verified users, secure payments, and 24/7 support for peace of mind.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How AutoMates Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create an account as an Owner or Leaser in just minutes.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>{window.innerWidth > 768 ? 'List or Browse' : 'List/Browse'}</h3>
            <p>Owners list vehicles, Leasers find their perfect match.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect</h3>
            <p>Send booking requests or get notified of interested leasers.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Hit the Road</h3>
            <p>Complete the rental process and enjoy the ride!</p>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="vehicle-types">
        <h2>Find Any Type of Vehicle</h2>
        <div className="type-grid">
          <div className="type-card sedan">
            <h3>Sedans</h3>
            <p>Comfortable daily drivers</p>
          </div>
          <div className="type-card suv">
            <h3>SUVs</h3>
            <p>Space for the whole crew</p>
          </div>
          <div className="type-card luxury">
            <h3>Luxury</h3>
            <p>Premium rides for special occasions</p>
          </div>
          <div className="type-card bike">
            <h3>Bike</h3>
            <p>Ride ith your Duo</p>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to get started?</h2>
        <p>Join as vehicle owners and leasers in our community</p>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          {/* <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/help">Help</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div> */}
          <div className="copyright">
            &copy; {new Date().getFullYear()} AutoMates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;