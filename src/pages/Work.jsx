import React from "react";
import "../App.css";
import proj3 from "../assets/eco.jpg";
import proj2 from "../assets/poos.jpg";
import proj1 from "../assets/pro.jpg";
import proj4 from "../assets/proj.jpg";

const Work = () => {
  return (
    <div>
      <div className="work-area mb-10">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="title-area text-center " id="Project">
                <h3> My Recent Works</h3>
                <p>
                  {" "}
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and you customers.
                </p>
              </div>
            </div>

            <div className="row mt-60 ">
              
              <div className="col-md-6 d-flex justify-content-center">
                <div className="work-data">
                  <div className="project-img">
                    <div className="igm-area-project">
                      <img src={proj1} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-data">
                    <h2> Project Management Software </h2>
                    <p>
                    Take control of every aspect of your project with my advanced project management software. Designed to streamline operations, it features project tracking, employee management, detailed salary reports, payment processing, and role-based access control—all in one intuitive platform. Perfect for businesses seeking a complete solution to efficiently manage their projects and teams. 
                    </p>
                    <a
                      href="./WorkOne.jsx"
                      type="button"
                    
                    >
                      {" "}
                      show details a{" "}
                    </a>


                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="work-data">
                  <div className="project-img">
                    <div className="igm-area-project">
                      <img src={proj3} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-data">
                    <h2>Complete Multi-Vendor eCommerce System</h2>
                    <p>
                    Maximize your online marketplace with our all-in-one multi-vendor eCommerce system. Effortlessly manage product listings, track expenses, and generate detailed reports on sales, orders, and deliveries. Enjoy seamless role management and a robust vendor system, designed to streamline operations and optimize your marketplace experience.
                    </p>
                    <a href=""> show details </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="work-data">
                  <div className="project-img">
                    <div className="igm-area-project">
                      <img src={proj2} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-data">
                    <h2> POS Management Platform</h2>
                    <p>
                    Transform your retail business with my complete POS management system. From product addition and point-of-sale transactions to user information, salary reporting, expense tracking, and billing, this all-in-one solution streamlines every aspect of your operations. Ideal for businesses seeking to enhance efficiency and gain total control over their POS systems.
                    </p>
                    <a href=""> show details </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <div className="work-data">
                  <div className="project-img">
                    <div className="igm-area-project">
                      <img src={proj4} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-data">
                    <h2>Crafting Your Brand's Digital Identity</h2>
                    <p>
                    Unleash the full potential of your brand with my custom branding website. Tailored to highlight your unique value and connect with your audience, it blends compelling design with strategic storytelling. Ideal for creating a memorable online presence that stands out and drives business growth.
                    </p>
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
