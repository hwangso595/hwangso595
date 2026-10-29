import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const send = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("Sending...");
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      form.reset();
      setStatus("Sent! I'll get back to you soon.");
    } catch (err) {
      setStatus(`Could not send: ${err.message}`);
    }
  };

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

            <form onSubmit={send} className="row">
              <div className="col-md-6 col-sm-6">
                <input name="name" type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-md-6 col-sm-6">
                <input name="email" type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="col-md-12 col-sm-12">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Email Body"
                  required
                ></textarea>
              </div>
              <div className="col-md-3 col-sm-4">
                <input
                  type="submit"
                  className="form-control"
                  value="Send Message"
                  disabled={status === "Sending..."}
                />
              </div>
              <p className="mt-2">{status}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
