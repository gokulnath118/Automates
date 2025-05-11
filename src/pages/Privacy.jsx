import { Link } from "react-router-dom";
import "./Pages.css";

const Privacy = () => {
  return (
    <div className="privacy-page-container">
      <header className="privacy-header">
        <Link to="/" className="privacy-logo-link">AutoMates</Link>
        <nav className="privacy-nav">
          <Link to="/login" className="privacy-nav-btn">Log in</Link>
        </nav>
      </header>

      <main className="privacy-main-content">
        <section className="privacy-hero">
          <h1 className="privacy-hero-title">Privacy Policy</h1>
          <p className="privacy-hero-subtitle">How we collect, use, and protect your information</p>
        </section>

        <div className="privacy-content-section">
          <article className="privacy-article">
            <h2 className="privacy-article-title">Information We Collect</h2>
            <p className="privacy-article-text">We collect personal information you provide during registration, vehicle listings, and transactions. This may include name, contact details, payment information, and driver's license details.</p>
          </article>

          <article className="privacy-article">
            <h2 className="privacy-article-title">How We Use Your Information</h2>
            <p className="privacy-article-text">Your information is used to facilitate rentals, verify identities, process payments, improve our services, and communicate with you.</p>
          </article>

          <article className="privacy-article">
            <h2 className="privacy-article-title">Data Sharing</h2>
            <p className="privacy-article-text">We only share necessary information between renters and owners to complete transactions. We don't sell your data to third parties.</p>
          </article>

          <article className="privacy-article">
            <h2 className="privacy-article-title">Security Measures</h2>
            <p className="privacy-article-text">We implement industry-standard security protocols including encryption, secure servers, and access controls to protect your data.</p>
          </article>

          <article className="privacy-article">
            <h2 className="privacy-article-title">Your Choices</h2>
            <p className="privacy-article-text">You can review and update your account information at any time through your profile settings.</p>
          </article>

          <article className="privacy-article">
            <h2 className="privacy-article-title">Cookies and Tracking</h2>
            <p className="privacy-article-text">We use cookies to improve your experience. You can manage cookie preferences in your browser settings.</p>
          </article>

          <article className="privacy-article">
            <h2 className="privacy-article-title">Changes to This Policy</h2>
            <p className="privacy-article-text">We may update this policy periodically. Significant changes will be communicated to users.</p>
          </article>
        </div>

        <section className="privacy-contact-section">
          <h2 className="privacy-contact-title">Contact Us</h2>
          <p className="privacy-contact-text">For privacy-related questions, email <a href="mailto:privacy@automates.com" className="privacy-contact-link">privacy@automates.com</a></p>
        </section>
      </main>

      <footer className="privacy-footer">
        <div className="privacy-footer-content">
          <p className="privacy-footer-text">&copy; {new Date().getFullYear()} AutoMates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;