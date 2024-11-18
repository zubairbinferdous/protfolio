/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import "../App.css";

const About = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("education");

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 70, // Starts below the normal position
    },
    visible: {
      opacity: 1,
      y: 0, // Ends at the normal position
      transition: {
        duration: 1, // Duration of the animation
        ease: "easeOut", // Easing function for a smooth effect
      },
    },
  };

  return (
    <div>
      <div className="section" id="about">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta
          porro repellat et numquam quidem veritatis? Voluptatibus consectetur,
          repudiandae culpa assumenda, facere totam adipisci illum consequuntur
          incidunt et molestias at?
        </p>
      </div>
      <div className=" service-area container-fluid ">
        <div className="container">
          <div className="row">
            <motion.div
              className="title-area text-center"
              initial="hidden"
              whileInView="visible" // Triggers the animation when the section comes into view
              viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
              variants={fadeInUp} // Use the defined fadeInUp variants
            >
              <div className="title-area text-center animate__animated animate__bounce">
                <h3> About Me</h3>
                <div className="col-md-12">
                  <div className="profile text-center">
                    <p>
                    Accomplished, results-oriented Data Analyst and Researcher with extensive hands-on experience in data to insights and innovation. I possess a Bachelor's degree in Computer Science, complemented by an MBA in Management Information Systems, core competencies in advanced analytics, data visualization-both Power BI and Tableau-and programming in Python and R.

Certified as a Google Data Analyst and Microsoft Power BI Professional, I bring experience in trend analysis, process optimization, and impactful research supported by published works on the use of technology implementation and robotics. I especially enjoy leveraging advanced methodologies to provide insight, optimize operations, and ensure excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            {/* <div className="row">
              <div className="col-md-12">
                <h1 className="">An animated element</h1>
                <div className="button-group">
                  <button
                    className={activeTab === "education" ? "active" : ""}
                    onClick={() => handleTabChange("education")}
                  >
                    {" "}
                    Education
                  </button>
                  <button
                    className={activeTab === "experience" ? "active" : ""}
                    onClick={() => handleTabChange("experience")}
                  >
                    {" "}
                    Experience
                  </button>
                  <button
                    className={activeTab === "skills" ? "active" : ""}
                    onClick={() => handleTabChange("skills")}
                  >
                    {" "}
                    Professional Skills
                  </button>
                </div>
              </div>
            </div> */}

            {/* Education Tab Content */}
            {/* <div
              className={`tab-data ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <h1>Education Quality</h1>
              <div className="row ">
                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>International American University</p>
                      </div>
                      <div className="tab-data-title">
                        <h5>Los Angeles, California, USA</h5>
                      </div>
                      <div className="tab-data-title">
                        <h3>Master of Business Administration (MBA)</h3>
                      </div>
                      <div className="tab-data-title-two">
                        <h2>Major: Management Information System (MIS) </h2>
                      </div>
                      <div className="tab-data-title-three">
                        <span>May 2023 – Apr 2024</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>BRAC University </p>
                      </div>
                      <div className="tab-data-title">
                        <h5>Dhaka, Bangladesh</h5>
                      </div>
                      <div className="tab-data-title">
                        <h3>Bachelor of Science (BS) in Computer Science </h3>
                      </div>
                      <div className="tab-data-title-two">
                        <h2>Department: Computer Science & Engineering</h2>
                      </div>
                      <div className="tab-data-title-three">
                        <span>May 2020</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>Bir Sreshtho Munshi Abdur Rouf Public College</p>
                      </div>
                      <div className="tab-data-title">
                        <h5>Dhaka, Bangladesh</h5>
                      </div>
                      <div className="tab-data-title">
                        <h3>Higher Secondary Certificate (HSC) in Science </h3>
                      </div>
                      <div className="tab-data-title-three">
                        <span>2013 – 2014</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>Faizur Rahman Ideal Institute </p>
                      </div>
                      <div className="tab-data-title">
                        <h5>Dhaka, Bangladesh</h5>
                      </div>
                      <div className="tab-data-title">
                        <h3>Secondary School Certificate (SSC) in Science </h3>
                      </div>
                      <div className="tab-data-title-three">
                        <span>2002 – 2012</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
              </div>
            </div> */}

            {/* Experience Tab Content */}
            {/* <div
              className={`tab-data ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <h1>Experience</h1>
              <p className="tab-datatt">3 years +</p>
              <div className="row ">
                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>Unified (USG)</p>
                      </div>
                      <div className="tab-data-title">
                        <h3>Assistant Operation Manager (Full-Time)</h3>
                      </div>
                      <div className="tab-data-title">
                        <h5>Los Angeles, California , usa</h5>
                      </div>
                      <div className="tab-data-title-three">
                        <span>october 2024 - Present</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>STAR IT Ltd</p>
                      </div>
                      <div className="tab-data-title">
                        <h3>Project Management Trainee – Intern</h3>
                      </div>
                      <div className="tab-data-title">
                        <h5> Los Angeles California, usa</h5>
                      </div>
                      <div className="tab-data-title-three">
                        <span>Nov 2023 – feb 2024</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>Pushpodhara Properties Ltd</p>
                      </div>
                      <div className="tab-data-title">
                        <h3>Assistant Manager Administrative</h3>
                      </div>
                      <div className="tab-data-title">
                        <h5>Dhaka, Bangladesh</h5>
                      </div>
                      <div className="tab-data-title-three">
                        <span>aug 2021 – Mar 2023</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item">
                      <div className="tab-area-para">
                        <p>Sino Atrium Electronic Ind. Ltd</p>
                      </div>
                      <div className="tab-data-title">
                        <h3>Admin Officer, Executive </h3>
                      </div>
                      <div className="tab-data-title">
                        <h5>Dhaka, Bangladesh</h5>
                      </div>
                      <div className="tab-data-title-three">
                        <span>Apr 2020 – Jul 2021</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

           
               
              </div>
            </div> */}

            {/* Skills Tab Content */}
            <div
              className={`tab-data skills active-tab ${ activeTab === "skills" ? "active-tab" : ""}`}
              id="skills"
            >
              <h1>Professional Skills</h1>
              <p className="tab-datatt">3 years +</p>
              <div className="row animation-area">
                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item2">
                      <div className="tab-area-para">
                        <p>front end Development</p>
                      </div>
                      <div className="skill">
                        <h3>HTML</h3>
                        <div className="skill-bar">
                          <div className="progress html"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>CSS</h3>
                        <div className="skill-bar">
                          <div className="progress css"></div>
                        </div>
                      </div>
                      <div className="skill">
                        <h3>Redux</h3>
                        <div className="skill-bar">
                          <div className="progress redux"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>JavaScript</h3>
                        <div className="skill-bar">
                          <div className="progress js"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>React</h3>
                        <div className="skill-bar">
                          <div className="progress react"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>Next.js</h3>
                        <div className="skill-bar">
                          <div className="progress nextjs"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-md-6 animation-area">
                  <motion.div
                    className="title-area text-center"
                    initial="hidden"
                    whileInView="visible" // Triggers the animation when the section comes into view
                    viewport={{ once: false, amount: 0.4 }} // Only animate once, when 20% is visible
                    variants={fadeInUp} // Use the defined fadeInUp variants
                  >
                    <div className="data-area-tab-item2">
                      <div className="tab-area-para">
                        <p>back end Development</p>
                      </div>
                      <div className="skill">
                        <h3>MongoDB</h3>
                        <div className="skill-bar">
                          <div className="progress mongodb"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>PostgreSQL</h3>
                        <div className="skill-bar">
                          <div className="progress postgresql"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>MySQL</h3>
                        <div className="skill-bar">
                          <div className="progress mysql"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>Node.js</h3>
                        <div className="skill-bar">
                          <div className="progress node"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>Laravel</h3>
                        <div className="skill-bar">
                          <div className="progress laravel"></div>
                        </div>
                      </div>

                      <div className="skill">
                        <h3>Express</h3>
                        <div className="skill-bar">
                          <div className="progress mysql"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Add more skills items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
