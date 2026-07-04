import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, isWished, onToggleWishlist }) {

  

  const toggleWishlist = () => {
    setIsWished(!isWished);
    if (!isWished) {
      console.log(`Added ${product.name} to Wishlist`);
    } else {
      console.log(`Removed ${product.name} from Wishlist`);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="card h-100 shadow-sm border-0 position-relative">
      <div className="card-header bg-transparent p-0 border-0 position-relative">
        <img 
          src={product.image} 
          className="card-img-top object-fit-cover" 
          style={{ height: '240px' }} 
          alt={product.name} 
        />
        <button 
          className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm text-danger d-flex align-items-center justify-content-center"
          style={{ width: '35px', height: '35px', zIndex: 10 }}
          onClick={() => onToggleWishlist(product)}
        >
          <i className={`bi ${isWished ? 'bi-heart-fill text-danger' : 'bi-heart'}`} style={{ fontSize: '18px' }}></i>
        </button>
      </div>
      
      <div className="card-body d-flex flex-column justify-content-between bg-white rounded-bottom">
        <div>
          <span className="text-uppercase text-muted small" style={{ fontSize: '11px' }}>{product.category}</span>
          <h6 className="card-title text-truncate fw-bold mb-1">{product.name}</h6>
          
          <div className="text-warning mb-2 small">
            {renderStars(product.rating)}
            <span className="text-muted ms-1">({product.rating})</span>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold text-primary fs-5">${product.price.toFixed(2)}</span>
          </div>
          <Link to={`/product/${product.id}`} className="btn btn-primary w-100 btn-sm fw-semibold">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}