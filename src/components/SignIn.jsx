import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    // For now, just navigate to the discovery page
    navigate('/discovery');
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-content">
          <div className="signin-image-container">
            <div className="signin-image-placeholder"></div>
          </div>
          
          <div className="signin-form-container">
            <h2 className="signin-title">Welcome Back</h2>
            
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@google.com"
                  className="signin-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="your password"
                  className="signin-input"
                  required
                />
              </div>
              
              <button type="submit" className="signin-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;