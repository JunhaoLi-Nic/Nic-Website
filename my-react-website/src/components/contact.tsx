import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import '@css/contact.css';
import {sendCustomEmail} from './Tool/email';

interface FormData {
  name: string;
  email: string;
  website: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  // Handler for form field changes
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      if (response.status === 200) {
        alert('Message Sent Successfully!');
        setFormData({
          name: '',
          email: '',
          website: '',
          message: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send the message.');
    }
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" placeholder="Your website (If exists)" name="website" value={formData.website} onChange={handleChange} />
        <textarea placeholder="Do you have any questions?" name="message" value={formData.message} onChange={handleChange} className="contact-box" />
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
