import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';

import cov from '../img/cov.jpg';
import instructor from '../img/svg/instructor.svg';
import learning from '../img/svg/learning.svg';
import support from '../img/svg/support.svg';
import pencil from '../img/svg/pencil.svg';
import video from '../img/svg/video.svg';
import contract from '../img/svg/contract.svg';
import get from '../img/get.jpg';
import '../assets/css/home.css';
import '../assets/css/mediaFiles/homemedia.css';
import { Link } from "react-router-dom";
import CourseCard from './CourseCard';



export default function Home() {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/tahuruzzoha-tuhin/db/main/homedb.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className=' main_style'>
            <div className="uppercover">
                <div className="cov_text">
                    <h1>Tutor<h2 className="d-inline" style={{ color: 'orange', fontSize: '37px' }}> Academy</h2> For Learning</h1>
                    <p>Education is the most powerful weapon which you can use to change the world</p>
                    <Link to='/home'><button>Login</button></Link>
                </div>
                <div className="cov_img">
                    <img src={cov} alt="" />
                </div>
            </div>
            <div className="cards_section">
                <div className="cards_indi">
                    <div className="card_ic">
                        <img src={instructor} alt="" />
                    </div>
                    <h3>Expert Instructors</h3>
                    <p>Meet Best Instructors Around the Island and Enroll for Best Lessons of them. </p>
                </div>
                <div className="cards_indi">
                    <div className="card_ic">
                        <img src={support} alt="" />
                    </div>
                    <h3>Customer Support</h3>
                    <p>24/7 Reliable and Efficient Customer Support. Contact us for any Technical Issue you Faced </p>
                </div>
                <div className="cards_indi">
                    <div className="card_ic">
                        <img src={learning} alt="learning" />
                    </div>
                    <h3>Remote Learning</h3>
                    <p>Stay Safe at Home Learn Whatever You Want. Select, Enroll and It's Good to Go.</p>
                </div>
            </div>
            <div className="popular_subjects">
                <div className="main_container_co">
                    <div className="row_he">
                        <h1>Popular Courses</h1>
                        <Link to={'/allsubjects'}><button>Browse More</button></Link>
                    </div>

                    <hr />
                </div>

            </div>
            <Row xs={1} md={3} className="g-4 mx-3 mb-3">
                {
                    courses.map(course => <div className="subject_area">
                        <CourseCard
                            key={course.key}
                            course={course}></CourseCard>
                    </div>)
                }
            </Row>
            <div className="mid_free">
                <h3>Start today for getting Improve <span>Your knowledge</span></h3>
                <h1>You can be your own guiding star with our help!</h1>
                <button>Get Started</button>
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
            <div className="get_start_sec">
                <div className="main_get_start">
                    <div className="get_start_column">
                        <h1>Get Started With Tutor Academy</h1>
                        <div className="get_row">
                            <div className="row_columno">
                                <img src={pencil} alt="pencil" />
                            </div>
                            <div className="row_columnt">
                                <h3>Sign up in Website</h3>
                                <p> Register with your Email, Give a Username and a Password and Enjoy the Experience! </p>
                            </div>
                        </div>
                        <div className="get_row">
                            <div className="row_columno">
                                <img src={contract} alt="contract" />
                            </div>
                            <div className="row_columnt">
                                <h3>Enroll your courses</h3>
                                <p> Choose a Subject Explore Courses inside the Find the Key then Enroll to Courses. </p>
                            </div>
                        </div>
                        <div className="get_row">
                            <div className="row_columno">
                                <img src={video} alt="video" />
                            </div>
                            <div className="row_columnt">
                                <h3>Start from now</h3>
                                <p>Why are you waiting to Register Right Now and Start your Journey with Us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="get_start_column">
                        <img src={get} alt="get" />
                    </div>
                </div>
            </div>
        </div>
    )
}
