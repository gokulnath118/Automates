import { Link } from "react-router-dom";
import "./Pages.css";

const Terms = () => {
  return (
    <div className="terms-page-container">
      <header className="terms-header">
        <Link to="/" className="terms-logo-link">AutoMates</Link>
        <nav className="terms-nav">
          <Link to="/login" className="terms-nav-btn">Log in</Link>
        </nav>
      </header>

      <main className="terms-main-content">
        <section className="terms-hero">
          <h1 className="terms-hero-title">Terms of Service</h1>
          <p className="terms-hero-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </section>

        <div className="terms-content-section">
          <article className="terms-article">
            <h2 className="terms-article-title">1. Acceptance of Terms</h2>
            <p className="terms-article-text">By accessing or using the AutoMates platform, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
          </article>

          <article className="terms-article">
            <h2 className="terms-article-title">2. User Responsibilities</h2>
            <p className="terms-article-text">Users are responsible for maintaining the accuracy of their account information and complying with all applicable laws.</p>
          </article>

          <article className="terms-article">
            <h2 className="terms-article-title">3. Vehicle Listings</h2>
            <p className="terms-article-text">Owners must provide accurate information about their vehicles and maintain proper insurance coverage.</p>
          </article>

          <article className="terms-article">
            <h2 className="terms-article-title">4. Rental Agreements</h2>
            <p className="terms-article-text">Each rental creates a separate agreement between owner and renter, with AutoMates serving as an intermediary platform.</p>
          </article>

          <article className="terms-article">
            <h2 className="terms-article-title">5. Payments and Fees</h2>
            <p className="terms-article-text">AutoMates charges a service fee for each completed transaction. Detailed fee structure available in our pricing section.</p>
          </article>

          <article className="terms-article">
            <h2 className="terms-article-title">6. Dispute Resolution</h2>
            <p className="terms-article-text">Users agree to attempt good-faith resolution of disputes before involving AutoMates support.</p>
          </article>

          <article className="terms-article">
            <h2 className="terms-article-title">7. Modifications to Terms</h2>
            <p className="terms-article-text">We may update these terms periodically. Continued use after changes constitutes acceptance.</p>
          </article>
        </div>
      </main>

      <footer className="terms-footer">
        <div className="terms-footer-content">
          <p className="terms-footer-text">&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;