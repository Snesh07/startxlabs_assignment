import React from 'react';
import '../styles/Footer.css';
import { Link } from "react-router-dom";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='footer_container'>

            {/* ---------footer contact Us ------------ */}

                <div className='footer_left'>
                    <div className='footer_shopping'>
                        <h3 className='footer_shopping_title'>Shopping</h3>
                        <Link to="/" className="footer_shopping_link">My Account</Link>
                        <Link to="/" className="footer_shopping_link">Shipping</Link>
                        <Link to="/" className="footer_shopping_link">Orders</Link>
                        <Link to="/" className="footer_shopping_link">Terms & Conditions</Link>
                    </div>

                    <div className='footer_quickLinks'>
                        <h3 className='footer_quickLinks_title'>Quick Links</h3>
                        <Link to="/" className="footer_quickLinks_link">About Us</Link>
                        <Link to="/" className="footer_quickLinks_link">Deal of the day</Link>
                        <Link to="/" className="footer_quickLinks_link">Privacy & Policy</Link>
                        <Link to="/" className="footer_quickLinks_link">Contact Us</Link>

                    </div>

                    <div className='footer_onlineShopping'>
                        <h3 className='footer_onlineShopping_title'>Online Shopping</h3>
                        <Link to="/" className="footer_onlineShopping_link">Men</Link>
                        <Link to="/" className="footer_onlineShopping_link">Women</Link>
                        <Link to="/" className="footer_onlineShopping_link">Kids</Link>
                        <Link to="/" className="footer_onlineShopping_link">Footwear</Link>
                        <Link to="/" className="footer_onlineShopping_link">Jewellery</Link>
                        <Link to="/" className="footer_onlineShopping_link">Traditional</Link>
                    </div>
                </div>


             {/* ---------footer contact Us ------------ */}

                <div className='footer_contactUs'>
                    <h3 className='footer_contactUs_title'>Contact Us</h3>
                    <div className="footer_contact_info">
                        <span><FiPhoneCall className='footer_icon_bg' /></span>
                        <a href="tel:202-555-0819"> 202-555-0819 </a>
                    </div>
                    <div className="footer_contact_info">
                        <span><FiMail className='footer_icon_bg' /></span>
                        <a href="mailto:noahjones23@gmail.com">noahjones23@gmail.com</a>
                    </div>
                    
                    <div className="footer_socialmedia_icons">
                        <a href="/"><FaFacebookF className='footer_icon_bg' /></a>
                        <a href="/"><FaInstagram className='footer_icon_bg' /></a>
                        <a href="/"><FaTwitter className='footer_icon_bg' /></a>
                        <a href="/"><FaLinkedinIn className='footer_icon_bg' /></a>
                        <a href="/"><FaYoutube className='footer_icon_bg' /></a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer