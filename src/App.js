import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './components/MainContainer/Main';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPhysician, setIsPhysician] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handlePhysicianLogin = () => {
    setIsPhysician(true);
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsPhysician(false);
  }

  // const componentDidMount = () => {
  //   axios.get('user') 
  //   .then(
  //     res => {
  //       console.log(res);
  //       setUserData(res.data);
  //       console.log(userData.data.firstName)
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }


  return (
    <>
      <NavBar loggedIn={isLoggedIn} handleLogout={handleLogout} isPhysician={isPhysician} />
      <Main handleLogin={handleLogin} handlePhysicianLogin={handlePhysicianLogin} userData={userData} setUserData={setUserData} token={token} setToken={setToken}  />
    </>
  );
}

export default App;
