import React from 'react';
import '@css/contact.css'; 


const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handling form submission logic here
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Your website (If exists)" />
        <textarea className="contact-box" placeholder="Do you have any questions?" />
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
