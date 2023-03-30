import React from 'react'
import '../styles/Banner.css';

function Banner() {
    return (
        <>
            <div className='banner_container'>
                <div className='banner_bg'>
                    <div className='banner_text_btn'>
                        <h1>New Fashion Collection</h1>
                        <p>Get exclusive offer with every purchase.</p>
                        <button className='banner_btn'>Shop Now</button>
                    </div>
                    <div className='banner_image'>
                        <img src='./images/image_153.png' alt="banner" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner