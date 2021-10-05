import React from 'react';
import './Featured.css';


const Featured = (props) => {
  const { name, price, duration, modeltest, img } = props.course;
  return (
    <div className="featured-course-part card h-100">
      <div className="featured-course-images">
        <img className="img-fluid card-img-top" src={img} alt="" />
      </div>
      <div className="course-information card-body">
        <h4>Course Title:{name}</h4>
        <p>Duration: <small className="text-info"> {duration} Days</small></p>
        <h5>Price:{price}৳</h5>
        <p> Total Model Test: {modeltest}</p>
      </div>
      <div className="card-footer">
        <button className="view-button">Add to Cart</button>
      </div>
    </div>

  );
};

export default Featured;