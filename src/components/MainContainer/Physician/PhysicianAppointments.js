import React, { useState } from 'react';
import NewAppointment from '../Patient/NewAppointment';
import ConsultNote from './ConsultNote';
import '../Patient/Appointments.css';
import './PhysicianAppointments.css';

function PhysicianAppointments() {
  const [showNewForm, setShowNewForm] = useState(false);
  const [showConsultNote, setShowConsultNote] = useState(false);

  const handleShowNewForm = () => {
    setShowNewForm(!showNewForm);
  }

  const handleConsultNote = () => {
    setShowConsultNote(!showConsultNote)
  }

    return (
        <div className="div-container">
          <h1>Virtual Care Visits</h1>
          <button className="new-app-btn" onClick={handleShowNewForm}>New Appointment</button>
          <div>
            { showNewForm ? <NewAppointment /> : null }
          </div>
          <br/>

          { showConsultNote ? 
            <div className="consult-note-container">
              <ConsultNote closeModal={handleConsultNote} /> 
            </div>
          : null }
          
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
                        <tr className="appointment-info">
                          <td>2022-05-16</td>
                          <td>1:30 PM</td>
                          <td>Harry Potter</td>
                          <td>Pending</td>
                          <td><button onClick={handleConsultNote}>Consult Note</button></td>
                          <td>
                            <button className="edit-btn">Edit</button>
                            <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                          </td>
                        </tr>
                        <tr className="appointment-info">
                          <td>2022-05-05</td>
                          <td>2:30 PM</td>
                          <td>Hermione Granger</td>
                          <td>Pending</td>
                          <td><button>Consult Note</button></td>
                          <td>
                            <button className="edit-btn">Edit</button>
                            <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                          </td>
                        </tr>
                        <tr className="appointment-info">
                          <td>2022-05-02</td>
                          <td>12:45 PM</td>
                          <td>Ron Weasley</td>
                          <td>Approved</td>
                          <td><button>Consult Note</button></td>
                          <td>
                            <button className="edit-btn">Edit</button>
                            <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                          </td>
                        </tr>
                        <tr className="appointment-info">
                          <td>2022-04-17</td>
                          <td>9:30 AM</td>
                          <td>Luna Lovegood</td>
                          <td>Approved</td>
                          <td><button>Consult Note</button></td>
                          <td>
                            <button className="edit-btn">Edit</button>
                            <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                          </td>
                        </tr>
                        <tr className="appointment-info">
                          <td>2022-04-12</td>
                          <td>10:15 AM</td>
                          <td>Hermione Granger</td>
                          <td>Approved</td>
                          <td><button>Consult Note</button></td>
                          <td>
                            <button className="edit-btn">Edit</button>
                            <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default PhysicianAppointments;