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


            <div className="row mt-60">
              <div className="col-md-4">
                <div
                  className="work-dataa"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                  id="one"
                >
                  <div className="project-imga ">
                    <div className="igm-area-projecta">
                      <img src={proj1} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Project Management Software
                    </h2>


                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- Modal -->  */}
              <div
                className="modal fade"
                id="exampleModal5"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel5"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel5">
                      Project Management Software
                      </h1>
                      <div className="button-modal">
                        <button
                          type="button"
                          className="close-button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          id=""
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="modle-para">
                      <p>
                      Our advanced Project Management Software streamlines the management of tasks, employees, salary reports, and payment processes. Equipped with role management and detailed project control features, it empowers businesses to efficiently manage every aspect of their projects while optimizing productivity and performance.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="igm-area-projecta-model">
                            <img src={proj1} alt="" className="" />
                          </div>

                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                href=""
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                live project {" "}
                              </a>

                              <a
                                href=""
                                target="_blank"
                                rel="noreferrer"
                              >
                               git hub 
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  id="two"
                  className="work-dataa"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal24"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={proj2} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Complete Multi-Vendor eCommerce System
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="exampleModal24"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel24"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel24">
                      Complete Multi-Vendor eCommerce System
                      </h1>
                      <div className="button-modal">
                        <button
                          type="button"
                          className="close-button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          id=""
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="modle-para">
                      <p>
                      Our Complete Multi-Vendor eCommerce System provides a comprehensive platform for businesses to manage multiple vendors seamlessly. It offers robust features like vendor management, product listing, order tracking, and secure payment gateways, enabling a smooth shopping experience for customers and efficient management for sellers.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="igm-area-projecta-model">
                            <img src={proj2} alt="" className="img-fluid" />
                          </div>

                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                href="https://www.scirp.org/journal/paperinformation?paperid=133478"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                live site {" "}
                              </a>

                              <a
                                href="https://www.scirp.org/journal/paperinformation?paperid=133478"
                                target="_blank"
                                rel="noreferrer"
                              >
                                git hub
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal34"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={proj4} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Crafting Your Brand's Digital Identity
                    </h2>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModal34"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel34"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel34">
                      Crafting Your Brand's Digital Identity
                      </h1>
                      <div className="button-modal">
                        <button
                          type="button"
                          className="close-button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          id=""
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="modle-para">
                      <p>
                        {" "}
                        Unlock the full potential of your brand with a tailored digital identity that resonates with your audience. From stunning website design to cohesive branding strategies, we create a strong online presence that sets you apart, ensuring your brand leaves a lasting impression in the digital world
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="igm-area-projecta-model">
                            <img src={proj4} alt="" className="img-fluid" />
                          </div>

                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth"
                                rel="noreferrer"
                              >
                                {" "}
                                github link{" "}
                              </a>
                              {/* <a target="_blank" href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth" rel="noreferrer">
                      {" "}
                      show details{" "}
                    </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="work-dataa"
                  id="four"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal44"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={proj3} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    POS Management Platform
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal44"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel44"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalLabel44"
                        >
                         POS Management Platform
                        </h1>
                        <div className="button-modal">
                          <button
                            type="button"
                            className="close-button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id=""
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <div className="modle-para">
                        <p>
                        Streamline your retail operations with our powerful POS Management Platform. Designed for efficiency, it offers seamless inventory tracking, sales management, and real-time reporting, all in one intuitive system. Elevate your business with a platform built to optimize performance and enhance customer experiences.
                        </p>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="igm-area-projecta-model">
                              <img src={proj3} alt="" className="img-fluid" />
                            </div>

                            <div className="project-dataa">
                              <div className="d-flex project-dataam">
                                <a
                                  href="https://dspace.bracu.ac.bd/xmlui/browse?value=Wahid,%20SK%20Ayub%20Al&type=author"
                                  target="_blank
                    "
                                >
                                  {" "}
                                  show details{" "}
                                </a>

                                {/* <a target="_blank" href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth" rel="noreferrer">
                      {" "}
                      show details{" "}
                    </a> */}
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
        </div>
      </div>
    </div>
  );
};

export default Work;
