import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="offset-md-1 col-md-10 col-sm-12">
            <div className="section-title">
              <h3>Contacts</h3>
              <h4>
                Don't be shy! Say hello!
              </h4>
            </div>

            <form action="mailto:hwansung595@gmail.com" method="post" className="row">
              <div className="col-md-6 col-sm-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-md-6 col-sm-6">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="col-md-12 col-sm-12">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Email Body"
                ></textarea>
              </div>
              <div className="col-md-3 col-sm-4">
                <input
                  type="submit"
                  className="form-control"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
