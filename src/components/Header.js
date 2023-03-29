import React from 'react'
import '../styles/Header.css'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const header = () => {
    return (
        <>
            <div className='header_container'>
                <div className='header_centerline'>
                    <img src='./images/image_149.png' alt='cart-icon' />
                    <p>FREE SHIPPING OVER $150</p>
                </div>
                <div className='header_right-items'>
                    <a href="/"><p> About Us </p></a>
                    <p> | </p>
                    <a href="/"><p> Blog </p></a>
                    <div className='header_icons'>
                        <FaFacebookF className='header_icon_bg'/>
                        <FaInstagram className='header_icon_bg'/>
                        <FaTwitter className='header_icon_bg'/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default header