import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs.send(
      'service_1vam5jj',    // replace with your service ID
      'template_wa3xnkw',   // replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      '9ZEK8IVUOuO9GSVRu'     // replace with your public key
    )
    .then(() => {
      alert('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Oops! Something went wrong, please try again.');
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-dark">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-dark">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-dark">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-dark">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-accent placeholder-dark text-dark ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Your message..."
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-accent'} text-white p-2 rounded transition`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
