import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails({ onAddToBag }) {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products.json')
      .then((res) => res.json())
      .then((data) => {
      
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h3 className="text-danger">Product Not Found!</h3>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-sm btn-outline-secondary mb-4 fw-semibold">
        <i className="bi bi-arrow-left"></i> Back to Products
      </Link>
      
      <div className="row g-5">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded">
            <img src={product.image} className="img-fluid rounded object-fit-cover w-100" style={{ maxHeight: '500px' }} alt={product.name} />
          </div>
        </div>
        
        <div className="col-md-6">
          <span className="badge bg-primary text-uppercase px-3 py-2 mb-2">{product.category}</span>
          <h2 className="fw-bold text-dark mb-2">{product.name}</h2>
          
          <div className="d-flex align-items-center gap-2 mb-4 text-warning">
            <i className="bi bi-star-fill"></i>
            <span className="fw-bold text-dark">{product.rating}</span>
            <span className="text-muted small">| 150+ Orders Placed</span>
          </div>

          <h3 className="text-danger fw-bold mb-4 fs-2">${product.price.toFixed(2)}</h3>
          <hr className="my-4" />

          <div className="mb-4">
            <label className="form-label fw-bold text-secondary small text-uppercase">Select Size</label>
            <div className="d-flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className={`btn px-3 py-2 fw-bold ${selectedSize === size ? 'btn-primary shadow-sm' : 'btn-outline-secondary'}`} onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>

         
          <div className="mb-4">
            <label className="form-label fw-bold text-secondary small text-uppercase">Quantity</label>
            <div className="d-flex align-items-center gap-2" style={{ maxWidth: '140px' }}>
              <button className="btn btn-outline-secondary fw-bold" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
              <span className="form-control text-center fw-bold bg-light">{quantity}</span>
              <button className="btn btn-outline-secondary fw-bold" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          <div className="pt-2">
            <button className="btn btn-danger btn-lg px-5 fw-bold w-100 py-3" onClick={() => onAddToBag(product, selectedSize, quantity)}>
              <i className="bi bi-bag-plus-fill me-2 fs-5"></i> Add To Shopping Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}