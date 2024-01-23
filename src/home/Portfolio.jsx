import React from "react";
import { useState } from "react";
import "./Portfolio.css";
import Post from "../projects/Post.jsx";
import PROJECTS from "../data/projects.js";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ({ setIsDropdownOpen, limit }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const openModal = (content) => {
    setIsDropdownOpen(false);
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h3>Portfolio</h3>
            <h4>Here are some projects I have worked on.</h4>
          </div>

          <div className="row" data-aos="fade-up">
            {PROJECTS.slice(0, limit ? limit : PROJECTS.length).map(
              (project, i) => (
                <div className="col-md-4 col-sm-6" key={i}>
                  <div
                    className="portfolio-thumb overflow-hidden"
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.image_src}
                      className="image-fill"
                      alt={project.name}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-item">
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          {limit && (
            <a className="align-center" href="/portfolio" data-aos="fade-up">
              <h4>View More <FontAwesomeIcon icon={faLongArrowAltRight}/></h4>
            </a>
          )}
        </div>
      </section>
      <Post isOpen={modalIsOpen} onClose={closeModal} content={modalContent} />
    </>
  );
};

export default Portfolio;
