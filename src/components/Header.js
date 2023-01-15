import React from "react"
import { Link } from "react-router-dom"
import Logo from "../images/logo.png"

function Header(){
    return (
        <header className = "header">
            <nav>
                <img className = "logo" src = {Logo}></img>
                <Link to="/" className = "Link-One">home</Link>
                <Link to="/studypage" className = "Link-Two">study </Link></nav>
        </header>
    )
}

export default Header;