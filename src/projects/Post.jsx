import React from "react";
import Modal from "react-modal";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
Modal.setAppElement("#root");
const Post = ({ isOpen, onClose, content }) => {
  return (
    <Modal id="single-project" isOpen={isOpen} onRequestClose={onClose}>
      <section>
        <div className="container">
          <div className="row">

          <div className="text-end">
            <FontAwesomeIcon className="close" icon={faTimes} onClick={onClose} />
          </div>
            <div className="offset-md-1 col-md-10 col-sm-12">
              <h1>{content.name}</h1>
              <p>{content.description}</p>
              {content.website && (
                <a href={content.website}>
                  View Website <FontAwesomeIcon icon={faLongArrowAltRight} />
                </a>
              )}
              {content.github && (
                <a href={content.github}>
                  View Github <FontAwesomeIcon icon={faLongArrowAltRight} />
                </a>
              )}

              <div className="col-md-12 col-sm-12">
                <img
                  src={content.image_src}
                  className="img-fluid opacity-90"
                  alt="Portfolio"
                />
              </div>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};
export default Post;
