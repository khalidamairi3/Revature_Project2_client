import React, { useState } from 'react';
import ConsultNote from './ConsultNote';
import axios from 'axios';

function DrAppointmentInfo({ appointment }) {
    const [showConsultNote, setShowConsultNote] = useState(false);
    const id = appointment.id;

    const handleConsultNote = () => {
        setShowConsultNote(!showConsultNote)
    }

    const onDelete = () => {
        axios.delete(`http://localhost:8080/appointment/request/${id}`);
    }

  return (
    <>
        { showConsultNote ? 
            <div className="consult-note-container">
            <ConsultNote note={appointment.note} closeModal={handleConsultNote} /> 
            </div>
        : null }
        <tr className="appointment-info">
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.patient.firstName} {appointment.patient.lastName}</td>
            <td>{appointment.status}</td>
            <td><button onClick={handleConsultNote}>Consult Note</button></td>
            <td>
                <button className="edit-btn" >Edit</button>
                <button className="edit-btn" onClick={onDelete}><i className="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    </>
  )
}

export default DrAppointmentInfo;