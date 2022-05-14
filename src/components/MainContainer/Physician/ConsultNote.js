import React from 'react';
import './ConsultNote.css';

function ConsultNote({closeModal}) {
  return (
    <div>
        <span className="note-close-btn" onClick={closeModal}>&times;</span>
        <h1>Consultation Note</h1>
        <p className="note-p"> 42 yo M with no significant PMHx presents with 3 day h/o of cough and fever. 
            Pt admits to loss of taste since yesterday, 
            but denies shortness of breath or difficulty breathing. 
            Temperature yesterday showed low grade fever at 99.6F and 100.3F this morning.
            Pt was advised bed rest, and to self quarantine. 
            He has been educated about COVID-19 and advised to seek immediate medical attention
            if he develops SOB. 
            PO tylenol PRN. 
        </p>
        <form action="/form/submit" method="POST">
            <textarea class="consult-textarea" placeholder="Type your comment here."></textarea>
            <br/>
            <button className="consult-save-btn" type="submit">Save</button>
        </form>
                
    </div>
  )
}

export default ConsultNote;