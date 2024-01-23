import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMagnet, faDownload } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import resume from "../assets/resume.pdf";
import "./Nav.css";
// import { register } from "swiper/element/bundle";
// register();

const Nav = ({ shown }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Get all the sections in the document
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      id="side-menu"
      className={`d-flex flex-column justify-content-between bg-white ${
        shown ? "nav-active" : ""
      } col-lg-2 position-fixed p-5 h-100`}
    >
      <div className="">
        <a href="/">
          <img src={logo} />
        </a>
        <ul>
          <li
            className={`nav-item mt-5 ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            <a href="/#about" className="nav-link">
              About
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "portfolio" ? "active" : ""
            }`}
          >
            <a href="/#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li
            className={`nav-item ${activeSection === "work" ? "active" : ""}`}
          >
            <a href="/#work" className="nav-link">
              Work
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <a href="/#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className={`nav-item`}>
            <a href={resume} className="nav-link">
              Resume <FontAwesomeIcon className="fa" icon={faDownload} />
            </a>
          </li>
        </ul>
      </div>
      <div className="align-bottom">
        <div className="row">
          <div className="">
            <p>
              <a href="mailto:hwansung595@gmail.com">hwansung595@gmail.com</a>
            </p>
          </div>

          <div>
            <ul className="list-unstyled d-flex justify-content-start flex-wrap gap-3">
              <li>
                <a href="https://www.linkedin.com/in/hwangso595/">
                  <FontAwesomeIcon className="fa" icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/hwangso595">
                  <FontAwesomeIcon className="fa" icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
