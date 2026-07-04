import React from 'react';
import { Link } from 'react-router-dom';

export default function CartOffcanvas({ cart, onCheckout, onRemoveFromCart }) { 
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 1.50 : 0; 
  const amountToPay = subtotal + deliveryFee;

  return (
    <div className="offcanvas offcanvas-end" id="cartOffcanvas" tabIndex="-1">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title fw-bold"><i className="bi bi-bag-check-fill me-2 text-success"></i>Shopping Bag</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      
      <div className="offcanvas-body d-flex flex-column justify-content-between">
        <div className="overflow-y-auto mb-3 pr-2">
          {cart.length === 0 ? (
            <div className="text-center text-muted my-5">
              <i className="bi bi-cart-x fs-1 d-block mb-2"></i>
              <p>Your bag is currently empty</p>
              <Link to="/" className="btn btn-primary mt-2">Go Shopping</Link>
            </div>
            
          ) : (
            cart.map((item, index) => (
              <div className="d-flex gap-3 mb-3 pb-3 border-bottom align-items-center" key={index}>
                <img src={item.image} alt={item.name} className="rounded object-fit-cover border" style={{ width: '65px', height: '65px' }} />
                <div className="flex-grow-1">
                  <h6 className="mb-0 small fw-bold text-dark text-truncate" style={{ maxWidth: '140px' }}>{item.name}</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>Size: {item.size} | Qty: {item.quantity}</p>
                  <span className="fw-semibold text-primary small">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button 
                  className="btn btn-sm btn-outline-danger border-0 rounded-circle"
                  onClick={() => onRemoveFromCart(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-top pt-3 bg-white">
            <div className="d-flex justify-content-between mb-2 small text-muted">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2 small text-muted">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 fw-bold fs-5 border-top pt-2 text-dark">
              <span>Amount to Pay:</span>
              <span className="text-danger">${amountToPay.toFixed(2)}</span>
            </div>
            <button className="btn btn-danger w-100 py-2.5 fw-bold text-uppercase" data-bs-dismiss="offcanvas" onClick={onCheckout}>
              Proceed to Checkout <i className="bi bi-arrow-right-short ms-1"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}