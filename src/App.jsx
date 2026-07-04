import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartOffcanvas from './components/CartOffcanvas';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleWishlist = (product) => {
    const isExist = wishlist.find(item => item.id === product.id);
    if (isExist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const handleRemoveFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    fetch('/api/products.json')
      .then((res) => res.json())
      .then((data) => { setProducts(data); setLoading(false); })
      .catch((err) => { console.error(err); setLoading(false); });
  }, []);

  const handleAddToBag = (product, size, qty) => {
    setCart([...cart, { ...product, size, quantity: qty }]);
    alert(`Added ${product.name} (Size: ${size}) to your bag! 🛍️`);
  };

  

  return (
    <div>
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        wishCount={wishlist.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <Routes>
        <Route path="/" element={
          <Home 
            products={products} 
            loading={loading} 
            wishlist={wishlist} 
            onToggleWishlist={handleToggleWishlist}
            searchQuery={searchQuery}
          />
        } />
        <Route path="/product/:id" element={<ProductDetails onAddToBag={handleAddToBag} />} />
        <Route path="/checkout" element={<Checkout cart={cart} onOrderSuccess={() => { setCart([]); navigate('/'); }} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onToggleWishlist={handleToggleWishlist} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <CartOffcanvas 
        cart={cart} 
        onCheckout={() => navigate('/checkout')} 
        onRemoveFromCart={handleRemoveFromCart} 
      />
    </div>
  );
}