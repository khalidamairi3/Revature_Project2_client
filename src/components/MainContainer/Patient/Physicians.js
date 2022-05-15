import React from 'react'

function Physicians() {
  return (
    <div className="div-container">
        <h1>Physician Registry</h1>
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
            <span className="search-icon"> <i className="fas fa-search"></i></span>
        </div>
        <div className="patients-div">
            <table className="patients-table">
                <tbody>
                    <tr>
                        <th className="patients-header">First Name</th>
                        <th className="patients-header">Last Name</th>
                        <th className="patients-header">Specialty</th>    
                    </tr>
                    <tr className="patient-info">
                        <td>Albus</td>
                        <td>Dumbledore</td>
                        <td>Family Medicine</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Severus</td>
                        <td>Snape</td>
                        <td>Hematology/Oncology</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Minerva</td>
                        <td>McGonagall</td>
                        <td>Cardiology</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Filius</td>
                        <td>Flitwick</td>
                        <td>Pulmonology</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Remus</td>
                        <td>Lupin</td>
                        <td>Internal Medicine</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Sybil</td>
                        <td>Trelawney</td>
                        <td>Psychiatry</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Pamona</td>
                        <td>Sprout</td>
                        <td>Family Medicine</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Hoarce</td>
                        <td>Slughorn</td>
                        <td>Rheumatology</td>
                    </tr>
                    <tr className="patient-info">
                        <td>Alaster</td>
                        <td>Moody</td>
                        <td>Dermatology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Physicians;