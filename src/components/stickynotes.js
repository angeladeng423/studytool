import React, {useState, useEffect} from 'react';
import Notes from "../components2/notes"
import "../components/stickynotes.css"

function Stickynotes(){
    return(
        <div>
            <div className = "notes-list">
                <Notes/>
                <Notes/>
                <Notes/>
            </div>
        </div>
    )
}

export default Stickynotes;