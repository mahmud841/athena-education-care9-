import React from 'react';
import './Home.css';
import Images from '../../Images/about1.jpg';
import Featured2 from '../../Featured2/Featured2';



const Home = () => {
    return (
       <div className="header-home">
            <div className="container">
             <div className="row my-5">
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
        <Featured2></Featured2>
       </div>
            
           
       
    );
};

export default Home;