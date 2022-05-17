import React from 'react'

function PhysicianInfo({ physician }) {
  return (
    <tr className="patient-info">
        <td>{physician.firstName}</td>
        <td>{physician.lastName}</td>
        <td>{physician.specialization}</td>
    </tr>
  )
}

export default PhysicianInfo