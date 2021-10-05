import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';
import '../assets/css/mediaFiles/footermedia.css'

export default function Footer() {

    return (
        <div className="footer_main">
            <div className="footer_mid">
                <div className="footer_column">
                    <div className="lg">
                        <h1>Tutor <span>Academy</span></h1>
                        <hr />
                        <h3>We Equip Smartness</h3>
                    </div>
                    <div className="ab">
                        <p>Tutor Academy partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
                    </div>
                </div>
                <div className="footer_column">
                    <h2>Location</h2>

                    <p>Andorkilla, Bandarban, Chittagong</p>

                    <ul className="scial">
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </ul>
                </div>
                <div className="footer_column">
                    <h2>Explore</h2>
                    <ul className='links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>

                        <li>
                            <Link to='/allsubjects'>Courses</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="small_footer">
                <h3>Copyright © Tutor Academy 2021</h3>
            </div>
        </div>
    )
}
