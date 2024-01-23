import React from "react";
import cgi from "../assets/cgi.jpg";
import nl from "../assets/nl.jpg";
import icube from "../assets/icube.jpg";
import "./Work.css";

const Work = () => {
  return (
    <>
      <section id="work">
        <div className="container">
          <div className="row d-flex flex-column">
            <div className="section-title" data-aos="fade-up">
              <h3>Experiences</h3>
              <h4>Here are some places I have worked at.</h4>
            </div>
            <div className="row">
              <div className="col-3" data-aos="fade-up">
                <img src={nl} className="w-100" alt="Northern Labs" />
              </div>

              <div className="col-9" data-aos="fade-up">
                <h5>Northern Labs</h5>
                <div className="row">
                  <h6 className="col-6">Software Engineer Intern</h6>
                  <h6 className="col-6 text-end">Sep 2022 - Dec 2022</h6>
                </div>
                <p>
                  I got to dive into the world of cryptocurrency, developing
                  backend services for a payment system. I used a mix of
                  Kubernetes, GitHub CI/CD, Elixir, SQL, and TypeScript. My
                  focus was on implementing end-to-end testing, setting up
                  automatic alert systems through Slack, and leading code
                  reviews to ensure top-notch code quality and system stability.{" "}
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-3" data-aos="fade-up">
                <img src={icube} className="w-100" alt="ICUBE UTM" />
              </div>

              <div className="col-9" data-aos="fade-up">
                <h5>Northern Labs</h5>
                <div className="row">
                  <h6 className="col-6">Application Developer Part-time</h6>
                  <h6 className="col-6 text-end">Apr 2022 - Aug 2022</h6>
                </div>
                <p>
                  In my time at ICUBE UTM, I worked on maintaining a WordPress
                  e-commerce application for a startup. My role involved using
                  PHP in a small team to enhance the client's restaurant
                  business operations. I also had a hand in designing web pages
                  from Figma prototypes, improving user interaction and overall
                  experience.
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-3" data-aos="fade-up">
                <img src={cgi} className="w-100" alt="CGI" />
              </div>

              <div className="col-9" data-aos="fade-up">
                <h5>CGI</h5>
                <div className="row">
                  <h6 className="col-6">Java Developer Co-op</h6>
                  <h6 className="col-6 text-end">Sep 2020 - Apr 2021</h6>
                </div>
                <p>
                  While at CGI Group, I honed my problem-solving skills and
                  attention to detail, especially in resolving complex technical
                  issues. My work included enhancing website performance,
                  reducing load times by 50%, and migrating legacy Java code to
                  Spring MVC and MySQL. I also developed RESTful APIs, which
                  significantly improved the efficiency of frontend-backend
                  communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
