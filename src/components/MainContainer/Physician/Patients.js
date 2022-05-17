import React from 'react';
import './Patients.css';

function Patients({ userData, token }) {
  return (
    <div className="div-container">
          <h1>Patient Registry</h1>
          <div className="search-bar">
          <input
            className="search"
            type="text"
            autoComplete="off"
            id="search"
            placeholder="  search..."
            // value={search}
            // onChange={(e) => onSearchChange(e.target.value)}
          /> 
            {/* <span className="search-icon"> <i className="fas fa-search"></i></span> */}
            </div>
          <div className="patients-div">
                <table className="patients-table">
                    <tbody>
                        <tr>
                            <th className="patients-header">Patient ID</th>
                            <th className="patients-header">Username</th>
                            <th className="patients-header">First Name</th>
                            <th className="patients-header">Last Name</th>
                            <th className="patients-header">DOB</th>    
                            <th className="patients-header">Phone Number</th>
                        </tr>
                        <tr className="patient-info">
                          <td>1</td>
                          <td>hedwig</td>
                          <td>Harry</td>
                          <td>Potter</td>
                          <td>1980/07/31</td>
                          <td>123-123-1223</td>
                        </tr>
                        <tr className="patient-info">
                          <td>2</td>
                          <td>scabbers</td>
                          <td>Ron</td>
                          <td>Weasley</td>
                          <td>1980/03/01</td>
                          <td>234-234-2325</td>
                        </tr>
                        <tr className="patient-info">
                          <td>3</td>
                          <td>crookshanks</td>
                          <td>Hermione</td>
                          <td>Granger</td>
                          <td>1979/09/19</td>
                          <td>346-234-8624</td>
                        </tr>
                        <tr className="patient-info">
                          <td>4</td>
                          <td>squibbler</td>
                          <td>Luna</td>
                          <td>Lovegood</td>
                          <td>1956/11/28</td>
                          <td>574-423-8742</td>
                        </tr>
                        <tr className="patient-info">
                          <td>5</td>
                          <td>slytherin</td>
                          <td>Draco</td>
                          <td>Malfoy</td>
                          <td>1934/04/02</td>
                          <td>460-432-8324</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Patients