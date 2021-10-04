import React from 'react';
import child from '../img/child.png';
// import '../assets/css/home.css';
import { Card, Col, Button } from 'react-bootstrap';
import '../assets/css/allsubjects.css';



const CourseCard = (props) => {
    console.log(props.course);
    const { name, price, author, image, enrolled } = props.course;
    return (
        <Col className="h-auto rounded-3">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <div className="subject_body">
                        <h2>{name}</h2>
                        <p>Teacher: {author}</p>
                        <p>Price: {price}$</p>
                        <div className="row_sim">
                            <h3><i className="far fa-user"></i>{enrolled}+ Students</h3>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default CourseCard;