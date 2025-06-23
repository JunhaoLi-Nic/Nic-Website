import React, { useState, ChangeEvent, FormEvent } from 'react';
import '@css/contact.css';
import {sendCustomEmail} from './Tool/email';

interface FormData {
  name: string;
  email: string;
  website: string;
  message: string;
  to_email: "nicholasleeeman@gmail.com"
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    message: '',
    to_email: "nicholasleeeman@gmail.com"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendCustomEmail(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        website: '',
        message: '',
        to_email: "nicholasleeeman@gmail.com"
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-info">
          <div className="info-header">
            <h1>Let's collaborate on something <span className="highlight">special</span></h1>
            <div className="underline-animated"></div>
          </div>
          <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon email-icon"></div>
              <p>nicholasleeeman@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon phone-icon"></div>
              <p>0482386087</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="www.linkedin.com/in/nicholas-li168336" className="social-icon linkedin"></a>
            <a href="https://github.com/JunhaoLi-Nic/Nic-Website" className="social-icon github"></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* 
            The className attribute is used to apply a CSS class to the form-group element.
            The focusedField state variable is used to determine which form field is currently focused.
            If focusedField is equal to 'name', the 'focused' CSS class is applied to the form-group element.
            This allows the form-group element to be styled differently when it is focused.
          */}
          <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
            <label htmlFor="name">Your Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Your name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              required
            />
          </div>
          
          <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Your email address" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              required
            />
          </div>
          
          <div className={`form-group ${focusedField === 'website' ? 'focused' : ''}`}>
            <label htmlFor="website">Website</label>
            <input 
              id="website"
              type="text" 
              placeholder="Your website (if you have one)" 
              name="website" 
              value={formData.website} 
              onChange={handleChange}
              onFocus={() => handleFocus('website')}
              onBlur={handleBlur}
            />
          </div>
          
          <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              placeholder="What would you like to discuss?" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="contact-box"
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus !== 'idle' ? submitStatus : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : submitStatus === 'error' ? 'Failed to Send' : 'Get In Touch'}
          </button>
          
          {submitStatus === 'success' && <p className="success-message">Thank you for your message! I'll get back to you soon.</p>}
          {submitStatus === 'error' && <p className="error-message">Something went wrong. Please try again later.</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
