import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './Patient/About';
import Appointments from './Patient/Appointments';
import NewAppointment from './Patient/NewAppointment';
import Physicians from './Patient/Physicians';
import PhysiciansNetwork from './Physician/PhysiciansNetwork';
import Chat from './Patient/Chat';
import SignIn from './Patient/SignIn';
import Register from './Patient/Register';
import PhysicianLogin from './Physician/PhysicianLogin';
import PhysicianProfile from './Physician/PhysicianProfile';
import PhysicianChat from './Physician/PhysicianChat';
import PhysicianAppointments from './Physician/PhysicianAppointments';
import Patients from './Physician/Patients';
// import SearchDiseases from './Patient/SearchDiseases';

function Main({ handleLogin, handlePhysicianLogin, userData, setUserData, token, setToken }) {
  return (
    <div className="main-container">
        <Routes>
            <Route exact path="*" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/appointments" element={<Appointments userData={userData} />} />
            <Route exact path="/new-appointment" element={<NewAppointment />} />
            <Route exact path="/chat" element={<Chat userData={userData} token={token}/>} />
            <Route exact path="/physicians-list" element={<Physicians />} />
            {/* <Route exact path="/search-medical-conditions" element={<SearchDiseases />} /> */}
            <Route exact path="/signin" element={<SignIn handleLogin={handleLogin} setUserData={setUserData} />} />
            <Route exact path="/register" element={<Register handleLogin={handleLogin}/>} />

            <Route exact path="/provider-login" element={<PhysicianLogin userData={userData} setUserData={setUserData} token={token} setToken={setToken} handlePhysicianLogin={handlePhysicianLogin} />} />
            <Route exact path="/provider-profile" element={<PhysicianProfile userData={userData} token={token} />} />
            <Route exact path="/physicians-network" element={<PhysiciansNetwork />} />
            <Route exact path="/patients" element={<Patients userData={userData} token={token} />} />
            <Route exact path="/provider-chat" element={<PhysicianChat userData={userData} token={token} />} />
            <Route exact path="/provider-appointments" element={<PhysicianAppointments userData={userData} token={token}/>} />
        </Routes>
    </div>
  )
}

export default Main