import React, { useState } from 'react';

export default function Checkout({ cart, onOrderSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    country: 'Cambodia',
    city: 'Phnom Penh',
    contactType: 'phone', 
    contactValue: '',
    paymentMethod: 'ABA' 
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 1.50 : 0;
  const amountToPay = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    if (!formData.contactValue.trim()) {
      alert(`Validation Failed: Please fill in your ${formData.contactType === 'phone' ? 'Phone Number' : 'Telegram Handle'} to validate and proceed with checkout!`);
      return;
    }
    

    alert("🎉 Order Success! Your transaction has been submitted.");
    onOrderSuccess();
  };

  return (
    <div className="container my-5">
      <div className="row g-5">
        
        <div className="col-md-7">
          <h4 className="mb-4 fw-bold text-dark border-bottom pb-2">Billing & Shipping Info</h4>
          
          <form onSubmit={handleCheckoutSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input type="text" className="form-control" name="name" required placeholder="John Doe" onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Address Details</label>
              <input type="text" className="form-control" name="address" required placeholder="St. 271, House 12B" onChange={handleInputChange} />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Country</label>
                <input type="text" className="form-control bg-light" name="country" value={formData.country} readOnly />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">City / Province</label>
                <select className="form-select" name="city" value={formData.city} onChange={handleInputChange}>
                  <option value="Phnom Penh">Phnom Penh</option>
                  <option value="Takeo">Takeo</option>
                  <option value="Kandal">Kandal</option>
                  <option value="Siem Reap">Siem Reap</option>
                  <option value="Sihanoukville">Sihanoukville</option>
                  <option value="Battambang">Battambang</option>
                </select>
              </div>
            </div>

     
            <div className="mb-4 p-3 bg-light rounded border">
              <label className="form-label fw-bold text-primary">Preferred Contact Line</label>
              <div className="d-flex gap-4 mb-2">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="contactType" id="phoneOption" value="phone" checked={formData.contactType === 'phone'} onChange={handleInputChange} />
                  <label className="form-check-label fw-medium" htmlFor="phoneOption">Phone Number</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="contactType" id="telegramOption" value="telegram" checked={formData.contactType === 'telegram'} onChange={handleInputChange} />
                  <label className="form-check-label" htmlFor="telegramOption">Telegram</label>
                </div>
              </div>
              
          
              <input 
                type="text" 
                className="form-control" 
                name="contactValue" 
                placeholder={formData.contactType === 'phone' ? "e.g. +855 12345678" : "e.g. @username_handle"} 
                value={formData.contactValue}
                onChange={handleInputChange} 
              />
            </div>

           
            <div className="mb-4">
              <label className="form-label fw-bold text-dark">Select Your Bank Provider</label>
              <div className="row g-2">
                {['ABA', 'Acleda', 'Wing'].map((bank) => (
                  <div className="col-4" key={bank}>
                    <input type="radio" className="btn-check" name="paymentMethod" id={`payment-${bank}`} value={bank} checked={formData.paymentMethod === bank} onChange={handleInputChange} />
                    <label className="btn btn-outline-primary w-100 py-3 fw-bold fs-5 shadow-sm" htmlFor={`payment-${bank}`}>{bank}</label>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-success btn-lg w-100 fw-bold shadow">CONFIRM & CHECKOUT</button>
          </form>
        </div>

       
        <div className="col-md-5">
          <div className="card p-4 border-0 shadow-sm bg-light position-sticky" style={{ top: '100px' }}>
            <h5 className="fw-bold mb-3 border-bottom pb-2 text-dark">Order Summary</h5>
            
            <div className="overflow-y-auto mb-3" style={{ maxHeight: '250px' }}>
              {cart.map((item, index) => (
                <div className="d-flex justify-content-between align-items-center mb-2 bg-white p-2 rounded border" key={index}>
                  <div className="small text-truncate" style={{ maxWidth: '180px' }}>
                    <span className="fw-bold text-dark">{item.name}</span>
                    <div className="text-muted" style={{ fontSize: '11px' }}>Size: {item.size} | Qty: {item.quantity}</div>
                  </div>
                  <span className="fw-bold text-secondary small">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <hr />
            <div className="d-flex justify-content-between mb-2 small text-muted">
              <span>Total Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2 small text-muted">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2 fw-bold text-danger fs-5 border-top pt-2">
              <span>Amount to Pay:</span>
              <span>${amountToPay.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}