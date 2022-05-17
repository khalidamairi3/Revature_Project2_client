import React, { useState } from 'react';
import './ConsultNote.css';
import axios from 'axios';

function ConsultNote({ id, note, closeModal }) {
  const [newNote, setNewNote] = useState("");

  function handleSubmit(e) {
      e.preventDefault();

      const appNote = {
        "note": newNote
      }

      axios.put(`appointment/${id}/note`, appNote);
  } 

  return (
    <div>
        <span className="note-close-btn" onClick={closeModal}>&times;</span>
        <h1>Consultation Note</h1>

          { note ?
            <div>
            <p className="note-p">{note}</p>
            <form onSubmit={handleSubmit}>
                  <textarea 
                    className="consult-textarea" 
                    placeholder={note}
                    value={newNote}
                    onChange={e => setNewNote(e.target.value)} 
                  ></textarea>
                  <br/>
                  <button className="consult-save-btn" type="submit">Save</button>
              </form>
              </div>
            : 
            <div>
               <p className="note-p">Please submit your consultation note.</p>
               <form onSubmit={handleSubmit}>
                  <textarea 
                    className="consult-textarea" 
                    placeholder="Type your consult note here."
                    value={newNote}
                    onChange={e => setNewNote(e.target.value)} 
                  ></textarea>
                  <br/>
                  <button className="consult-save-btn" type="submit">Submit</button>
                </form>
            </div>
          }
       
    </div>
  )
}

export default ConsultNote;