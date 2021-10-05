import React, { useEffect, useState } from 'react';
import Scholarship from '../Scholarships/Scholarship';
import './Stipend.css';

const Stipend = () => {
  const [stipends, setStipends] =useState([]);
  useEffect(() => {
    fetch('fakedata.JSON')
      .then(res => res.json())
      .then(data => setStipends(data))
  }, [])


  return (
    <div>
      <h1>Offered University:{stipends.length}</h1>
      {
        stipends.map(stipend => <Scholarship
        stipend={stipend}
        key={stipend.id}


        ></Scholarship> )
      }
    </div>
  );
};

export default Stipend;