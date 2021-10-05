import React from 'react';
import "./Mentors.css"

const Mentors = (props) => {
    const { name, email, img, address, title } = props.mentor;
    return (
        <div className="mentor-cart">
                <div className="mentor-image text-center">
                    <img src={img} alt="" />
                </div>
                <div className="mentor-information text-center">
                    <h4>Name:{name}</h4>
                    <p>Email:{email}</p>
                    <h3>{title}</h3>
                    <address>Address:{address}</address>
                </div>
            </div>
    );
};

export default Mentors;