import React, {useState, useEffect} from 'react';
import Notes from "../components2/notes"
import "../components/stickynotes.css"

function Stickynotes(){
    return(
        <div>
            <ul className = "notes-list">
                <li><Notes/></li>
                <li><Notes/></li>
                <li><Notes/></li>
            </ul>
        </div>
    )
}

export default Stickynotes;