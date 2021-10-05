import React from 'react';
import ab1 from '../img/ab1.png';
import ab2 from '../img/ab2.png';
import '../assets/css/about.css';


export default function About() {


    return (
        <div className="main_style">
            <div className="upper_cover">
                <h1>About Us</h1>
                <hr style={{
                    margin: '0% 20% 0% 20%',
                }} />
            </div>
            <div className="body_sec">
                <div className="ab_column">
                    <h1>Who We Are?</h1>
                    <p>Tutor Academy comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience, so you better believe it’s gonna be amazing!This LMS comes with a revolutionary drag & drop system to create resourceful courses. It’s feature-rich, yet easy to use. Our design is centered around enhancing your experience, so you better believe it’s gonna be amazing!</p>
                </div>
                <div className="ab_column">
                    <img src={ab1} alt="" />
                </div>
            </div>
            <div className="body_sec">
                <div className="ab_column">
                    <img src={ab2} alt="" />
                </div>
                <div className="ab_column">
                    <h1>What We Do?</h1>
                    <p>Monetization is a breeze with Tutor Academy. Sell them for a fair price, or give away for free! We’ve
                        teamed up with big names like WooCommerce, Easy Digital Downloads, Restrict Content Pro,
                        and Paid Membership Pro to bring a seamless eCommerce experience. Monetization is a breeze with this LMS. Sell them for a fair price, or give away for free! We’ve
                        teamed up with big names like WooCommerce, Easy Digital Downloads, Restrict Content Pro,
                        and Paid Membership Pro to bring a seamless eCommerce experience</p>
                </div>
            </div>
            <div className="inde_counter">
                <div className="main_inde_counter">
                    <h1>Teachers open the door, but you must enter by yourself</h1>
                    <div className="wr">
                        <div className="counter_colu">
                            <h2>Students</h2>
                            <h3>{500}+</h3>
                        </div>
                        <div className="counter_colu">
                            <h2>Subjects</h2>
                            <h3>{87}+</h3>
                        </div>
                        <div className="counter_colu">
                            <h2>Instructors</h2>
                            <h3>{30}+</h3>
                        </div>
                        <div className="counter_colu">
                            <h2>Courses</h2>
                            <h3>{320}+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
