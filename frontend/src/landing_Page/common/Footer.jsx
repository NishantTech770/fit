import "./style.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">Fit<span>Track</span></h3>
          <p>
            A modern fitness platform designed to help you train smarter,
            stay consistent, and achieve real results.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy">Refund & Cancellation</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
          </ul>
        </div>

        <div className="footer-col gym-detail">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:nishantkumawat1f9@gmail.com">nishantkumawat1f9@gmail.com</a> 
            </p>
          <p>
            Phone: <a href="tel:+9057209702"> +91 9057209702 </a>
            </p>

          <div className="socials">
            <a href="https://www.instagram.com/nishantkumawatt/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer"><span><FaInstagram /></span></a>
            <a href="https://x.com/alex07ooo" target="_blank" rel="noopener noreferrer"><span><FaTwitter /></span></a>
            <a href="https://www.youtube.com/@nishantkumawat6179"target="_blank" rel="noopener noreferrer"><span><FaYoutube /></span></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FitTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
