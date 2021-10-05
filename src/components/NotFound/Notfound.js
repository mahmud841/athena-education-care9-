import React from 'react';
import './NotFound.css';

const Notfound = () => {
  return (
    //****************NotFound page******************* 
    <div className="notfound-container">
        <h1><i className="fas fa-bug"></i>404</h1>
        <h3> Page not Found </h3>
        <h4>You Reached Wrong URL!!! </h4>
    </div>
  );
};

export default Notfound;