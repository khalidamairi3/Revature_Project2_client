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
        e.preventDefault();
        handledLogin();
        // const formData = {
        //     firstName,
        //     lastName,
        //     username,
        //     password,
        //     phone,
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
              <h1 className="new-patient">New Patient</h1> 
              <div className="form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <input 
                        className="form-input"
                        type="text"
                        name="firstName"
                        placeholder="first Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="last Name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />
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
                    <input 
                        type="password"
                        name="confirmPassword"
                        placeholder="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input 
                        type="text"
                        name="phone"
                        placeholder="phone number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />

                  <p><button className="sign-in-btn" type="submit">Submit</button></p> 
                </form>
                <p className="small-font">Already have an account? <NavLink exact to="/signin"><span className="text-link">Login here</span></NavLink>.</p>
                </div>
            </div>
        </div>
    )
}

export default Register