/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";
import pro1 from "../assets/p1.jpg";
import pro2 from "../assets/p2.jpg";
import pro3 from "../assets/p3.jpg";
import pro4 from "../assets/p4.jpg";

const Articles = () => {
  return (
    <div>
      <div className="work-areaa mb-10">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="title-area text-center" id="Publication">
                <h3> Publication</h3>
                <p>
                  {" "}
                  Discover my contributions to the field through various
                  publications. These articles and papers highlight my expertise
                  and provide valuable perspectives on emerging trends and
                  technologies.
                </p>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-md-4">
                <div
                  className="work-dataa"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="one"
                >
                  <div className="project-imga ">
                    <div className="igm-area-projecta">
                      <img src={pro1} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                      IoT Based Low-Cost Robotic Agent Design for Disabled and
                      Covid-19 Virus Affected People
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
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        IoT Based Low-Cost Robotic Agent Design for Disabled and
                        Covid-19 Virus Affected People
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
                        Disabled people and Virus affected patients can be
                        helped through Internet of Things and Robotic systems in
                        this modern era. Recently the whole world is suffering
                        from the Covid-19 pandemic. The virus affected and
                        disabled people are helpless because caregivers, doctors
                        and other people are afraid of the contagious virus.{" "}
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="igm-area-projecta-model">
                            <img src={pro1} alt="" className="" />
                          </div>

                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                href="https://ieeexplore.ieee.org/abstract/document/9210389"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>

                              <a
                                href="https://ieeexplore.ieee.org/abstract/document/9210389"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Cited by : 44
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
                  data-bs-target="#exampleModal2"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro2} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                      Evaluation of Information Technology Implementation for
                      Business Goal Improvement under Process{" "}
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
                id="exampleModal2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel2">
                        Evaluation of Information Technology Implementation for
                        Business Goal Improvement under Process
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
                        Improving organizational performance can be achieved
                        through business process redesign (BPR). When it comes
                        to modern work practices, organizations must often
                        redesign their processes to keep up. This is where
                        enterprise software comes in, offering a common data
                        infrastructure that enables different parts of the
                        organization to access all necessary financial data. The
                        architecture of network accounting business process is
                        divided into three layers. The core layer lies in
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="igm-area-projecta-model">
                            <img src={pro2} alt="" className="img-fluid" />
                          </div>

                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                href="https://www.scirp.org/journal/paperinformation?paperid=133478"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>

                              <a
                                href="https://www.scirp.org/journal/paperinformation?paperid=133478"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Cited by : 23
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
                  data-bs-target="#exampleModal3"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro3} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                      Business Innovations in Healthcare: Emerging Models for
                      Sustainable Growth{" "}
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
                id="exampleModal3"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel3"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel3">
                        Business Innovations in Healthcare: Emerging Models for
                        Sustainable Growth{" "}
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
                        Today’s healthcare sector is a dynamic industry that can
                        only support innovations in the business world that
                        address the needs of clients. The purpose of this paper
                        is to identify some of the growing trends of innovation
                        in the context of the healthcare organization and
                        practice with specific reference to technology,{" "}
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="igm-area-projecta-model">
                            <img src={pro3} alt="" className="img-fluid" />
                          </div>

                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth"
                                rel="noreferrer"
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
              <div className="col-md-4">
                <div
                  className="work-dataa"
                  id="four"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro4} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                      A classification and prediction based approach for
                      real-time ETP outlet monitoring through{" "}
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
                  id="exampleModal4"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel4"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalLabel4"
                        >
                          A classification and prediction based approach for
                          real-time ETP outlet monitoring through{" "}
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
                          Water is a vital element in our environment but day by
                          day water pollution is increasing in an alarming rate
                          in our country. In Bangladesh’s perspective,
                          industries such as textile and ready-made garments
                          (RMG) contribute
                        </p>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="igm-area-projecta-model">
                              <img src={pro4} alt="" className="img-fluid" />
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

        {/* <!-- Button trigger modal -->  */}
      </div>
    </div>
  );
};

export default Articles;
