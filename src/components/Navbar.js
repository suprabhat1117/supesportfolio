import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {

    /*toggle class on ham-menu click and slide menu*/
    const toggleAnimateHamMenu = event =>{
        event.currentTarget.classList.toggle("is-active")
        event.currentTarget.nextElementSibling.classList.toggle('active')
    }
    
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a href="/supesportfolio" id="navbar__logo">弓UPES<sup className="beta">BETA</sup></a>
                <div className="navbar__toggle" id="mobile-menu" onClick={toggleAnimateHamMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="#home" className="navbar__links home" data-name="home">Home</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#contact__us" className="navbar__links contact__us" data-name="contact__us">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



