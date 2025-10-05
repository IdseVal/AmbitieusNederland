import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // You need to set up EmailJS account and get these values
      // Visit: https://www.emailjs.com/
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ambitieusnederland@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact</h1>
        <div className="header-line"></div>
      </div>

      <div className="content-container">
        <section className="contact-intro">
          <h2>Neem Contact Op</h2>
          <p>
            Heeft u vragen over onze visie? Wilt u met ons in gesprek? Of bent u geïnteresseerd om bij te dragen aan Ambitieus Nederland? Neem gerust contact met ons op via onderstaand formulier.
          </p>
          <p className="contact-email-display">
            Of mail ons direct: <a href="mailto:ambitieusnederland@gmail.com">ambitieusnederland@gmail.com</a>
          </p>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Naam *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Onderwerp *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Bericht *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Verzenden...' : 'Verzend Bericht'}
          </button>

          {status === 'success' && (
            <p className="status-message success">
              Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.
            </p>
          )}

          {status === 'error' && (
            <p className="status-message error">
              Er is iets misgegaan bij het verzenden van uw bericht. Probeer het opnieuw of mail ons direct op ambitieusnederland@gmail.com
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
