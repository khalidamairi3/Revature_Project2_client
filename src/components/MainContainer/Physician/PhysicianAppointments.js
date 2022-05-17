import React, { useState, useEffect } from 'react';
import NewAppointment from '../Patient/NewAppointment';
import DrAppointmentInfo from './DrAppointmentInfo';
import '../Patient/Appointments.css';
import './PhysicianAppointments.css';
import axios from 'axios';


function PhysicianAppointments({ userData, token }) {
  const [showNewForm, setShowNewForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  // const [search, setSearch] = useState("");

  const id = userData.id

  useEffect(() => {
    axios.get(`http://localhost:8080/appointment/doctor/1`, {headers: {"Authorization": `Bearer ${token}`} })
    .then(res => {
      setAppointments(res.data)
    })
  }, [])


  // const filterAppointments = appointments.filter(appointment => {
  //   return appointment.specialization.toLowerCase().includes(search.toLowerCase())
  // });

  const handleShowNewForm = () => {
    setShowNewForm(!showNewForm);
  }

  const onAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment])
  }


  const appointmentInfo = appointments.map(appointment => {
      return <DrAppointmentInfo key={appointment.id} appointment={appointment} />
  })

    return (
        <div className="div-container">
          <h1>Virtual Care Visits</h1>
          <button className="new-app-btn" onClick={handleShowNewForm}>New Appointment</button>
          <div>
            { showNewForm ? <NewAppointment token={token} onAddAppointment={onAddAppointment} /> : null }
          </div>
          <br/>


          
          <div className="appointments-div">
                <table className="appointments-table">
                    <tbody>
                        <tr>
                            <th className="appointments-header">Date</th>
                            <th className="appointments-header">Time</th>
                            <th className="appointments-header">Patient</th>    
                            <th className="appointments-header">Status</th>    
                            <th className="appointments-header">Note</th>    
                            <th className="appointments-header">Action</th>
                        </tr>
                        {appointmentInfo}
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default PhysicianAppointments;