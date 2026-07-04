import React from 'react';

export default function About() {
  return (
    <div>
      <div className="bg-light py-5 mb-5 text-center border-bottom">
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-dark mb-3">About ONLINE-SHOP</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            We are more than just an e-commerce platform. We are dedicated to bringing you the best fashion, sports gear, and accessories with top-tier quality and seamless service.
          </p>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" 
              alt="Our Story" 
              className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover"
              style={{ height: '350px' }}
            />
          </div>
          <div className="col-lg-6">
            <span className="text-primary text-uppercase fw-bold small">Our Journey</span>
            <h2 className="fw-bold text-dark mt-1 mb-3">Established to Redefine Your Shopping Experience</h2>
            <p className="text-muted">
              Founded with a vision to make high-quality products accessible to everyone, ONLINE-SHOP has grown into a trusted destination for modern shoppers. We continuously curate our 150+ item catalog to ensure you always find exactly what fits your lifestyle.
            </p>
            <p className="text-muted">
              From trendsetting clothing to durable sports gear, every item is vetted for excellence before it arrives at your doorstep.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light py-5 border-top">
        <div className="container py-3">
          <h3 className="text-center fw-bold text-dark mb-5">Why Customers Shop With Us</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 border-0 shadow-sm rounded-4">
                <div className="text-primary mb-3"><i className="bi bi-shield-check fs-1"></i></div>
                <h5 className="fw-bold">Premium Quality</h5>
                <p className="text-muted small mb-0">Every product in our collection undergoes strict quality assurance tests to ensure satisfaction.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 border-0 shadow-sm rounded-4">
                <div className="text-primary mb-3"><i className="bi bi-truck fs-1"></i></div>
                <h5 className="fw-bold">Fast & Safe Delivery</h5>
                <p className="text-muted small mb-0">Partnered with secure delivery networks to bring your orders to your doorstep at lightning speed.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 border-0 shadow-sm rounded-4">
                <div className="text-primary mb-3"><i className="bi bi-headset fs-1"></i></div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted small mb-0">Our friendly customer experience team is always here to help you with any inquiries anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}