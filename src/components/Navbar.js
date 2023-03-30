import React from 'react'
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import '../styles/Navbar.css';

function Navbar() {

    var navLinks = document.getElementById("navLinks");
    function showMenu() {
        navLinks.style.right = "0";
    }
    function hideMenu() {
        navLinks.style.right = "-200px";
    }

    return (
        <>
            <div className='navbar_container'>
                <img src='./images/logo.png' alt="logo" className='navbar_logo'></img>
                <div className="nav_links">
                    <IoMdClose className='nav_icons' onClick={hideMenu} />
                    <Link to="/" className="nav_link">Home</Link>
                    <Link to="/" className="nav_link">Men</Link>
                    <Link to="/" className="nav_link">Women</Link>
                    <Link to="/" className="nav_link">Kids</Link>
                    <Link to="/" className="nav_link">Footwear</Link>
                    <Link to="/" className="nav_link">Jewellery</Link>
                    <Link to="/" className="nav_link">Traditional</Link>
                    <BiMenuAltRight className='nav_icons' onClick={showMenu} />
                </div>
            </div>
        </>
    )
}

export default Navbar