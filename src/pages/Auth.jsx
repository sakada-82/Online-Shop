import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  // State សម្រាប់ឆែកថាជាទំព័រ Login (true) ឬ Register (false)
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // State សម្រាប់ចាប់ទិន្នន័យពី Form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // កូដសម្រាប់ Login
      alert(`Welcome back, ${formData.email}! 👋`);
      navigate('/'); 
    } else {
  
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match! ❌");
        return;
      }
      alert("Registration Successful! 🎉 Please login.");
      setIsLogin(true); 
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="card shadow border-0 p-4 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">{isLogin ? 'Sign In' : 'Create Account'}</h2>
          <p className="text-muted small">
            {isLogin ? 'Welcome back! Please enter your details.' : 'Join us today! Get your free account.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary">Username</label>
              <div className="input-group">
                <span className="input-group-text bg-light text-muted border-end-0"><i className="bi bi-person"></i></span>
                <input type="text" name="username" className="form-control bg-light border-start-0 ps-0" placeholder="John Doe" required onChange={handleChange} />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0"><i className="bi bi-envelope"></i></span>
              <input type="email" name="email" className="form-control bg-light border-start-0 ps-0" placeholder="example@mail.com" required onChange={handleChange} />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0"><i className="bi bi-lock"></i></span>
              <input type="password" name="password" className="form-control bg-light border-start-0 ps-0" placeholder="••••••••" required onChange={handleChange} />
            </div>
          </div>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label small fw-semibold text-secondary">Confirm Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light text-muted border-end-0"><i className="bi bi-shield-lock"></i></span>
                <input type="password" name="confirmPassword" className="form-control bg-light border-start-0 ps-0" placeholder="••••••••" required onChange={handleChange} />
              </div>
            </div>
          )}
          {isLogin && (
            <div className="d-flex justify-content-between align-items-center mb-4 small">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label text-muted" htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="text-decoration-none text-primary fw-medium">Forgot Password?</a>
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100 py-2.5 fw-bold text-uppercase shadow-sm mb-3">
            {isLogin ? 'Login' : 'Register Now'}
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="small text-muted mb-0">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              type="button" 
              className="btn btn-link p-0 small fw-bold text-decoration-none text-primary ms-1"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}