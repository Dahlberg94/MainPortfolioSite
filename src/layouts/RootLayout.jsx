import React from "react"
import { Outlet, NavLink, Link } from "react-router-dom"
import logo from "../Assets/Marcus-Lila.png"
import "../index.css"

const RootLayout = () => {
    return (
    <div className="Root-Layout">
        <header>
            <nav className="navbar">
                <img src={logo} alt="" className="logo" />
                <div className="nav-links">
                    <NavLink className="nav-link" to="/">Hem</NavLink>
                    <NavLink className="nav-link" to="about">Om mig</NavLink>
                    <NavLink className="nav-link" to="Help">Kontakta</NavLink>
                    <NavLink className="nav-link" to="Portfolio">Portfolio</NavLink>
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
    )
}

export default RootLayout