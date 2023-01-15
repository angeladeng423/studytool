import React, { useState } from 'react'
import Header from "../components/Header"
import Pomodoro from '../components/pomodoro';
import Stickynotes from '../components/stickynotes';
import ListItems from '../components/tasklist';
import AudioPlayer from '../components/audio'
import "../components/pomodoro.css"
import "../components/audio.css"
import "../components2/notes.css"
import "../components/stickynotes.css"
import "../components/tasklist.css"
import Final from "../images/final.png"
import "./studypage.css"

function Studypage(){
    return(
        <div>
            <Header/>
            <div className = "sticky-note-container">
                <Stickynotes/>
            </div>
            <div className = "pomodoro-container">
                <Pomodoro/>
            </div>
            <div className = "todolist-container">
                <ListItems/>
            </div>
            <div className = "audio-container">
                <AudioPlayer/>
            </div>
            <div className = "dog-container">
                <img className = "dog" src = {Final}/>
            </div>
        </div>
    )
}

export default Studypage;