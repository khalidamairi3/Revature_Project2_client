import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../Patient/SignIn.css';

function PhysicianLogin({ handlePhysicianLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePhysicianLogin();
  }

  return (
    <div className="login-div">
      <div className="sign-up-form-div">
          <h1>Physician Login</h1>
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
            <NavLink to="/dashboard">
                <button className="sign-in-btn" onClick={handleSubmit} type="submit">Sign In</button>
            </NavLink>
          </form>
      </div>
    </div>  
  )
}

export default PhysicianLogin;