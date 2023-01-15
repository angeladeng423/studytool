import React from "react"
import { Link } from "react-router-dom"

function Header(){
    return (
        <header className = "header">
            <nav><Link to="/" className = "Link-One">home</Link>
            <Link to="/studypage" className = "Link-One">studypage</Link></nav>
        </header>
    )
}

export default Header;