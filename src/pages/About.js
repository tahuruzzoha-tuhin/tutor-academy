import React from 'react';
import ab1 from '../img/ab1.png';
import ab2 from '../img/ab2.png';
import '../assets/css/about.css';


export default function About() {


    return (
        <div className="maininde">
            <div className="upper_cover">
                <h1>About Us</h1>
            </div>
            <div className="body_sec">
                <div className="ab_column">
                    <h1>Who We Are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facilis expedita quam, perferendis itaque nam? In labore rerum autem, eveniet ipsa, recusandae omnis, laudantium eius culpa aut illum sint deserunt.Illum amet, temporibus aspernatur esse similique eius! Voluptatem natus nihil voluptatibus voluptates deserunt autem similique rem. Excepturi libero, reprehenderit, ratione obcaecati, perferendis molestias in minima est amet eaque fugit eius?</p>
                </div>
                <div className="ab_column">
                    <img src={ab1} alt="image" />
                </div>
            </div>
            <div className="body_sec">
                <div className="ab_column">
                    <img src={ab2} alt="image" />
                </div>
                <div className="ab_column">
                    <h1>What We Do?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facilis expedita quam, perferendis itaque nam? In labore rerum autem, eveniet ipsa, recusandae omnis, laudantium eius culpa aut illum sint deserunt.Illum amet, temporibus aspernatur esse similique eius! Voluptatem natus nihil voluptatibus voluptates deserunt autem similique rem. Excepturi libero, reprehenderit, ratione obcaecati, perferendis molestias in minima est amet eaque fugit eius?</p>
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
