/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from "react";
import "../App.css";
import pro4 from "../assets/4.jpg";
import pro5 from "../assets/5.jpg";
import pro6 from "../assets/7.jpg";
import pro1 from "../assets/p1.jpg";
import pro2 from "../assets/p2.jpg";
import pro3 from "../assets/p3.jpg";
import pro8 from "../assets/pro8.jpg";

const Articles = () => {

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 50, // Starts below the normal position
    },
    visible: {
      opacity: 1,
      y: 0, // Ends at the normal position
      transition: {
        duration:.8, // Duration of the animation
        ease: 'easeOut', // Easing function for a smooth effect
      },
    },
  };

  const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -100, // Start from the right (100 pixels to the right)
  },
  visible: {
    opacity: 1,
    x: 0, // Move to the normal position
    transition: {
      duration: .5, // Duration of the animation
      ease: 'easeOut', // Easing function for a smooth effect
    },
  },
};
  return (
    <div>
       <div className="section"id='Publication'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta porro repellat et numquam quidem veritatis? Voluptatibus consectetur, repudiandae culpa assumenda, facere totam adipisci illum consequuntur incidunt et molestias at?</p>
      </div>
      <div className="work-areaa mb-10">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
            <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: .4 }} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
      < div className="title-area text-center">
                <h3> Publication</h3>
                <p>
                  {" "}
                  Discover my contributions to the field through various
                  publications. These articles and papers highlight my expertise
                  and provide valuable perspectives on emerging trends and
                  technologies.
                </p>
              </div>
    </motion.div>
            
            </div>



            <div className="row mt-60">

              
              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
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
              </motion.div>
              </div>



              
              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
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
                      Business Goal {" "}
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
                </motion.div>
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
                      <span className="Abstract">Abstract:</span> <br />

