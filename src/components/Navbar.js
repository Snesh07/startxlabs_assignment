import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
            <div className='navbar_container'>
                <img src='./images/logo.png' alt="logo" onClick={"/"}></img>
                <div className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/">Men</Link>
                    <Link to="/">Women</Link>
                    <Link to="/">Kids</Link>
                    <Link to="/">Footwear</Link>
                    <Link to="/">Jewellery</Link>
                    <Link to="/">Traditional</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar