import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../Patient/SignIn.css';

function PhysicianLogin({ handlePhysicianLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePhysicianLogin();
    navigate('/provider-appointments');
  }

  return (
    <div className="login-div">
      <div className="sign-up-form-div">
          <h1>Physician Login</h1>
          <form className="sign-up-form" onSubmit={handleSubmit}>
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
            <button className="sign-in-btn" type="submit">Sign In</button>
          </form>
      </div>
    </div>  
  )
}

export default PhysicianLogin;