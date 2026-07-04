import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar({ cartCount, wishCount, searchQuery, setSearchQuery }) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2 py-md-3">
        <div className="container px-2 px-sm-3">

          <div className="d-flex align-items-center justify-content-between w-100 d-lg-none">
            <button 
              className="navbar-toggler border-0 p-0 text-dark fs-3" 
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#mobileNavbarCanvas"
            >
              <i className="bi bi-list"></i>
            </button>
            <Link className="navbar-brand fw-bold text-dark fs-4 m-0 ms-2 text-uppercase" to="/" style={{ letterSpacing: '0.5px' }}>
              ONLINE-SHOP
            </Link>
            <div className="d-flex align-items-center gap-2 gap-sm-3 fs-4 text-dark ms-auto">
              <button 
                className={`btn p-1 border-0 rounded-3 ${showMobileSearch ? 'bg-light' : ''}`} 
                onClick={() => setShowMobileSearch(!showMobileSearch)}
              >
                <i className="bi bi-search text-dark fs-5 fw-bold"></i>
              </button>
              <button className="btn p-1 border-0">
                <i className="bi bi-bell text-dark fs-5"></i>
              </button>
              <Link to="/wishlist" className="text-dark position-relative p-1 text-decoration-none">
                <i className="bi bi-heart fs-5"></i>
                {wishCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '9px', padding: '2px 4px' }}>
                    {wishCount}
                  </span>
                )}
              </Link>
              <button className="btn p-1 text-dark position-relative border-0" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                <i className="bi bi-bag fs-5"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '9px', padding: '2px 4px' }}>
                    {cartCount}
                  </span>
                )}
              </button>
              <Link to="/auth" className="text-dark p-1 text-decoration-none">
                <i className="bi bi-person fs-4"></i>
              </Link>
            </div>
          </div>
          {showMobileSearch && (
            <div className="w-100 mt-2 pt-2 border-top d-lg-none">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-search"></i></span>
                  <input 
                    className="form-control bg-light border-start-0 ps-0" 
                    type="search" 
                    placeholder="Search products by name..." 
                    value={searchQuery || ''} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    autoFocus
                    style={{ fontSize: '14px', height: '38px' }}
                  />
                </div>
              </form>
            </div>
          )}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <Link className="navbar-brand fw-bold text-primary fs-3" to="/">ONLINE-SHOP</Link>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Categories
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" to="/?category=Men">Men</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Women">Women</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Elderly">Elderly</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Kids">Kids</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Sports">Sports</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/?category=Shoes">Shoes</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Bags">Bags</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Jackets">Jackets</Link></li>
                  <li><Link className="dropdown-item" to="/?category=Jeans">Jeans</Link></li>
                </ul>
              </li>
              
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <form className="d-flex me-4" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group" style={{ width: '280px' }}>
                <input 
                  className="form-control" 
                  type="search" 
                  placeholder="Search products..." 
                  value={searchQuery || ''} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <div className="d-flex align-items-center gap-3 fs-4">
              <a href="#" className="text-dark"><i className="bi bi-bell"></i></a>
              <Link to="/wishlist" className="text-dark position-relative me-2 text-decoration-none">
                <i className="bi bi-heart"></i>
                {wishCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                    {wishCount}
                  </span>
                )}
              </Link>
              <button className="btn p-0 text-dark position-relative border-0" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                <i className="bi bi-bag fs-4"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                    {cartCount}
                  </span>
                )}
              </button>

              <Link to="/auth" className="text-dark fs-6 btn btn-sm btn-outline-secondary px-3 ms-2 fw-medium text-decoration-none">
                <i className="bi bi-person-circle me-1"></i> Login / Register
              </Link>
            </div>
          </div>

        </div>
      </nav>

      <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="mobileNavbarCanvas" style={{ width: '270px' }}>
        <div className="offcanvas-header border-bottom py-3">
          <h5 className="offcanvas-title fw-bold text-dark">MENU</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" id="closeMobileMenuBtn"></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush">
            
            <Link 
              to="/" 
              className="list-group-item py-3 fw-semibold text-dark text-decoration-none px-3 border-bottom"
              onClick={() => document.getElementById('closeMobileMenuBtn').click()} 
            >
              <i className="bi bi-house-door me-2"></i> Home
            </Link>
            
            <div className="bg-light px-3 py-2 fw-bold text-uppercase text-muted small border-bottom" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
              Categories
            </div>
            
            <Link to="/?category=Men" className="list-group-item py-2.5 ps-4 text-secondary small text-decoration-none border-bottom" onClick={() => document.getElementById('closeMobileMenuBtn').click()}>Men</Link>
            <Link to="/?category=Women" className="list-group-item py-2.5 ps-4 text-secondary small text-decoration-none border-bottom" onClick={() => document.getElementById('closeMobileMenuBtn').click()}>Women</Link>
            <Link to="/?category=Kids" className="list-group-item py-2.5 ps-4 text-secondary small text-decoration-none border-bottom" onClick={() => document.getElementById('closeMobileMenuBtn').click()}>Kids</Link>
            <Link to="/?category=Sports" className="list-group-item py-2.5 ps-4 text-secondary small text-decoration-none border-bottom" onClick={() => document.getElementById('closeMobileMenuBtn').click()}>Sports</Link>
            <Link to="/?category=Shoes" className="list-group-item py-2.5 ps-4 text-secondary small text-decoration-none border-bottom" onClick={() => document.getElementById('closeMobileMenuBtn').click()}>Shoes</Link>
            <Link to="/?category=Bags" className="list-group-item py-2.5 ps-4 text-secondary small text-decoration-none border-bottom" onClick={() => document.getElementById('closeMobileMenuBtn').click()}>Bags</Link>

            <div className="bg-light px-3 py-2 fw-bold text-uppercase text-muted small border-bottom" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
              Pages
            </div>
            <Link 
              to="/about" 
              className="list-group-item py-3 fw-semibold text-dark text-decoration-none px-3 border-bottom"
              onClick={() => document.getElementById('closeMobileMenuBtn').click()}
            >
              <i className="bi bi-info-circle me-2"></i> About Us
            </Link>
            
            <Link 
              to="/contact" 
              className="list-group-item py-3 fw-semibold text-dark text-decoration-none px-3"
              onClick={() => document.getElementById('closeMobileMenuBtn').click()}
            >
              <i className="bi bi-telephone me-2"></i> Contact Us
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}