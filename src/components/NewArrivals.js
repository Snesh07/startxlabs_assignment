import React from 'react'
import '../styles/NewArrivals.css'

function New_arrivals() {
    return (
        <>
            <div className='new_arrivals_component'>
                <div className='new_arrival_heading'>
                    <h1 className='arrivals_heading_line'>New Arrivals</h1>
                    <p>Top view in this week</p>
                </div>

           {/* Left side grid */}

                <div className='new_arrivals_containerbox'>
                    <div className='new_arrival_left'>
                        <img className='new_arrival_left_img' src='./images/image_155.png' alt="bags">
                        </img>
                        <div className='new_arrival_left_offer'>
                            <h2>20% <br /> OFF</h2>
                        </div>
                        <div className='new_arrival_left_itemName'>
                            <h3>Branded Hand Bags</h3>
                        </div>
                    </div>


                 {/* Right side grid */}

                    <div className='new_arrival_right'>
                        <div className='new_arrival_right_box'>
                            <img className='new_arrival_right_img' src='./images/image_156.png' alt="bags" />
                            
                            <div className='new_arrival_right_offer'>
                                <h3>20% <br /> OFF</h3>
                            </div>
                            <div className='new_arrival_right_itemName'>
                                <p>Branded Hand Bags</p>
                            </div>
                        </div>

                        <div className='new_arrival_right_box'>
                            <img className='new_arrival_right_img' src='./images/image_157.png' alt="bags" />
                            <div className='new_arrival_right_offer'>
                                <h3>20% <br /> OFF</h3>
                            </div>
                            <div className='new_arrival_right_itemName'>
                                <p>Branded Hand Bags</p>
                            </div>
                        </div>

                        <div className='new_arrival_right_box'>
                            <img className='new_arrival_right_img' src='./images/image_158.png' alt="bags" />
                            <div className='new_arrival_right_offer'>
                                <h3>20% <br /> OFF</h3>
                            </div>
                            <div className='new_arrival_right_itemName'>
                                <p>Branded Hand Bags</p>
                            </div>
                        </div>

                        <div className='new_arrival_right_box'>
                            <img className='new_arrival_right_img' src='./images/image_159.png' alt="bags" />
                            <div className='new_arrival_right_offer'>
                                <h3>20% <br /> OFF</h3>
                            </div>
                            <div className='new_arrival_right_itemName'>
                                <p>Branded Hand Bags</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default New_arrivals