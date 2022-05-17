import React, { useState } from 'react';
import ConsultNote from './ConsultNote';
import './DrAppointmentInfo.css';
import axios from 'axios';

function DrAppointmentInfo({ appointment, handleDeleted, token }) {
    const [showConsultNote, setShowConsultNote] = useState(false);
    // const [status, setStatus] = useState(appointment.status)
    // const [confirmed, setConfirmed] = useState(false);

    const id = appointment.id;

    const handleConsultNote = () => {
        setShowConsultNote(!showConsultNote)
    }

    const confirmApp = {
        "id": id,
        "status": "Confirmed"
    }

    const updateSeen = {
        "id": id,
        "status": "Seen"
    }

    const handleConfirm = () => {
        axios.put(`http://localhost:8080/appointment/${id}/confirm`, confirmApp, {headers: {"Authorization": `Bearer ${token}`} })
    }

    const handleSeen = () => {
        axios.put(`http://localhost:8080/appointment/${id}/seen`, updateSeen, {headers: {"Authorization": `Bearer ${token}`} })
    }

    const onDelete = () => {
        axios.delete(`http://localhost:8080/appointment/request/${id}`)
        .then(handleDeleted(id));
    }

  return (
    <>
        { showConsultNote ? 
            <div className="consult-note-container">
            <ConsultNote id={id} note={appointment.note} closeModal={handleConsultNote} /> 
            </div>
        : null }
        <tr className="appointment-info">
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.patient.firstName} {appointment.patient.lastName}</td>
            <td>{appointment.status} </td>
            <td><button className="consult-btn" onClick={handleConsultNote}>Consult Note</button></td>
            <td>
                <button className="status-btn" onClick={handleConfirm}>Confirm</button>
                <button className="status-btn" onClick={handleSeen}>Seen</button>
                <button className="edit-btn" onClick={onDelete}><i className="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    </>
  )
}

export default DrAppointmentInfo;