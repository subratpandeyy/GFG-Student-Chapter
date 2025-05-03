import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import DeveloperCard from "./DeveloperCard";
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <Link to={'/'} className="footer-logo">
            <span className="logo-text"><img src={logo} /> Gandhi Institute of Engineering & Technology University</span>
          </Link>
          <ul className="footer-links">
            <li><a href="mailto:geeksforgeeksgietustudentchapt@gmail.com">Contact</a></li>
          </ul>
          <br></br>
          <ul className="social-links">
            <li><a href="https://www.instagram.com/geeksforgeeks_gietu/?hl=en#"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/company/gfg-student-chapter-gietu/posts/?feedView=all"><FaLinkedin /></a></li>
            <li><a href="https://www.linkedin.com/company/gfg-student-chapter-gietu/posts/?feedView=all"><FaXTwitter /></a></li>
            <li><a href="https://www.threads.com/@geeksforgeeks_gietu?xmt=AQGzrGqLLf_BXL4Xs195HZUpnAnxhUy25gXc4y9JJz8ITUs"><BsThreadsFill /></a></li>
          </ul>
        </div>
        <DeveloperCard />
        <hr className="footer-divider" />
        <span className="footer-copy">
          © 2025 <Link to={'/'}>GFG GIETU™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
