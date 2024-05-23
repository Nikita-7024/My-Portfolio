import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className ="desktopMenu">
                <Link className="desktopMenuListItem"> Home </Link>
                <Link className="desktopMenuListItem"> About </Link>
                <Link className="desktopMenuListItem"> Projects </Link>
                <Link className="desktopMenuListItem"> Skills </Link>

            </div>
            <button className="desktopMenuButton">
                <img src= {contactImg} alt="contactImg" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar;