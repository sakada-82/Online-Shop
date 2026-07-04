import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); 
    e.target.reset();
  };

  return (
    <div className="container my-5 py-3">
      <div className="row g-5">
        <div className="col-lg-5">
          <span className="text-primary text-uppercase fw-bold small">Get In Touch</span>
          <h2 className="fw-bold text-dark mt-1 mb-4">We'd Love to Hear From You</h2>
          <p className="text-muted mb-4">
            Have questions about a product, shipping, or orders? Feel free to reach out to us. Our team will get back to you within 24 hours.
          </p>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
              <i className="bi bi-geo-alt fs-4"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Our Location</h6>
              <p className="text-muted small mb-0">Kombul, Phnom Penh, Cambodia</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
              <i className="bi bi-telephone fs-4"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Phone Number</h6>
              <p className="text-muted small mb-0">+855 93 638 500 / +855 71 497 1414</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
              <i className="bi bi-envelope fs-4"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Email Address</h6>
              <p className="text-muted small mb-0">support@online-shop.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 p-4 p-md-5 rounded-4 bg-white">
            <h4 className="fw-bold mb-4 text-dark">Send Us a Message</h4>
            
            {submitted && (
              <div className="alert alert-success d-flex align-items-center" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                <div>Your message has been sent successfully! Thank you.</div>
              </div>
            )}

            <form onSubmit={handleMessageSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-secondary">Full Name</label>
                  <input type="text" className="form-control bg-light" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold text-secondary">Email Address</label>
                  <input type="email" className="form-control bg-light" placeholder="name@example.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-semibold text-secondary">Subject</label>
                  <input type="text" className="form-control bg-light" placeholder="How can we help you?" required />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-semibold text-secondary">Message</label>
                  <textarea className="form-control bg-light" rows="5" placeholder="Type your message here..." required></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary px-4 py-2.5 fw-bold text-uppercase shadow-sm">
                    Send Message <i className="bi bi-send ms-2 small"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}