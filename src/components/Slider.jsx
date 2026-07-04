import React from 'react';

export default function Slider() {
  return (
    <div id="heroCarousel" className="carousel slide shadow-sm mb-5" data-bs-ride="carousel">
     
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>
      <div className="carousel-inner" style={{ maxHeight: '450px', bg: '#f8f9fa' }}>
    
        <div className="carousel-item active" data-bs-interval="4000">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80" 
            className="d-block w-100 object-fit-cover" 
            style={{ 
              height: '350px',      
              minHeight: '250px' 
            }} 
            className="d-block w-100 object-fit-cover h-md-450" 
            alt="New Arrivals" 
          />
          <div className="carousel-caption d-none d-md-block text-start start-10 pb-5">
            <span className="badge bg-danger mb-2 text-uppercase tracking-wider px-3 py-2">Hot Deal</span>
            <h1 className="display-4 fw-bold text-white">NEW SUMMER ARRIVALS</h1>
            <p className="lead text-light mb-4">Discover the latest trending fashion with over 150+ styles online.</p>
            <a href="/" className="btn btn-primary btn-lg fw-bold px-4 py-2">SHOP NOW</a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=80" 
            className="d-block w-100 object-fit-cover" 
            style={{ 
              height: '350px',      
              minHeight: '250px' 
            }} 
            className="d-block w-100 object-fit-cover h-md-450" 
            alt="Big Sale" 
          />
          <div className="carousel-caption d-none d-md-block pb-5">
            <h1 className="display-4 fw-bold text-white">BIG SALE UP TO 50% OFF</h1>
            <p className="lead text-light mb-4">Special discounts on all jackets, jeans, and premium sneakers this week only.</p>
            <a href="#" className="btn btn-warning btn-lg fw-bold px-4 py-2 text-dark">VIEW PROMOTIONS</a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80" 
            className="d-block w-100  object-fit-cover" 
            style={{ 
              height: '350px',      
              minHeight: '250px' 
            }} 
            className="d-block w-100 object-fit-cover h-md-450" 
            alt="Sports Gear" 
          />
          <div className="carousel-caption d-none d-md-block text-end end-10 pb-5">
            <h1 className="display-4 fw-bold text-white">PREMIUM SPORTS & SHOES</h1>
            <p className="lead text-light mb-4">High performance training gears and active streetwear for everyone.</p>
            <a href="#" className="btn btn-light btn-lg fw-bold px-4 py-2">EXPLORE CATEGORIES</a>
          </div>
        </div>
      </div>

    
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}