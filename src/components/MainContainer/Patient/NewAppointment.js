import React, { useState } from 'react';
import axios from 'axios';
import './NewAppointment.css';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format, set } from 'date-fns';

function NewAppointment({ token, onAddAppointment }) {
    const [physician, setPhysician] = useState("");
    const [patient, setPatient] = useState("");
    const [time, setTime] = useState("");
    const [selected, setSelected] = useState();
    const [seeCalendar, setSeeCalendar] = useState(false);

    let day = "";
    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PPP')}.</p>;
      day = format(selected, 'PPP');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            "drLastName": physician,
            "ptLastName": patient,
            "date": day,
            "time": time
          }
      
          axios({
            method: 'post',
            url: 'appointment/request',
            data: formData,
            headers: {"Authorization": `Bearer ${token}` }
            })
            // .then(r => r.json())
            // .then(newAppointment => onAddAppointment(newAppointment))
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
    }
    

    const handleCalendar = () => {
        setSeeCalendar(!seeCalendar);
    }
    const closeCalendar = () => {
        setSeeCalendar(false);
    }

  return (
    <div>
        <div className="new-app-form">
            <form onSubmit={handleSubmit}>
                <span className="new-app-span">
                    <label>Patient Name:</label>
                    <span className="input-span">
                        <input 
                            className="new-app-input"
                            placeholder="Patient Last Name"
                            type="text"
                            name="name"
                            value={patient}
                            onChange={e => setPatient(e.target.value)}
                            required
                        />
                    </span>
                </span>
                <span className="new-app-span">
                    <label>Physician Name:</label>
                    <span className="input-span">
                        <input 
                            className="new-app-input"
                            placeholder="Physician Last Name"
                            type="text"
                            name="name"
                            value={physician}
                            onChange={e =>  setPhysician(e.target.value)}
                            required
                        />
                    </span>
                </span>
                <span className="new-app-span">
                    <label>Date:</label>
                    <span className="input-span">
                        <div class="input-wrapper">
                            <input 
                                type="text" 
                                className="new-app-input"
                                name="name"
                                placeholder="YYYY-MM-DD"
                                value={day}
                                onChange={day}
                                onClick={handleCalendar}
                                required
                            />
                            
                            { seeCalendar ? 
                                <div className="calendar" >
                                    <span className="calendar-close-btn" onClick={closeCalendar}>&times;</span>
                                    <DayPicker
                                        mode="single"
                                        required
                                        selected={selected}
                                        onSelect={setSelected}
                                        footer={footer}
                                    /> 
                                </div>
                            : null
                            }
                        </div>
                    </span>
                </span>
            
                <span className="new-app-span">
                    <label>Time:</label>
                    <TimePicker
                        placeholder="Select Time"
                        use12Hours
                        showSecond={false}
                        focusOnOpen={true}
                        format="hh:mm A"
                        onChange={e => setTime(e.format('LT'))}
                    />
                </span>

                <button className="new-app-submit-btn" onClick={handleSubmit} type="submit">Submit</button>
            </form>
          </div>
    </div>
  )
}

export default NewAppointment