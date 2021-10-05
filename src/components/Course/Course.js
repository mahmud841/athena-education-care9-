import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import './Course.css';

const Course = () => {
    const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])
    return (
        <div className="tag">
            <h1 className="text-center"> Total Courses:{courses.length}</h1>
           <div className="course-container">
           {
                courses.map(course => <Courses 
                    course={course}
                    key={course.id}
                    ></Courses>)
            }
           </div>
        </div>
    );
};
export default Course;