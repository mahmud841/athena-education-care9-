import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
               <div className="container">
                <div className="row">
                    {/* ----------------  Header Text  ----------------- */}
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center left">
                        <div>
                            <h5>School of Code Hunters</h5>
                            <h1> <span>Athena </span> Education Care </h1>
                            <p>Join here today! Boost up your career</p>
                            <button className="sign-up">Sign Up</button>
                        </div>
                    </div>

                    {/* ----------------  Header Image  ----------------- */}
                    <div className="col-md-6 col-12">
                        {/* <img className="img-fluid" src={headerImage} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;