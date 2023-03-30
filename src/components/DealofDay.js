import React from 'react';
import '../styles/DealofDay.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


// function truncate(string, n) {
//     return string?.length > n ? string.substr(0, n - 1) + '...' : string;
// }

function DealofDay() {
    return (
        <>
            <div className='dealsOfDay_container'>
                <div>
                    <div className='dealsOfDay_heading'>
                        <h1 className='dealsOfDay_heading_line'>Deals of the day</h1>
                        <p>Top Month Sellers</p>
                    </div>
                </div>

                <div className='dealsOfDay_btn'>
                    <div><BsChevronLeft className='slider_btn left' /></div>
                    <div><BsChevronRight className='slider_btn right' /></div>
                    <button className='viewAll_btn'>View all</button>
                </div>

                <div className='dealsOfDay_image_slider'>

                    <div className='dealsOfDay_image_area'>
                        <img className='dealsOfDay_image_slider_img' src='./images/Rectangle_1751.png' alt="banner" />
                        <h3>U.S. Polo Assn</h3>
                        <p>Men Clarkin Sneakers
                        </p>
                        <h4><b>C$742 </b> $̶1̶6̶4̶9̶ (45% OFF)</h4>
                    </div>

                    <div className='dealsOfDay_image_area'>
                        <img className='dealsOfDay_image_slider_img' src='./images/Rectangle_1752.png' alt="banner" />
                        <h3>Levis</h3>
                        <p>Men Black Solid Hooded..</p>
                        <h4><b>C$542 </b> $̶8̶4̶9̶ (35% OFF)</h4>
                    </div>

                    <div className='dealsOfDay_image_area'>
                        <img className='dealsOfDay_image_slider_img' src='./images/Rectangle_1753.png' alt="banner" />
                        <h3>Zaveri Pearls</h3>
                        <p>Gold-Plated & Peach-Coloured..</p>
                        <h4><b>C$852  </b> $̶1̶8̶4̶9̶ (45% OFF)</h4>
                    </div>

                    <div className='dealsOfDay_image_area'>
                        <img className='dealsOfDay_image_slider_img' src='./images/Rectangle_1754.png' alt="banner" />
                        <h3>Biba-Suits</h3>
                        <p>Women Blue Printed Panelled..</p>
                        <h4><b>C$242 </b>$̶5̶0̶0̶ (25% OFF)</h4>
                    </div>

                    <div className='dealsOfDay_image_area'>
                        <img className='dealsOfDay_image_slider_img' src='./images/Rectangle_1755.png' alt="banner" />
                        <h3>IndiaBoulevard</h3>
                        <p>Dark Brown & gold Designer..</p>
                        <h4><b>C$742 </b> $̶1̶6̶4̶9̶ (45% OFF)</h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DealofDay