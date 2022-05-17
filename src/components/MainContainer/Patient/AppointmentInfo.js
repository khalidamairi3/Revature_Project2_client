import React from 'react';
import axios from 'axios';

function AppointmentInfo({ appointment }) {
  // const id = appointment.id;
  // console.log(appointment)
  
  // const onDelete = () => {
  //   // axios.get(`http://localhost:8080/appointment/doctor/1`, {headers: {"Authorization": `Bearer`} })
  //   // .then(res => console.log(res))
  //   console.log("hello!!!!")
  // }

  function onDelete() {
    console.log("clicked!")
  }

  return (
    <tr className="appointment-info">
        <td>{appointment.date}</td>
        <td>{appointment.time}</td>
        <td>Dr. {appointment.doctor.firstName} {appointment.doctor.lastName}</td>
        <td>{appointment.status}</td>
        <td>
            <button className="edit-btn" onClick={onDelete}>Edit</button>
            <button className="edit-btn" onClick={onDelete}><i className="fa-solid fa-trash-can"></i></button>
        </td>
    </tr>
  )
}

export default AppointmentInfo