import React, { useEffect, useState } from 'react';
import './Scholarship.css';

const Scholarship = () => {
  //**************************Data fetch and Use*************** 
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
      <h2 className=" heading mt-5">Choice one that could fit with you</h2>
      {/*********************Cart Container****************/}
      <div className="container">
        <div className="card-container">
          {
            scholarships.map(scholarship => <div className="sc-container card h-100">
              <div className="sc-image">
                <img className="img-fluid card-img-top" src={scholarship.img} alt="" />
              </div>
              <div className="card-body">
                <h3>Name:{scholarship.name} </h3>
                <h5>Scholarship Type:{scholarship.type} </h5>
                <h5>World Rank:{scholarship.rank} </h5>
                <p>Subjects:{scholarship.subjects} </p>
                <h5> Location: {scholarship.location} </h5>
                <div>
                  <button className="view-button">View Details </button>
                </div>
              </div>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};
export default Scholarship;