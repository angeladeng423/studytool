import React, { useState } from 'react'
import Header from "../components/Header"
import Pomodoro from '../components/pomodoro';
import Stickynotes from '../components/stickynotes';
import AudioPlayer from '../components/audio'
import "./studypage.css";
import "../components/pomodoro.css"
import "../components2/notes.css"
import "../components/stickynotes.css"

function Studypage(){
    return(
        <div>
            <Header/>
        </div>
    )
}

export default Studypage;