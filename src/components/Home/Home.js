import React from 'react';
import './Home.css';
import Images from '../../Images/about1.jpg';
import Scholarship from '../Scholarships/Scholarship';


const Home = () => {
    return (
       <div className="header">
            <div className="container">
             <div className="row">
                    {/*******************Home Menu***************/}
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center left">
                        <div>
                            <h5>Athena Education Care</h5>
                            <h1> <span>Education</span> Zone</h1>
                            <p>Join here today! Boost up your career</p>
                            <button className="sign-up">Sign Up</button>
                        </div>
                    </div>

                    {/************************Image*********************/}
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src={Images} alt="" />
                    </div>
                </div>
            </div>
            <Scholarship></Scholarship>
       </div>
            
           
       
    );
};

export default Home;