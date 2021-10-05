import React, { useEffect, useState } from 'react';
import Featured from '../Featured/Featured';

const Featured2 = () => {
  const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])


  return (
    <div>
      <h1 className="text-center"> Total Courses:{courses.length}</h1>
           <div className="course-container">
           {
                courses.slice(0,4).map(course => <Featured
                    course={course}
                    key={course.id}

                   ></Featured> )
            }
           </div>


      
    </div>
  );
};

export default Featured2;