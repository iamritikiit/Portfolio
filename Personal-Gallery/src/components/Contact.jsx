import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending the data to an email service or API)
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <h1>Contact Me</h1>
      <p>Feel free to reach out for any collaboration or inquiries!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-socials">
        <h3>Connect with Me</h3>
        <div className="social-links">
          {/* GitHub */}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-github-image.png" alt="GitHub" className="social-icon" />
            GitHub
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-linkedin-image.png" alt="LinkedIn" className="social-icon" />
            LinkedIn
          </a>
          {/* Email */}
          <a href="mailto:youremail@example.com">
            <img src="/path-to-your-email-image.png" alt="Email" className="social-icon" />
            Email Me
          </a>
        </div>
      </div>
    </>
  );
}
