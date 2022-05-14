import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './Patient/About';
import Appointments from './Patient/Appointments';
import NewAppointment from './Patient/NewAppointment';
import Chat from './Patient/Chat';
import SignIn from './Patient/SignIn';
import Register from './Patient/Register';
import PhysicianLogin from './Physician/PhysicianLogin';
// import Dashboard from './Physician/Dashboard';
import PhysicianChat from './Physician/PhysicianChat';
import PhysicianAppointments from './Physician/PhysicianAppointments';
import Patients from './Physician/Patients';
import SearchDiseases from './Patient/SearchDiseases';

function Main({ handleLogin, handlePhysicianLogin }) {
  return (
    <div className="main-container">
        <Routes>
            <Route exact path="*" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/appointments" element={<Appointments />} />
            <Route exact path="/new-appointment" element={<NewAppointment />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/search-medical-conditions" element={<SearchDiseases />} />
            <Route exact path="/signin" element={<SignIn handleLogin={handleLogin} />} />
            <Route exact path="/register" element={<Register handleLogin={handleLogin}/>} />

            <Route exact path="/provider-login" element={<PhysicianLogin handlePhysicianLogin={handlePhysicianLogin} />} />
            {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
            <Route exact path="/patients" element={<Patients />} />
            <Route exact path="/provider-chat" element={<PhysicianChat />} />
            <Route exact path="/provider-appointments" element={<PhysicianAppointments />} />
        </Routes>
    </div>
  )
}

export default Main