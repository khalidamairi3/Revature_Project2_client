import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../images/hc-logo.png';
import './NavBar.css';


function NavBar({ loggedIn, handleLogout, isPhysician }) {
    const [navBar, setNavBar] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);


    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    const onLogoutClick = () => {
        handleLogout();
    }

    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }

    window.onclick = function(e) {
        if (!e.target.matches('.drop-btn')) {
            setShowDropDown(false)
        }
    }

    return (
        <div className="nav-bar">
            <div className="left">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="Health Club Logo" />
                    </NavLink>
                { loggedIn ? 
                <div>
                    { isPhysician ? 
                    <ul>
                        <NavLink to="/dashboard">
                            <li className="nav-item">Dashboard</li>
                        </NavLink>
                        <NavLink to="/provider-appointments">
                            <li className="nav-item">Appointments</li>
                        </NavLink>
                        <NavLink to="/provider-chat">
                            <li className="nav-item">Chat</li>
                        </NavLink>
                    </ul> :
                    <ul>
                        <NavLink to="/">
                            <li className="nav-item">Home</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li className="nav-item">About</li>
                        </NavLink>
                        <NavLink to="/appointments">
                            <li className="nav-item">Appointments</li>
                        </NavLink>
                        <NavLink to="/chat">
                            <li className="nav-item">Chat</li>
                        </NavLink>
                    </ul>
                    }
                </div> :
                <div> 
                    <NavLink to="/">
                            <li className="nav-item">Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className="nav-item">About</li>
                    </NavLink>
                </div>
                }
            </div>

            <div className="right">
                { loggedIn ? 
                    <ul>
                        <NavLink to="/chat">
                            <li className="nav-item">
                                <i className="fa-solid fa-user"></i> 
                                <span className="text">Profile</span>
                            </li>
                        </NavLink>
                        <NavLink to="/">
                            <li className="nav-item">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <span className="text" onClick={onLogoutClick}>Logout</span>
                            </li>
                        </NavLink>
                    </ul>  :
                    <ul>
                        <NavLink to="/register">
                            <li className="nav-item">
                                <span className="text">Register</span>
                            </li>
                        </NavLink>
                        <li className="nav-item">
                            <span className="drop-btn" onClick={handleDropDown}>Sign In</span>
                        </li>
                        { showDropDown ? <div className="dropdown-content">
                            <ul>
                                <li>
                                    <NavLink exact to="/signIn">
                                        <span className="dropdown-span">
                                            <i className="fa-solid fa-user"></i>
                                        </span>
                                        Patient Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/provider-login">
                                        <span className="dropdown-span">
                                            <i className="fa-solid fa-user-doctor"></i>
                                        </span>
                                        Physician Login
                                    </NavLink>
                                </li>
                            </ul>
                            </div> 
                        : null }
                    </ul>
                } 
            </div>
        </div>
    );
}

export default NavBar;