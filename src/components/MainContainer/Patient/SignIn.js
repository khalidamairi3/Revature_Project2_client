import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './SignIn.css';

function PhysicianLogin({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  }

  return (
    <div className="login-div">
      <div className="sign-up-form-div">
          <h1>Patient Login</h1>
          <form className="sign-up-form">
            <span>
                <label>Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </span>
            <span>
                <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </span>
            <br/>
            <NavLink to="/home">
                <button className="sign-in-btn" onClick={handleSubmit} type="submit">Sign In</button>
            </NavLink>
            <br/>
            <p className="small-font">Don't have an account? <NavLink exact to="/register"><span className="text-link">Register here</span></NavLink>.</p>
          </form>
      </div>
    </div>  
  )
}

export default PhysicianLogin;