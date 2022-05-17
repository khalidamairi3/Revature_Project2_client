import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './SignIn.css';

function SignIn({ handleLogin, setUserData }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:8080/patient/1`)
    .then(res => {
      setUserData(res.data)
    })
    
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

export default SignIn;