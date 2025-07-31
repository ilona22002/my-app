import React, { useState } from 'react';

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <main id="main-content" tabIndex={-1}>
      <h1>Contact Form</h1>
      
      <form onSubmit={handleSubmit} aria-labelledby="form-heading">
        <fieldset>
          <legend id="form-heading">Please fill out the form below</legend>
          
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              aria-describedby="message-help"
            />
            <p id="message-help" className="help-text">Maximum 500 characters</p>
          </div>
          
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">Subscribe to our newsletter</label>
          </div>
          
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </main>
  );
};

export default FormPage;