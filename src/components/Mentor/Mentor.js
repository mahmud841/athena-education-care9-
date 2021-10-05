import React, { useEffect, useState } from 'react';
import Mentors from '../Mentors/Mentors';
import './Mentor.css';

const Mentor = () => {
    const [mentors, setmentors] = useState([])
    useEffect(() => {
        fetch("./teacher.json")
            .then(res => res.json())
            .then(data => setmentors(data))
    }, [])
    return (
        <div >
            <h2 className="text-center"> Mentor:{mentors.length}</h2>
            <div className="mentors-container">

                {
                    mentors.map(mentor => <Mentors
                        mentor={mentor}
                        key={mentor.id}
                    ></Mentors>)
                }
            </div>
        </div>
    );
};

export default Mentor;