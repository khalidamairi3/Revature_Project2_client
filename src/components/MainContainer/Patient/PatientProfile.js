import React from 'react';
import '../Physician/Profile.css'

function PatientProfile({ userData, token }) {

  return (
    <div className="div-container">
      <h1>Welcome back, {userData.firstName} {userData.lastName}.</h1>
      <div className="profile-div">
        <p>First Name: {userData.firstName}</p>
        <p>Last Name: {userData.lastName}</p>
        <p>Date of Birth: {userData.dob}</p>
        <p>Contact: {userData.phoneNum}</p>
        <p>Session token: <span className="token-span">{token}</span></p> 
      </div>
      <button>Edit Profile</button>
      <div className="edit-profile-div">
        
      </div>
    </div>
  )
}

export default PatientProfile;