import React from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import '../assets/css/allsubjects.css';



function MyVerticallyCenteredModal(props) {
    const { name, price, author, image, details } = props.course;
    console.log(details);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 style={{ color: '#a6449e' }}>{details}</h3>
                <p>
                    This course is for absolute beginners. If you wants to learn something new, please enroll this course by <strong className="text-success">Accepting</strong> this dialogue.
                </p>
                <hr />
                <strong>For enrolling this course you have to pay <span className="text-primary">{price}$</span></strong>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Accept</Button>
            </Modal.Footer>
        </Modal>
    );
}

const CourseCard = (props) => {


    const [modalShow, setModalShow] = React.useState(false);
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
                    <Card.Title className="text-primary text-bold" style={{ fontSize: '20px' }}>{name}</Card.Title>

                    <div className="subject_body">

                        <p>Teacher: <i className="text-bold">{author}</i></p>
                        <p>Price: <span style={{ color: 'goldenrod', fontWeight: '600' }}>{price}$</span></p>
                        <div className="row_sim">
                            <h5 className="text-secondary"><i className="far fa-user"></i> {enrolled}+ Students</h5>
                        </div>
                        <Button
                            onClick={() => setModalShow(true)}
                            style={{ float: 'right', backgroundColor: '#6018be', fontWeight: '500' }}
                        > Enroll</Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            course={props.course}
                        />
                    </div>
                </Card.Body>
            </Card>
        </Col >

    );
};

export default CourseCard;