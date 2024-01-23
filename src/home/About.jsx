import React from "react";
import profile from "../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className='row'>
              <div className="col-md-6 col-sm-12 position-relative">
                <img
                  src={profile}
                  className="img-responsive profile"
                  alt="Profile"
                  data-aos="fade-in"
                />
              </div>

              <div className="col-md-6 col-sm-12 position-relative z-2" data-aos="fade-up">
                <h4>Developer/ML Enthusiast</h4>
                <h1>Sung Ha Hwang</h1>
              </div>

              <div className="clearfix"></div>
              <hr/>

              <p data-aos="fade-up">
                I'm passionate about blending my love for machine learning with my knack for software engineering. There's something incredibly satisfying about coding up solutions that not only work but also have the potential to change things for the better. For me, it's about getting hands-on with technology, creating new and efficient ways to solve problems, and seeing the real-world impact of my work.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
