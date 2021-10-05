import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const { name, price, duration, modeltest, img } = props.course;
    return (
        <div className="course-part">
                <div className="course-images">
                    <img src={img} alt="" />
                </div>
                <div className="course-information">
                    <h4>Course Title:{name}</h4>
                    <p>Duration: <small className="text-info"> {duration} Days</small></p>
                    <h5>Price:{price}৳</h5>
                    <p> Total Model Test: {modeltest}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
       



        
    );
};

export default Courses;