import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-text">
          <h2 className="heading-2">GET IN TOUCH</h2>
          <p>IPSUM DOLOR TEMPUS COMMODO ADIPISCING</p>
        </div>

        <form action="" className="contact-form">
          <div className="contact-form-item">
            <input type="text" placeholder="Name" />
          </div>

          <div className="contact-form-item">
            <input type="email" placeholder="Email" />
          </div>

          <div className="contact-form-item bg-grid">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
        <div className="buttons">
          <a href="" className="btn-primary">
            SUBMIT
          </a>
          <a href="" className="btn-secondary">
            RESET
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
