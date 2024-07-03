import React, { useState } from "react";
import React from 'react';



export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., using an email API or storing locally)
    console.log("Submitted form:", formData); // Simulate submission for now

    setSuccessMessage("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Janiece Parker"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="janiece.parker@codex.com">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Send a messages with any tips or tricks to help me improve my coding skills!"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}
