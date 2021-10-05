
import React from 'react';
import './Footer.css';

const Footer = () => {    
    return (
        //*********** Footer*******************    
        <div className="card-footer">
            <div className="container">
            {/****************three column ************/}
                <div className="row">

                    <div className="col-md-4 col-12">
                        <h5 className="footer-title"><i className="fab fa-pagelines"></i> Target </h5>
                        <p className="pe-4">To Fulfill everybody basic education with quality Teachers </p>
                    </div>

                    
                    <div className="col-md-4 col-12 get-in-touch">
                        <h5 className="footer-title"><i className="fab fa-pagelines"></i> Contact Us </h5>                        
                        <p className="mb-0 mt-3">+88 01736712102</p>
                        <p> athenateachers23@.com</p>
                    </div>

 
                    <div className="col-md-4 col-12 search">
                        <h5 className="footer-title"><i className="fab fa-pagelines"></i>  Serach</h5>                        
                        <input type="text" placeholder="search your favourite course"></input>
                        <button className="btn px-4">Search</button>
                    </div>
                </div>

                {/* -----------------    Copyright   ----------------- */}
                <div>
                    <p className="text-center mb-2 mt-3">
                        Copyright @2021 <i className="fas fa-copyright"></i> Athena Education Care</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;