/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../App.css";

const About = () => {
  
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('education');
  
    // Function to handle tab change
    const handleTabChange = (tabName) => {
      setActiveTab(tabName);
    };
  return (
    <div>
      <div className=" service-area container-fluid">
        <div className="container">
          <div className="row">
            <div className="title-area text-center" id="about">
              <h3> About Me</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="profile text-center">
                <p>
                  I am a versatile Assistant Operations Manager, Project
                  Manager, Administrator and Full Stack Developer with over 5
                  years of experience in optimizing operations, managing
                  projects, and Administration success. My 3-4 years of
                  freelance work with startups have honed my ability to
                  streamline processes, enhance productivity, and achieve
                  strategic goals. I am passionate about problem-solving,
                  collaboration, and delivering impactful results.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="row m-40">
            <div className="col-md-4 ">
              <div className="header-title">
                <h2>Experience</h2>
                <div className="experience">
                  <div className="ex-area">
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Unified (USG)</h3>
                        <h4>Assistant Operation Manager (Full-Time)</h4>
                        <p>Los Angeles, California</p>
                        <span>September 2024 - Present</span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>STAR IT Ltd</h3>
                        <h4>Project Management Trainee – Intern</h4>
                        <p>California, USA</p>
                        <span>Nov 2023 – Apr 2024 </span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Pushpodhara Properties Ltd</h3>
                        <h4>Administrative Manager</h4>
                        <p>Dhaka, Bangladesh </p>
                        <span>Jul 2022 – Mar 2023</span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Sino Atrium Electronic Ind. Ltd </h3>
                        <h4>Business Development Administrator</h4>
                        <p>Dhaka, Bangladesh </p>
                        <span>Jan 2020 – Jun 2021</span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Zasa LTD</h3>
                        <h4>System Administrator</h4>
                        <p>Dhaka, Bangladesh </p>
                        <span>Jan 2018 – Dec 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="header-title">
                <h2>Education</h2>
                <div className="experience">
                  <div className="ex-area">
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Master of Business Administration (MBA)</h3>
                        <p>Major: Management Information System (MIS)</p>
                        <h4>
                          International American University – Los Angeles,
                          California, USA
                        </h4>
                        <span>May 2023 – Apr 2024</span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Bachelor of Science (BS) in Computer Science</h3>
                        <p>
                          Thesis: “A classification and prediction-based
                          approach for real-time ETP outlet monitoring through
                          E-IoT and remote sensing using machine learning and
                          deep learning"{" "}
                        </p>
                        <h4>BRAC University - Dhaka, Bangladesh</h4>
                        <span>May 2020</span>
                      </div>
                    </div>

                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Higher Secondary School Certificate in Science</h3>
                        <p>
                          Bir Sreshtho Munshi Abdur Rouf Public College - Dhaka,
                          Bangladesh
                        </p>
                        <span>2013 – 2014</span>
                      </div>
                    </div>

                    <div className="ex-section">
                      <img src="" alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Secondary School Certificate in Science</h3>
                        <p>
                          {" "}
                          Faizur Rahman Ideal Institute - Dhaka, Bangladesh
                        </p>
                        <span>2002 – 2012</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="header-title">
                <h2>Language</h2>
                <div className="experience">
                  <div className="ex-area">
                    <div className="ex-section">
                      <img alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>English</h3>
                        <span>fluent </span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Spanish</h3>
                        <span>fluent</span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>hindi</h3>
                        <span>fluent</span>
                      </div>
                    </div>
                    <div className="ex-section">
                      <img alt="" className="logo-icon" />
                      <div className="ex-data">
                        <h3>Bangla</h3>
                        <span>fluent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="title-area text-center" id="about">
              <h3> My Resume</h3>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-md-12">
              <div className="tab-button">
                <ul>
                  <li>
                    <a href="" id="tabOne">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="" id="tabTwo">
                      professional Skills
                    </a>
                  </li>
                  <li>
                    <a href="" id="tabThree">
                      experience
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-data">
            <h1>Education Quality</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>
                      International American University – Los Angeles,
                      California, USA
                    </p>
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
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>BRAC University - Dhaka, Bangladesh</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Bachelor of Science (BS) in Computer Science </h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>
                      Thesis: “A classification and prediction-based approach
                      for real-time ETP outlet monitoring through E-IoT and
                      remote sensing using machine learning and deep learning"
                    </h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>May 2020</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>
                      Bir Sreshtho Munshi Abdur Rouf Public College - Dhaka,
                      Bangladesh
                    </p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Higher Secondary School Certificate in Science</h3>
                  </div>
                  <div className="tab-data-title-three">
                    <span>2013 – 2014</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Faizur Rahman Ideal Institute - Dhaka, Bangladesh</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Secondary School Certificate in Science</h3>
                  </div>
                  <div className="tab-data-title-three">
                    <span>2002 – 2012</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-data">
            <h1>Experience</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Unified (USG)</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Assistant Operation Manager (Full-Time)</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Los Angeles, California</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>September 2024 - Present</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>STAR IT Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Project Management Trainee – Intern</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>California, USA</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Nov 2023 – Apr 2024</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Pushpodhara Properties Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Administrative Manager</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jul 2022 – Mar 2023</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Sino Atrium Electronic Ind. Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Business Development Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2020 – Jun 2021</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Zasa LTD</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>System Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2018 – Dec 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-data">
            <h1>professional Skills</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Unified (USG)</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Assistant Operation Manager (Full-Time)</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Los Angeles, California</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>September 2024 - Present</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>STAR IT Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Project Management Trainee – Intern</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>California, USA</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Nov 2023 – Apr 2024</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Pushpodhara Properties Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Administrative Manager</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jul 2022 – Mar 2023</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Sino Atrium Electronic Ind. Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Business Development Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2020 – Jun 2021</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Zasa LTD</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>System Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2018 – Dec 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

      <div>
      <div className="row">
        <div className="col-md-12">
        
      <div className="button-group">
      <button  className={activeTab === 'education' ? 'active' : ''}
                  onClick={() => handleTabChange('education')}> Education</button>
      <button className={activeTab === 'experience' ? 'active' : ''}
                  onClick={() => handleTabChange('experience')}> Experience</button>
      <button className={activeTab === 'skills' ? 'active' : ''}
                  onClick={() => handleTabChange('skills')}>   Professional Skills</button>
    </div>
        </div>
      </div>


      {/* Education Tab Content */}
      <div className={`tab-data ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
        <h1>Education Quality</h1>
        <div className="row">
            <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>
                      International American University – Los Angeles,
                      California, USA
                    </p>
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
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>BRAC University - Dhaka, Bangladesh</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Bachelor of Science (BS) in Computer Science </h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>
                      Thesis: “A classification and prediction-based approach
                      for real-time ETP outlet monitoring through E-IoT and
                      remote sensing using machine learning and deep learning"
                    </h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>May 2020</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>
                      Bir Sreshtho Munshi Abdur Rouf Public College - Dhaka,
                      Bangladesh
                    </p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Higher Secondary School Certificate in Science</h3>
                  </div>
                  <div className="tab-data-title-three">
                    <span>2013 – 2014</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Faizur Rahman Ideal Institute - Dhaka, Bangladesh</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Secondary School Certificate in Science</h3>
                  </div>
                  <div className="tab-data-title-three">
                    <span>2002 – 2012</span>
                  </div>
                </div>
              </div>
          {/* Add more education items as needed */}
        </div>
      </div>

      {/* Experience Tab Content */}
      <div className={`tab-data ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
        <h1>Experience</h1>
        <div className="row">
        <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Unified (USG)</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Assistant Operation Manager (Full-Time)</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Los Angeles, California</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>September 2024 - Present</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>STAR IT Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Project Management Trainee – Intern</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>California, USA</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Nov 2023 – Apr 2024</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Pushpodhara Properties Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Administrative Manager</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jul 2022 – Mar 2023</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Sino Atrium Electronic Ind. Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Business Development Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2020 – Jun 2021</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Zasa LTD</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>System Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2018 – Dec 2019</span>
                  </div>
                </div>
              </div>
          {/* Add more experience items as needed */}
        </div>
      </div>

      {/* Skills Tab Content */}
      <div className={`tab-data ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
        <h1>Professional Skills</h1>
        <div className="row">
        <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Unified (USG)</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Assistant Operation Manager (Full-Time)</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Los Angeles, California</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>September 2024 - Present</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>STAR IT Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Project Management Trainee – Intern</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>California, USA</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Nov 2023 – Apr 2024</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Pushpodhara Properties Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Administrative Manager</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jul 2022 – Mar 2023</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Sino Atrium Electronic Ind. Ltd</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>Business Development Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2020 – Jun 2021</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="data-area-tab-item">
                  <div className="tab-area-para">
                    <p>Zasa LTD</p>
                  </div>
                  <div className="tab-data-title">
                    <h3>System Administrator</h3>
                  </div>
                  <div className="tab-data-title-two">
                    <h2>Dhaka, Bangladesh</h2>
                  </div>
                  <div className="tab-data-title-three">
                    <span>Jan 2018 – Dec 2019</span>
                  </div>
                </div>
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
