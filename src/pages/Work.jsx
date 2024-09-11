import React from 'react';
import "../App.css";
import proOne from '../assets/pro2.jpg';
const Work = () => {
    return (
        <div>
             <div className="work-area mb-10">
          <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="title-area text-center">
                        <h3> My Recent Works</h3>
                        <p>  We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-md-6">
                          
                          <div className="work-data">
                          <div className="project-img">
                              <div className="igm-area-project">
                                <img src={proOne}  alt=""  className='img-fluid'/>
                              </div>
                            </div>
                           <div className="project-data">
                           <h2>Digital Branding </h2>
                           <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
                            <a href=""> show details </a>
                           </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          
                          <div className="work-data">
                          <div className="project-img">
                              <div className="igm-area-project">
                                <img src={proOne}  alt=""  className='img-fluid'/>
                              </div>
                            </div>
                           <div className="project-data">
                           <h2>Digital Branding </h2>
                           <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
                            <a href=""> show details </a>
                           </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          
                          <div className="work-data">
                          <div className="project-img">
                              <div className="igm-area-project">
                                <img src={proOne}  alt=""  className='img-fluid'/>
                              </div>
                            </div>
                           <div className="project-data">
                           <h2>Digital Branding </h2>
                           <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
                            <a href=""> show details </a>
                           </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          
                          <div className="work-data">
                          <div className="project-img">
                              <div className="igm-area-project">
                                <img src={proOne}  alt=""  className='img-fluid'/>
                              </div>
                            </div>
                           <div className="project-data">
                           <h2>Digital Branding </h2>
                           <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
                            <a href=""> show details </a>
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

export default Work;