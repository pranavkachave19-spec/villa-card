import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">VillaCard</h2>
          <p>
            Discover beautiful villas and modern homes with comfort and luxury.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/">Cards</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: info@villacard.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Pune, Maharashtra</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 VillaCard. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;