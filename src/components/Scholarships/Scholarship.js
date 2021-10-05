import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
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
      <div className="card-container">
        {
          scholarships.map(scholarship => <div> 

            <Row xs={1} md={2} className="g-4 ">
              <Col>
                <Card>
                  <Card.Img variant="top" src={scholarship.img} />
                  <Card.Body>
                    <Card.Title>University Name:{scholarship.name}  </Card.Title>
                    <Card.Text>
                    <h5> Scholarship Type:{scholarship.type} </h5>
                    <h5>World Rank:{scholarship.rank} </h5>
                    <h5>Subjects:{scholarship.Subjects} </h5>
                    <p> Location: {scholarship.Location} </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>)
        };
      </div>
    </div>
  );
};
export default Scholarship;