import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';

function Register({ handledLogin }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        handledLogin();
        // const formData = {
        //     firstName,
        //     lastName,
        //     username,
        //     email,
        //     password
        // }

        // if (password !== confirmPassword){
        //     alert("Password do no match")
        // } else {
        //     fetch(`${process.env.REACT_APP_API_BASE_URL}users/`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type":"application/json"
        //         },
        //         body: JSON.stringify(formData)
        //     })
        //     .then(r => r.json())
        //     // .then(handleNewUser)
        // }
    }

    return (
        <div className="login-div">
            <div className="register-form-div">
              <h1 className="sign-up">New Patient</h1> 
              <div className="form-container">
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input 
                        className="form-input"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
        
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />

                    <label>Username:</label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
              
                  <label>Phone Number:</label>
                    <input 
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
              
                    <label>Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
         
                  <label>Confirm Password:</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
        
                  <p><button className="sign-in-btn" type="submit">Submit</button></p> 
                  <p className="small-font">Already have an account? <NavLink exact to="/signin"><span className="text-link">Login here</span></NavLink>.</p>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register