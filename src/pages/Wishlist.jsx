import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Wishlist({ wishlist, onToggleWishlist }) {
  return (
    <div className="container my-5" style={{ minHeight: '60vh' }}>
      <Link to="/" className="btn btn-sm btn-outline-secondary mb-4 fw-semibold">
          <i className="bi bi-arrow-left"></i> Back to Products
      </Link>
      <h3 className="fw-bold text-dark mb-4">
        <i className="bi bi-heart-fill text-danger me-2"></i>My Wishlist ({wishlist.length} Items)
      </h3>

      {wishlist.length === 0 ? (
        <div className="text-center my-5 py-5 bg-light rounded border">
          <i className="bi bi-heartbreak text-muted display-1 d-block mb-3"></i>
          <h5>Your wishlist is empty!</h5>
          <p className="text-muted">Explore our catalog and add some items you like.</p>
          <Link to="/" className="btn btn-primary mt-2">Go Shopping</Link>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {wishlist.map(product => (
            <div className="col" key={product.id}>
              <div className="card h-100 border-0 position-relative shadow-sm rounded">
                <ProductCard 
                  product={product} 
                  isWished={true} 
                  onToggleWishlist={onToggleWishlist} 
                />
                <div className="p-2 bg-white rounded-bottom border-top text-center">
                  <button 
                    className="btn btn-sm btn-link text-danger text-decoration-none fw-semibold p-0"
                    onClick={() => onToggleWishlist(product)}
                  >
                    <i className="bi bi-trash3-fill me-1"></i> Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}