import React, { useState, useEffect } from 'react';
import './ConsultNote.css';

function ConsultNote({ note, closeModal }) {
  const [newNote, setNewNote] = useState("");

  function handleSubmit(e) {
      e.preventDefault()
                     
      // fetch(`https://krunch-app.herokuapp.com/users/2`, {
      //     method: 'PATCH',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({bio: bio}),
      // })
      //   .then(response => response.json())
      //   .then(history.push(`/profile`));
  } 

  return (
    <div>
        <span className="note-close-btn" onClick={closeModal}>&times;</span>
        <h1>Consultation Note</h1>
        <p className="note-p">
          { note ? note : "No consult note has been submitted yet." }
        </p>
        <form onSubmit={handleSubmit}>
            <textarea 
              className="consult-textarea" 
              placeholder="Type your consult note here."
              value={newNote}
              onChange={e => setNewNote(e.target.value)} 
            ></textarea>
            <br/>
            <button className="consult-save-btn" type="submit">Save</button>
        </form>
    </div>
  )
}

export default ConsultNote;