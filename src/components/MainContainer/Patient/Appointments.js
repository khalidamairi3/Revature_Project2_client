import React, { useState, useEffect } from 'react';
import NewAppointment from './NewAppointment';
import AppointmentInfo from './AppointmentInfo';
import './Appointments.css';

function Appointments({ userData }) {
  const [showNewForm, setShowNewForm] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // fetch only appointments with patient ID
   useEffect(() => {
    fetch(`http://localhost:8080/appointment/patient/1`)
    .then(r => r.json())
    .then(appointments => {
        setAppointments(appointments);
        // console.log(appointments);
    })
  }, [])

  // fetch ALL appointments
  // useEffect(() => {
  //   fetch(`http://localhost:8080/appointment/all`)
  //   .then(r => r.json())
  //   .then(appointments => {
  //       setAppointments(appointments);
  //       console.log(appointments);
  //   })
  // }, [])

  const handleShowNewForm = () => {
    setShowNewForm(!showNewForm);
  }

  const appointmentInfo = appointments.map(appointment => {
    return <AppointmentInfo key={appointment.id} appointment={appointment} />
  })

  return (
    <div className="div-container">
      <h1>Appointments</h1>
      <p>An appointment is recommended to guarantee your choice of physician.</p>
      <button className="new-app-btn" onClick={handleShowNewForm}>New Appointment</button>
      <div>
        { showNewForm ? <NewAppointment /> : null }
      </div>
      <br/>
      <div className="appointments-div">
        
            <table className="appointments-table">
                <tbody>
                    <tr>
                        <th className="appointments-header">Date</th>
                        <th className="appointments-header">Time</th>
                        <th className="appointments-header">Physician</th>    
                        <th className="appointments-header">Status</th>    
                        <th className="appointments-header">Action</th>
                    </tr>
                   {appointmentInfo}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Appointments;