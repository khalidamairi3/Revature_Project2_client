import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentSubmitted.css';

function AppSubmitted() {
  const navigate = useNavigate();

  return (
    <div className="div-container">
      <div className="submitted-cont">
        <p>Thank you, your appointment has been scheduled.</p>
      </div>
      

    </div>

  )
}

export default AppSubmitted