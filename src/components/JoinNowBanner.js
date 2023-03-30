import React from 'react'
import '../styles/JoinNowBanner.css';

function JoinNowBanner() {
    return (
        <>
            <div className='JoinNowBanner_container'>
                <div className='JoinNowBanner_bg'>
                    <div className='JoinNowBanner_text_btn'>
                        <p>Become a Reseller</p>
                        <h1>Start your Online Business
                            <br />with Zero Investment</h1>
                        <button className='JoinNowBanner_btn'>Shop Now</button>
                    </div>
                    <div className='JoinNowBanner_image'>
                        <img src='./images/image_165.png' alt="JoinNowBanner" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinNowBanner