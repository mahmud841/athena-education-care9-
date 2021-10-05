import React from 'react';
import './Featured.css';


const Featured = (props) => {
  /* const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
  return (
    <>
       <h1 className="text-center"> Total Courses:{courses.length}</h1>
           <div className="course-container">
           
          
           </div> */
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

export default Featured;