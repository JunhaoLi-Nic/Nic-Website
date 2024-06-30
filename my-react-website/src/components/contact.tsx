import React from 'react';
import '@css/contact.css'; // Ensure your CSS path is correct

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Your website (If exists)" />
        <textarea placeholder="How can I help?" />
        <button type="submit">Get In Touch</button>
      </form>
      <div className="contact-info">
        <h1>Let's talk for Something special</h1>
        <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
        <p>nicholasleeeman@gmail.com</p>
        <p>0401562682</p>
      </div>
    </div>
  );
}

export default Contact;
