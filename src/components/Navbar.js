import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
            <div className='navbar_container'>
                <img src='./images/logo.png' alt="logo" className='navbar_logo'></img>
                <div className="nav_links">
                    <Link to="/" className="nav_link">Home</Link>
                    <Link to="/" className="nav_link">Men</Link>
                    <Link to="/" className="nav_link">Women</Link>
                    <Link to="/" className="nav_link">Kids</Link>
                    <Link to="/" className="nav_link">Footwear</Link>
                    <Link to="/" className="nav_link">Jewellery</Link>
                    <Link to="/" className="nav_link">Traditional</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar