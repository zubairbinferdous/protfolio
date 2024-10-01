import React from "react";
import "../App.css";
import cho from '../assets/cho.jpg';
import clinto from '../assets/clintoo.jpg';

const Clints = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60, // Starts below the normal position
    },
    visible: {
      opacity: 1,
      y: 0, // Ends at the normal position
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeOut', // Easing function for a smooth effect
      },
    },
  };
  return (
    <div>
       
         <div className="section"id='Testimonials'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta porro repellat et numquam quidem veritatis? Voluptatibus consectetur, repudiandae culpa assumenda, facere totam adipisci illum consequuntur incidunt et molestias at?</p>
      </div>
      <div className="work-area mb-10">
        <div className="container-fluid">
          <div className="container ">
            <div className="row" >
              <div className="title-area text-center">
                <h3> Testimonials</h3>
              </div>
            </div>

        
          

 <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">


    <div className="carousel-item active"  data-bs-interval="2000">
    <div className="row  margin-500">
              <div className="col-md-4">
                <div className="test-data-area">
                  <div className="test-img-area">

                        <img src={cho} alt="" />
                  </div>
                  <div className="test-data-areaa">
                      <div className="name">
                        <h2>Navid al azim</h2>
                      </div>
                      <div className="com">
                        <p>Chief Operating Manager</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
               <div className="test-area-data-flex">
               <div className="review-data-area">
                <h2>Lkss</h2>
                <p>Highly professional and efficient team! The level of attention to detail is unmatched.</p>
                </div>
               </div>
              </div>
            </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className="row  margin-500">
              <div className="col-md-4">
                <div className="test-data-area">
                  <div className="test-img-area">

                        <img src={clinto} alt="" />
                  </div>
                  <div className="test-data-areaa">
                      <div className="name">
                        <h2>Nomal ahmad </h2>
                      </div>
                      <div className="com">
                        <p>Chief Operating Manager</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
               <div className="test-area-data-flex">
               <div className="review-data-area">
                <h2>creftimation</h2>
                <p>The web development service provided was outstanding! Our site runs faster and looks better than ever.</p>
                </div>
               </div>
              </div>
            </div>
    </div>

  </div>
 
</div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default Clints;
