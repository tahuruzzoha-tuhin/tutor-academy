import React, { useEffect, useState } from 'react'
import '../assets/css/allsubjects.css';
import CourseCard from './CourseCard';
import { Row } from 'react-bootstrap';


export default function InAllSubjects() {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/tahuruzzoha-tuhin/db/main/datadb.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className='maininde'>
            <div className="upper_cover">
                <h1>Subjects</h1>
            </div>

            <Row xs={1} md={3} className="g-4 m-3 ">
                {
                    courses.map(course => <div className="subject_area">
                        <CourseCard
                            key={course.key}
                            course={course}></CourseCard>
                    </div>
                    )
                }
            </Row>


        </div>
    )
}
