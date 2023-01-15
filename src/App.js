import React from 'react';
import Header from "./components/Header";
import { Link } from "react-router-dom"
import "./App.css";
import "./components/Header.css";
import Procreate1 from "./images/Procreate1.png"
import Group78 from "./images/Group78.png"

const App = () =>{
    return (
        <div className="App">
            <Header/>
            <div className = "main-image">
                <img src= {Procreate1}/>
            </div>
            <div className = "textbox">
                <h1 className = "title">about us</h1>
                <p1 className = "about">Bringing your favourite study spot to you,
                wherever you are. Organize your reminders, daily to-do lists all in one spot. Don’t forget to
                check out our pomodoro timer to boost your
                productivity. <Link to = "/studypage">Let's try!</Link></p1>
            </div>
            <div className = "secondText">
                <h2 className = "mapcaption"><b>find the closest study spot next to you.</b></h2>
                <img className = "map" src = {Group78}/>
            </div>
        </div>
    )
}

export default App