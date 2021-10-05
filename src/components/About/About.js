import React from 'react';
import './About.css';
import Images from '../../Images/edu1.jpg';

const About = () => {
  return (
    
         // ******************About******************
        <div className="About container">
             {/*************** About Title***************** */}
            <h2 className="section-title">About Us</h2>

              {/********************Images Container*****************/}
            <div className="d-flex justify-content-center">
                <img className="about-image" src={Images} alt="" />
            </div>

            {/* ------------------    Description   ------------------- */}
            <h4 className="mt-5">Decades of excellence in the space of education!!</h4>
            <p>We guide a perfect way and support to your bright future with confidence by the ideal mix of training and preparation tools. We are conducting specialized training courses for various licensing exams like HAAD, DHA, MOH, PROMETRIC (Saudi, Oman, Qatar), NCLEX-RN, OET and CBT etc. We are also providing online dataflow processing for all health professionals, exam registration, free study materials and expert faculty since 2013. We are proud to announce the mark as the best coaching Centre in south India over 5000 students had their successful story with us. Come and join for a better tomorrow..</p>
                 <h3 className="mt-4">Next Generation Coaching Centre </h3>
           
            <p>Very fast and trustworthy service,We guide a perfect way and support to your bright future with confidence by the ideal mix of training and preparation tools. We are conducting specialized training courses for various licensing exams like HAAD, DHA, MOH, PROMETRIC (Saudi, Oman, Qatar), NCLEX-RN, OET and CBT etc. </p>
        
     
    </div>
  );
};

export default About;