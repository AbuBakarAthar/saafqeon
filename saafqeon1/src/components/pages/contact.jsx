import React from 'react';
import Layout from '../../layout/Layout';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <Layout>
      <div style={styles.contactPage}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.subHeading}>
          We'd love to hear from you! Reach out to us for any inquiries or collaborations.
        </p>

        <div style={styles.contactContainer}>
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h2 style={styles.sectionTitle}>Our Office</h2>
            <p><strong>Address:</strong> 123 Saafqeon Street, Tech City, Pakistan</p>
            <p><strong>Phone:</strong> +92 123 456 7890</p>
            <p><strong>Email:</strong> info@saafqeon.com</p>

            <h2 style={styles.sectionTitle}>Business Hours</h2>
            <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Saturday - Sunday:</strong> Closed</p>
          </div>

          {/* Contact Form */}
          <div style={styles.contactForm}>
            <h2 style={styles.sectionTitle}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="subject" style={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  style={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" style={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div style={styles.mapContainer}>
          <h2 style={styles.sectionTitle}>Find Us on Google Maps</h2>
          <iframe
            title="Saafqeon Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.904350931947!2d67.03081431500694!3d24.89918498403401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3b6a6e7b4b%3A0x9c7b1c6b1c6b1c6b!2sTech%20City%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1622545678901!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

// Inline Styles
const styles = {
  contactPage: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#555',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    gap: '20px',
  },
  contactInfo: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  contactForm: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
  },
  mapContainer: {
    marginTop: '40px',
  },
};

export default Contact;