Improving organizational performance can be achieved through business process redesign (BPR). When it comes to modern work practices, organizations must often redesign their processes to keep up. This is where enterprise software comes in, offering a common data infrastructure that enables different parts of the organization to access all necessary financial data. The architecture of network accounting business process is divided into three layers. The core layer lies in the enterprise LAN that it can integrate six business processes information into one unity of financial information and non-financial information, including purchasing, inventory, production, sales, finance and customer service, and it can generate flexibly a variety of accounting statements to meet fully the information users’ demands by providing more complete and more valuable related information. The second layer lies in Intranet among enterprises based on the core layer that it can support the link of business processes and the inter-sharing of information among node enterprises of SCM and other external enterprises. The third layer lies in Internet based on the second layer that it can fit society, enterprise and individual together, the specific lays the solid foundation of business collaboration, remote management, online management and centralized management. The operating mechanisms of the network accounting business processes are as follows. When the business event occurs, the probe can get the event information in real-time and the result is stored in the database. Meanwhile, the drive controller can control the business events in real-time by gaining control criteria and standards from database. In case the standard is exceeded, the event is not allowed to occur. Enterprise’ business staff or external personnel can output automatically the required results through report tools if they had the reading authority. Supported the information system and optimizing processes, the managers can directly use the business event information, criteria and standards to control, guide, regulate and restrict management and operation in real-time, improving operation efficiency and effect. The enterprise can share the accounting information with node enterprises of SCM to bring about JIT that improve the core competitiveness of enterprise. This helps them to function more efficiently, cut costs, enhance customer service, and minimize the risk of human errors. Justifying projects has become increasingly crucial as information systems become more expensive and vital to organizations. IT can pursue two distinct goals: lowering operating costs or improving productivity, based on the difference between operational effectiveness and strategic positioning.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                         

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
                                href="https://www.scirp.org/pdf/jdaip2024122_102870689.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             


              











              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
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
                </motion.div>
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
                        <span className="Abstract">Abstract :</span> <br />
                      Today’s healthcare sector is a dynamic industry that can only support innovations in the business world that address the needs of clients. The purpose of this paper is to identify some of the growing trends of innovation in the context of the healthcare organization and practice with specific reference to technology, delivery of heath services, and system optimization. Analyzing the case studies or the current tendencies, the paper reveals the effects of these innovations on the quality of the caring service, on the effectiveness of a healthcare organization, and the future stability of a healthcare system. Furthermore, the paper examines the obstacles that hinder innovation and the legal frameworks that affect the business environment for sustainable growth and development recommendations. It is for this reason that the paper’s insights concretely highlight both the centrality and enduring importance of sustained innovation in realizing enduring positive changes in healthcare services as well as delivery. Keywords - Business Innovations, Healthcare, Sustainable Growth, Emerging Models, Healthcare Technology, Patient Care, Healthcare Efficiency, Telemedicine, Remote Patient Monitoring, Electronic Health Records (EHR), Artificial Intelligence, Machine Learning, Patient-Centered Care, Integrated Care Systems, Value-Based Care, Lean Management, Process Improvement, Automation, Robotics, Regulatory Compliance
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                        
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://www.aijmr.com/research-paper.php?id=1093"
                                rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>
                        
                              <a
                                href="https://www.aijmr.com/papers/2024/5/1093.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
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
              


              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal300"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro4} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Security Challenges and Business Opportunities in the IoT Ecosystem
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
                </motion.div>
              </div>

              <div
                className="modal fade"
                id="exampleModal300"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel300"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel300">
                      Security Challenges and Business Opportunities in the IoT Ecosystem
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
                        <span className="Abstract">Abstract :</span> <br />
                        In the growing IoT environment, security seems to be a dominant topic, because of the broad extent of IoT devices functionalities is expressed in the different sectors. This article scrutinizes the elaborate IoT infrastructure, exposing the common flaws and traceable security incidents, which serve as a background in the appreciation of the need of having reliable security frameworks. At the same time, the research paper pinpoints the vast business prospects that will spawn from the issues, highlighting the fact that these can be tapped through the creation and provision of cutting-edge security systems and consultancy services. The study makes a prediction of the future of IoT based on its current rating and empirical evidence by reviewing literature to assess emerging technologies and market trends, which give way for future innovations in IoT security. In general, this paper proposes that interested actors who are proactive and afraid of the emerging security threats have an opportunity to tap into the growth and innovation in building strong IoT systems. Consequently, the insights offered in this paper are appropriate for both the industry stakeholders and the researchers.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                        
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://www.aijmr.com/research-paper.php?id=1089" rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>
                          
                              <a
                                href="https://www.aijmr.com/papers/2024/5/1089.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
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


              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3000"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro5} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Sustainable Business Practices Through IoT: Energy Efficiency and Cost Reductions
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

                </motion.div>
              </div>


              <div
                className="modal fade"
                id="exampleModal3000"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel3000"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel3000">
                      Sustainable Business Practices Through IoT: Energy Efficiency and Cost Reductions
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
                        <span className="Abstract">Abstract :</span> <br />
                      This is the age of industrial transformation that is being driven by the Internet of Things (IoT). It offers very unique chance to maximize productivity excellence and foster economic expansion while having the opportunity to meet environmental concerns. This comprehensive study looks into not only the IoT contribution to energy efficiency and cost reduction but also potential use in areas of administrative operations with the same objective of energy efficiency and cost reduction. With the aid of rigorous mixed methods research that brings together qualitative data from multiple industries, against the backdrop of carefully selected case studies showing the actual benefits of IoT installations, the paper seeks to give a clear picture of the practical advantages of IoT-powered organizations. The research presents information regarding how IoT technologies function to optimize energy applications, enhance processes, and cut down waste through their ability to collect data in real-time and manage systems. Besides, it will analyze the problems companies may run into while adding IoT solutions, such as technological complexity, initial expenditure, and security matters. On the other hand, the research also designs the tactical moves that the companies can opt for as an alternative to completely eradicate these barriers and successfully deploy the IoT technology. Through the systematic study of the role of the Internet of Things on green business practices policymakers, business leaders, and technologists will gain valuable insights which can be applied in whatever levels they are working from. This policy is based on a systematic approach to IoT adoption, which, inter alia, suggests the organization of the project, statistical analysis, and improvement of the present situation to get the best economic and environmental state of affairs. This will further the comprehension of the power of IoT technology in both developing sustainability and increasing profitability, all indications that it is not just a technological advantage but rather a basic instrument for the future sustainability of business practices.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                        
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://www.aijmr.com/research-paper.php?id=1090" rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>
                              <a
                                target="_blank"
                                href="https://www.aijmr.com/papers/2024/5/1090.pdf" rel="noreferrer"
                              >
                                {" "}
                                PDF{" "}
                              </a>

                        
                      
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5500"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro6} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Impact of IoT on Business Decision-Making: A Predictive Analytics Approach
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
                </motion.div>
              </div>
              
              <div
                className="modal fade"
                id="exampleModal5500"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel5500"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel3000">
                      Impact of IoT on Business Decision-Making: A Predictive Analytics Approach
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
                        <span className="Abstract">Abstract :</span> <br />
                        To illustrate, the Internet of Things (IoT) has done an excellent job of changing the way business organizational decisions are made by making data available in unimaginable magnitudes. The following paper aims to identify and explain how IoT, with the help of predictive analytics, can improve BI and decision-making. This includes a discussion on several operational and customer cases, consideration of Artificial Intelligence and Machine Learning applications alongside the Internet of Things, and analysis of trends and developments of IoT. These are the core conclusions of IoT importance within real-time business, and related difficulties and tools for the improvement.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                        
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://www.aijmr.com/research-paper.php?id=1092"
                                rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>
                              {/* <a target="_blank" href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth" rel="noreferrer">
                      {" "}
                      show details{" "}
                    </a> */}
                      
                              <a
                                href="https://www.aijmr.com/papers/2024/5/1092.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
















              <div className="col-md-4 animation-areaTwo">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal7000"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro8} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    Real-time Data and IoT: Unlocking New Business Models and Revenue Streams
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
                </motion.div>
              </div>
              
              <div
                className="modal fade"
                id="exampleModal7000"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel7000"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel7000">
                      Real-time Data and IoT: Unlocking New Business Models and Revenue Streams
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
                        <span className="Abstract">Abstract :</span> <br />
                        In an ever-increasingly integrated world of the Internet, the IoT (IoT) and big data analytics are considered fundamental drivers of business transformation, which propel organizations to knowledge and operational efficiency with the new value unlocked. This paper conducts an all-round study of how IoT technologies linked with real-time data analysis can be used to create the norn of the consumer and industrial markets. With precision case studies illustrated, the article shows in an actual fashion how these technologies are used specifically to ease operations, improve the customer's experience and create new innovative models of business. As the next step, it assesses the future revenue streams triggered by these technologies and advocates for the appropriate strategy shift to better harness their potential. IoT and real-time data implementation may create beneficial digital inventories; yet, it comes with a series of obstacles, namely the security and privacy issues. The project makes analyses in which risks are revealed and future prospects are given with possible ways of improving security systems and long-term business conception among other things. It shows the amazing potential of using IoT and real-time data and, at the same time, illustrates the importance for the companies to refine their strategies and be prepared to the situation where emerging technologies are becoming exciting opportunities but also the necessity to be safe and act ethically.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                        
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://www.aijmr.com/research-paper.php?id=1091"
                                rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>
                              {/* <a target="_blank" href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth" rel="noreferrer">
                      {" "}
                      show details{" "}
                    </a> */}
                      
                              <a
                                href="https://www.aijmr.com/papers/2024/5/1091.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
                              </a>
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

      <div className="work-areaa mb-10">
        <div className="container-fluid">
          <div className="container">


            <div className="row">
            <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: .4 }} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
      {/* < div className="title-area text-center">
      <h3>Thesis</h3>
                <p>
                  {" "}
                  This thesis showcases my contributions to the field through various publications, highlighting my expertise and offering insights into emerging trends and technologies.
                </p>
              </div> */}
    </motion.div>
            
            </div>

            <div className="row mt-60">



            {/* <div className="col-md-4 animation-areaTwo">
            <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible" // Triggers the animation when the section comes into view
                viewport={{ once: false, amount: 0.2 }} // Only animate once, when 20% is visible
                variants={fadeInRight} // Use the defined fadeInRight variants
              >
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLabel5500"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={pro7} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                    <h2>
                    A classification and prediction based approach for real-time ETP outlet monitoring 
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
                </motion.div>
              </div> */}
              <div
                className="modal fade"
                id="exampleModalLabel5500"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel5500"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel5500">
                      A classification and prediction based approach for real-time ETP outlet monitoring through E-IoT and remote sensing using machine learning and deep learning
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
                        <span className="Abstract">Abstract :</span> <br />
                        Water is a vital element in our environment but day by day water pollution is increasing in an alarming rate in our country. In Bangladesh’s perspective, industries such as textile and ready-made garments (RMG) contribute to a massive amount of waste or effluent. Effluent treatment plant (ETP) are used to remove as much suspended solids from wastewater as possible before it gets back to the environment. However, according to a report published by the Environment and forests ministry, seven state-run factories don’t have any effluent treatment plant (ETP) to treat their waste before disposal. And also even the factories which has ETP do not always keep the ETP up and running because it consumes a lot of electricity. The purpose of our research is to establish a setup which will monitor the real-time quality of water outside the industries and inform us whether the ETP is turned on or not with the help of E-IoT and various classification algorithm. It will also predict the seasonal impact where the ETP might be turned off again and what will be the quality of water with the help of various machine learning and deep learning algorithms such as CNN, KNN and LSTM. We have also tracking the sensor value for monitoring and the ETP outlet with RGB color analysis. We have successfully achieved an accuracy of 99% for KNN, 97.5% for CNN and 94.9% forecasting model accuracy for LSTM.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                        
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                            <a
                                target="_blank"
                                href="https://dspace.bracu.ac.bd/xmlui/handle/10361/15736"
                                rel="noreferrer"
                              >
                                {" "}
                                show details{" "}
                              </a>
                              {/* <a target="_blank" href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth" rel="noreferrer">
                      {" "}
                      show details{" "}
                    </a> */}
                      
                              <a
                                href="https://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/15736/15201033,%2016301052,%2018201193,%2019241023_CSE.pdf?sequence=1&isAllowed=y"
                                target="_blank"
                                rel="noreferrer"
                              >
                                PDF
                              </a>
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
                      <span className="Abstract">Abstract:</span> <br />
                      Disabled people and Virus affected patients can be helped through Internet of Things and Robotic systems in this modern era. Recently the whole world is suffering from the Covid-19 pandemic. The virus affected and disabled people are helpless because caregivers, doctors and other people are afraid of the contagious virus. This work will result in an IoT based Robotic agent which will be able to help disabled and virus affected people with low cost systems. The robotic agent will be able to recognize the patient's Gesture and follow instructions through it with 360-degree movement. Without image processing the system is made with MPU 6050 Accelerometer Gyroscope sensor for Gesture Recognition. Radio Frequency communication was used to make the system wireless.
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          {/* <div className="igm-area-projecta-model">
                            <img src={pro1} alt="" className="" />
                          </div> */}

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
                                href="https://skayub.com/IoT_Based_Low_Cost_Robotic_Agent_Design.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                               PDF
                              </a>
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

export default Articles;
