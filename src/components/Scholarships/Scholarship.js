import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Scholarship.css';

const Scholarship = () => {
  const [scholarships, setScholarships] = useState([])
  useEffect(() => {
    fetch('fakedata.JSON')
      .then(res => res.json())
      .then(data => setScholarships(data)
      )
  }, [])

  return (
    <div>
      <h2 className="bg-secondary mt-5">Choice one that could fit with you</h2>
      <div className="card-container">
        {
          scholarships.map(scholarship => <div>

            <Card className="card-body">
              <div className="img-container">
              <Card.Img variant="top holder.js/100px160" src={scholarship.img} />
              </div>
              <Card.Body className="card-container">
                <Card.Title>Name:{scholarship.name} </Card.Title>
                <h3>Type:{scholarship.type} </h3>
                <h3>Rank: {scholarship.rank} </h3>
                <h5>Subjects:{scholarship.subjects}  </h5>
                <h5>Location:{scholarship.location} </h5>
              </Card.Body>
              <Card.Footer>
                <p className="view-button">View Details</p>
              </Card.Footer>
            </Card>
          </div>)
        };
      </div>
    </div>
  );
};
export default Scholarship;