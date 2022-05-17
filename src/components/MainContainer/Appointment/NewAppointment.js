import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NewAppointment.css';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import { DayPicker } from 'react-day-picker'; 
import 'react-day-picker/dist/style.css';
import { format, set } from 'date-fns';

function NewAppointment({ token }) {
    const [physician, setPhysician] = useState("");
    const [patient, setPatient] = useState("");
    const [ptFirstName, setPtFirstName] = useState("")
    const [time, setTime] = useState("");
    const [selected, setSelected] = useState();
    const [seeCalendar, setSeeCalendar] = useState(false);

    const navigate = useNavigate();

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
          .then(function (response) {
            console.log(response);
            navigate('/appointment-scheduled');
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
                    <label>Patient:</label>
                    <span className="input-span">
                        <input 
                            className="new-app-input"
                            placeholder="First Name"
                            type="text"
                            name="name"
                            value={ptFirstName}
                            onChange={e => setPtFirstName(e.target.value)}
                            required
                        />
                    </span>
                    <span className="input-span">
                        <input 
                            className="new-app-input"
                            placeholder="Last Name"
                            type="text"
                            name="name"
                            value={patient}
                            onChange={e => setPatient(e.target.value)}
                            required
                        />
                    </span>
                    <span className="input-span">
                        <input 
                            className="new-app-input"
                            placeholder="DOB (MM-DD-YYYY)"
                            type="text"
                            name="name"
                            required
                        />
                    </span>
                <span className="new-app-span">
                    <label>Dr.</label>
                    <span className="input-span">
                        {/* <select 
                            className="new-app-selector" 
                            name="name" 
                            value={physician} 
                            onChange={e =>  setPhysician(e.target.value)}
                            required
                        >
                            <option value="dumbledore">Dumbledore</option>
                            <option value="hagrid">Hagrid</option>
                            <option value="flitwick">Flitwick</option>
                            <option value="lupin">Lupin</option>
                            <option value="mcgonagall">McGonagall</option>
                            <option value="slughorn">Slughorn</option>
                            <option value="snape">Snape</option>
                            <option value="sprout">Sprout</option>
                            <option value="trelawney">Trelawney</option>
                        </select> */}
                        <input 
                            className="new-app-input"
                            placeholder="Last Name"
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
                                placeholder="MM-DD-YYYY"
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
                </span>
                <button className="new-app-submit-btn" onClick={handleSubmit} type="submit">Submit</button>
            </form>
          </div>
    </div>
  )
}

export default NewAppointment