import React, { useState, useEffect } from 'react';
import NewAppointment from './NewAppointment';
import AppointmentInfo from './AppointmentInfo';
import './Appointments.css';
import axios from 'axios';
import Search from '../../Search/SearchPhysician';

function Appointments({ userData, token }) {
  const [showNewForm, setShowNewForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");


  const [patientName, setPatientName] = useState("");
  const [physicianName, setPhysicianName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const id = userData.id

  useEffect(() => {
    axios.get(`http://localhost:8080/appointment/patient/${id}`, {headers: {"Authorization": `Bearer ${token}`} })
    .then(res => {
      setAppointments(res.data)
    })
  }, [])

  const filterAppointments = appointments.filter(appointment => {
    return appointment.doctor.lastName.toLowerCase().includes(search.toLowerCase());
  })

  const handleShowNewForm = () => {
    setShowNewForm(!showNewForm);
  }

  const onAddAppointment = (physician, patient, ptFirstName, time, selected) => {
    
  }

  const handleDeleted = (id) => {
    setAppointments(appointments.filter(appointment => {
      return appointment.id !== id
    }))
  }

  const appointmentInfo = filterAppointments.map(appointment => {
    return <AppointmentInfo key={appointment.id} appointment={appointment} handleDeleted={handleDeleted} />
  })

  return (
    <div className="div-container">
      <h1>Appointments</h1>
      <p>An appointment is recommended to guarantee your choice of physician.</p>
      <button className="new-app-btn" onClick={handleShowNewForm}>New Appointment</button>
      <div>
        { showNewForm ? <NewAppointment token={token} onAddAppointment={onAddAppointment} /> : null }
      </div>
      <div>
        <Search search={search} onSearchChange={setSearch}/>
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