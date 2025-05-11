import { Link } from "react-router-dom";
import "./Pages.css";

const Help = () => {
  return (
    <div className="help-page-container">
      <header className="help-header">
        <Link to="/" className="help-logo-link">AutoMates</Link>
        <nav className="help-nav">
          <Link to="/login" className="help-nav-btn">Log in</Link>
        </nav>
      </header>

      <main className="help-main-content">
        <section className="help-hero">
          <h1 className="help-hero-title">How can we help you?</h1>
          <div className="help-search-container">
            <input type="text" placeholder="Search help articles..." className="help-search-input" />
            <button className="help-search-btn">Search</button>
          </div>
        </section>

        <div className="help-categories-grid">
          <Link to="#" className="help-category-card">
            <h3 className="help-category-title">Getting Started</h3>
            <p className="help-category-desc">New to AutoMates? Learn the basics</p>
          </Link>
          
          <Link to="#" className="help-category-card">
            <h3 className="help-category-title">Account Help</h3>
            <p className="help-category-desc">Password, login, and profile issues</p>
          </Link>
          
          <Link to="#" className="help-category-card">
            <h3 className="help-category-title">Booking Help</h3>
            <p className="help-category-desc">Questions about rentals</p>
          </Link>
          
          <Link to="#" className="help-category-card">
            <h3 className="help-category-title">Payments</h3>
            <p className="help-category-desc">Billing and payout questions</p>
          </Link>
          
          <Link to="#" className="help-category-card">
            <h3 className="help-category-title">Safety</h3>
            <p className="help-category-desc">Safety features and guidelines</p>
          </Link>
          
          <Link to="#" className="help-category-card">
            <h3 className="help-category-title">Contact Support</h3>
            <p className="help-category-desc">Can't find what you need?</p>
          </Link>
        </div>

        <section className="help-faq-section">
          <h2 className="help-faq-title">Frequently Asked Questions</h2>
          <div className="help-faq-container">
            <details className="help-faq-item">
              <summary className="help-faq-question">How do I verify my account?</summary>
              <p className="help-faq-answer">Account verification requires a valid driver's license and phone number. Go to your profile settings and follow the verification steps.</p>
            </details>
            <details className="help-faq-item">
              <summary className="help-faq-question">What happens if a vehicle is damaged during my rental?</summary>
              <p className="help-faq-answer">Report any damage immediately through the app. Our insurance coverage will handle eligible claims after the deductible.</p>
            </details>
            <details className="help-faq-item">
              <summary className="help-faq-question">How are rental prices determined?</summary>
              <p className="help-faq-answer">Owners set their own prices based on vehicle type, model, and market conditions. You can filter by price range when searching.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="help-footer">
        <div className="help-footer-content">
          <p className="help-footer-text">&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Help;