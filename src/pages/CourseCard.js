import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import '../assets/css/allsubjects.css';



const CourseCard = (props) => {

    const styles = {
        margin: '10%',
        paddingBottom: '10%',
    }
    const { name, price, author, image, enrolled } = props.course;
    return (
        <Col className="h-auto rounded-3">
            <Card className="my-card" style={styles}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-success text-bold" style={{ fontSize: '20px' }}>{name}</Card.Title>

                    <div className="subject_body">

                        <p>Teacher: <i className="text-bold">{author}</i></p>
                        <p>Price: <span style={{ color: 'goldenrod', fontWeight: '600' }}>{price}$</span></p>
                        <div className="row_sim">
                            <h5 className="text-primary"><i className="far fa-user"></i> {enrolled}+ Students</h5>
                        </div>
                        <Button style={{ float: 'right', backgroundColor: 'green' }}> Enroll</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default CourseCard;