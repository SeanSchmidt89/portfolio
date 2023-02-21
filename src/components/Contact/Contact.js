import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="form-container">
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name="phone" />
          </div>
        </div>
        <div>
          <div>
            <label>Email</label>
            <input type="email" name="name" />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" name="subject" />
          </div>
          <div>
            <label>Message</label>
            <textarea
              rows="10"
              name="message"
              placeholder="still in progress of connecting email, if you need to contact me please
        message me on LinkedIn"
            ></textarea>
          </div>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
