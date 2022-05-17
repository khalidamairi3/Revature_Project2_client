import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './SignIn.css';

function PhysicianLogin({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    navigate('/');
  }

  return (
    <div className="login-div">
      <div className="sign-up-form-div">
          <h1>Patient Login</h1>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <span>
                <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </span>
            <br/>
            <button className="sign-in-btn" onClick={handleSubmit} type="submit">Sign In</button>
            <p className="small-font">Don't have an account? <NavLink exact to="/register"><span className="text-link">Register here</span></NavLink>.</p>
          </form>
      </div>
    </div>  
  )
}

export default PhysicianLogin;