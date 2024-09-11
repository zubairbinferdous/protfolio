import React from "react";
import "../App.css";
import clint from '../assets/about.jpg';

const Clints = () => {
  return (
    <div>
      <div className="work-area mb-10">
        <div className="container-fluid">
          <div className="container ">
            <div className="row">
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
                    <div className="work-data">
                    <div className="clint-data text-center">
                        <img src={clint} alt="" />
                        <h2>Digital Branding </h2>
                        <p>
                          Blend of strategic thinking and creative flair to
                          craft a digital identity that resonates and
                          captivates.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="work-data">
                      <div className="clint-data text-center">
                        <img src={clint} alt="" />
                        <h2>Digital Branding </h2>
                        <p>
                          Blend of strategic thinking and creative flair to
                          craft a digital identity that resonates and
                          captivates.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="work-data">
                      <div className="clint-data text-center">
                        <img src={clint} alt="" />
                        <h2>Digital Branding </h2>
                        <p>
                          Blend of strategic thinking and creative flair to
                          craft a digital identity that resonates and
                          captivates.
                        </p>
                       
                      </div>
                    </div>
                  </div>

                 
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
