import React, { useEffect, useState } from 'react';
import Featured from '../Featured/Featured';
import './Feature2.css';

const Featured2 = () => {
  //******************Data fetch and use ******************** 
  const [courses, setcourses] = useState([])
  useEffect(() => {
    fetch("./course.json")
      .then(res => res.json())
      .then(data => setcourses(data))
  }, [])

  return (
    <div>
      <h1 className="text-center my-3"> Feature Courses</h1>
      <div className="featured-course-container container">
        {
          courses.slice(0, 4).map(course => <Featured
            course={course}
            key={course.id}
          ></Featured>)
        }
      </div>
    </div>
  );
};

export default Featured2;