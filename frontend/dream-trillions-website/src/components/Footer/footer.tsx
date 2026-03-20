import "./footer.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Dream Trillions</h2>

          <p className="footer-text">
            Dream Trillions develops modern technology solutions including
            AI systems, cloud platforms, web & mobile applications, and
            renewable energy technologies that help businesses grow
            efficiently in the digital era.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul className="footer-service-list">
            <li>Software &amp; Web Applications</li>
            <li>Mobile App Development</li>
            <li>Artificial Intelligence</li>
            <li>Cloud Infrastructure</li>
            <li>Renewable Energy Systems</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>

          <div className="footer-contact">
            <p><FontAwesomeIcon icon={faLocationDot} /> Sri Lanka</p>
            <p><FontAwesomeIcon icon={faPhone} /> +94 713339201</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@dreamtrillions.com</p>
          </div>
        </div>
      </div>

      <div className="footer-scroll-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dream Trillions (Pvt) Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;