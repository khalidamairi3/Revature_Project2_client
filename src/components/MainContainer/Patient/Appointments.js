import React, { useState } from 'react';
import NewAppointment from './NewAppointment';
import './Appointments.css';

function Appointments() {
  const [showNewForm, setShowNewForm] = useState(false);

  const handleShowNewForm = () => {
    setShowNewForm(!showNewForm);
  }

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
                    <tr className="appointment-info">
                      <td>2022-05-16</td>
                      <td>1:30 PM</td>
                      <td>Dr. Dumbledore</td>
                      <td>Pending</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                      </td>
                    </tr>
                    <tr className="appointment-info">
                      <td>2022-05-05</td>
                      <td>2:30 PM</td>
                      <td>Dr. Snape</td>
                      <td>Pending</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                      </td>
                    </tr>
                    <tr className="appointment-info">
                      <td>2022-05-02</td>
                      <td>12:45 PM</td>
                      <td>Dr. Dumbledore</td>
                      <td>Approved</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                      </td>
                    </tr>
                    <tr className="appointment-info">
                      <td>2022-04-17</td>
                      <td>9:30 AM</td>
                      <td>Dr. McGonagall</td>
                      <td>Approved</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="edit-btn"><i className="fa-solid fa-trash-can"></i></button>
                      </td>
                    </tr>
                    <tr className="appointment-info">
                      <td>2022-04-12</td>
                      <td>10:15 AM</td>
                      <td>Dr. Trelawny</td>
                      <td>Approved</td>
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

export default Appointments