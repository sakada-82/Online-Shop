import React from 'react';
import { useSearchParams } from 'react-router-dom'; 
import Slider from '../components/Slider';
import ProductCard from '../components/ProductCard';

// 1. 🔍 ត្រូវបន្ថែម searchQuery ចូលទៅក្នុង Props ត្រង់នេះ
export default function Home({ products, loading, wishlist, onToggleWishlist, searchQuery }) {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const filteredProducts = products.filter(product => {
    
    const matchesCategory = categoryParam 
      ? product.category.toLowerCase() === categoryParam.toLowerCase() 
      : true;

    const matchesSearch = product.name.toLowerCase().includes((searchQuery || '').toLowerCase());

    return matchesCategory && matchesSearch; 
  }); 

  return (
    <div>
      <Slider />

      <div className="container mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-dark m-0">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : categoryParam ? `${categoryParam} Products` : "All Products"}
          </h3>
          <span className="badge bg-light text-dark border px-3 py-2 fw-semibold">
            Showing {filteredProducts.length} Items
          </span>
        </div>
        
        {loading ? (
          <div className="text-center my-5 py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3 text-muted fw-medium">Fetching products catalogue...</p>
          </div>
        ) : (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
            {filteredProducts.length === 0 ? (
              <div className="col-12 text-center my-5 py-5">
                <i className="bi bi-search-heart text-muted display-1"></i>
                <h5 className="mt-3 text-muted">No products match your search!</h5>
              </div>
            ) : (
              filteredProducts.map(product => (
                <div className="col" key={product.id}>
                  <ProductCard 
                    product={product} 
                    isWished={wishlist && wishlist.some(item => item.id === product.id)}
                    onToggleWishlist={onToggleWishlist} 
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}