import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#home" aria-label="Go to home section">
            <span>VSpandana Meker Kuberappa</span>
          </a>
        </div>
        <div className="footer-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <LazyMotion features={domAnimation}>
          <motion.div className="footer-social">
            <a
              href="https://github.com/Spandana-28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/spandana-m-k-1ab692202/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
            </a>
            <a
              href="mailto:spandanameker28@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            </a>
          </motion.div>
        </LazyMotion>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Spandana Meker Kuberappa. All rights reserved.
          <FontAwesomeIcon icon={faHeart} className="heart" />
        </p>
        <p>
          <span className="role">Senior Software Engineer & Full-Stack Developer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
