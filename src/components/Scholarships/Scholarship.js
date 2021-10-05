import React, { useEffect, useState } from 'react';
import './Scholarship.css';

const Scholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const url = "fakedata.JSON";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setScholarships(data)
      )
  }, [])

  return (
    <div>
      <h2 className="bg-secondary mt-5">Choice one that could fit with you</h2>
     <div className="container">

     <div className="card-container">
        {
          scholarships.map(scholarship =>
            <div className="sc-container">

              <div className="sc-image">
                <img src={scholarship.img} alt="" />
              </div>
              <h3>Name:{scholarship.name} </h3>
              <h5> Scholarship Type:{scholarship.type} </h5>
              <h5>World Rank:{scholarship.rank} </h5>
              <h5>Subjects:{scholarship.subjects} </h5>
              <p> Location: {scholarship.location} </p>

            </div>)
        };
      </div>



     </div>
    </div>
  );
};
export default Scholarship;