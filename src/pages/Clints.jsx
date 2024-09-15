import React from "react";
import "../App.css";
import clintoo from '../assets/cho.jpg';
import clinto from '../assets/clintoo.jpg';

const Clints = () => {
  return (
    <div>
      <div className="work-area mb-10">
        <div className="container-fluid">
          <div className="container ">
            <div className="row" id="Testimonials">
              <div className="title-area text-center">
                <h3> Testimonials</h3>
              </div>
            </div>
            <div className="row mt-60 ">
              <div
               id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true"
              >
                {/* <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div> */}
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <div className="work-datae">
                    <div className="clint-datat text-center ">
                        <img src={clinto} alt="" />
                        <h2>Nomal ahmad</h2>
                        <p>
                        The eCommerce solution created by SK Ayub Al Wahid is exceptional. With its easy-to-use interface and comprehensive features for managing products, sales, and vendors, it has greatly improved our business operations. The platform’s reporting and expense management tools are particularly impressive.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="work-datae">
                      <div className="clint-datat text-center " >
                        <img src={clintoo} alt="" />
                        <h2>navid al azim  </h2>
                        <p>
                        We are thrilled with the project management system developed by SK Ayub Al Wahid. Its comprehensive capabilities, including salary and payment management, have given us greater control over our projects. The intuitive design and efficient features have significantly boosted our team’s efficiency.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  {/* <div className="carousel-item ">
                    <div className="work-datae">
                      <div className="clint-datat text-center ">
                        <img src={clint} alt="" />
                        <h2>Digital Branding5 </h2>
                        <p>
                          Blend of strategic thinking and creative flair to
                          craft a digital identity that resonates and
                          captivates.
                        </p>
                       
                      </div>
                    </div>
                  </div> */}

                 
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clints;
