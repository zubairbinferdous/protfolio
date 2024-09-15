import React from 'react';
import "../App.css";
import js from '../assets/js.svg';
import laravel from '../assets/laravel-svgrepo-com.svg';
import prisma from '../assets/light-prisma-svgrepo-com.svg';
import mongo from '../assets/mongodb-svgrepo-com.svg';
import my from '../assets/mysql-logo-svgrepo-com.svg';
import next from '../assets/nextjs.svg';
import node from '../assets/nodejs-logo-svgrepo-com.svg';
import pro1 from '../assets/p1.jpg';
import pro2 from '../assets/p2.jpg';
import pro3 from '../assets/p3.jpg';
import pro4 from '../assets/p4.jpg';
import posGet from '../assets/postgresql-svgrepo-com.svg';
import reactJs from '../assets/react.svg';
import redux from '../assets/redux-svgrepo-com.svg';

const Articles = () => {
    return (
        <div>
        <div className="work-areaa mb-10">
     <div className="container-fluid">
           <div className="container">
               <div className="row">
                   <div className="title-area text-center" id='Publication'>
                   <h3> Publication</h3>
                   <p>  Discover my contributions to the field through various publications. These articles and papers highlight my expertise and provide valuable perspectives on emerging trends and technologies.</p>
                   </div>
               </div>
               <div className="row mt-60">
                   <div className="col-md-4">
                     
                     <div className="work-dataa">
                     <div className="project-imga">
                         <div className="igm-area-projecta">
                           <img src={pro1}  alt=""  className='img-fluid'/>
                         </div>
                       </div>
                      <div className="project-dataa">
                      <h2>IoT Based Low-Cost Robotic Agent Design for Disabled and Covid-19 Virus Affected People</h2>
                      <p>Disabled people and Virus affected patients can be helped through Internet of Things and Robotic systems in this modern era. </p>
                      <div className="d-flex justify-content-between">
                       <a href="https://ieeexplore.ieee.org/abstract/document/9210389"> show details </a>

                       <a href="https://ieeexplore.ieee.org/abstract/document/9210389"> show 	
Cited by : 44
 </a>
                      </div>
                      </div>
                     </div>
                   </div>
                   <div className="col-md-4">
                     
                     <div className="work-dataa">
                     <div className="project-imga">
                         <div className="igm-area-projecta">
                           <img src={pro2}  alt=""  className='img-fluid'/>
                         </div>
                       </div>
                      <div className="project-dataa">
                      <h2>Evaluation of Information Technology Implementation for Business Goal Improvement under Process  </h2>
                      <p>Improving organizational performance can be achieved through business process redesign (BPR).  </p>
                      <div className="d-flex justify-content-between">
                       <a href="https://www.scirp.org/journal/paperinformation?paperid=133478"> show details </a>

                       <a href="https://www.scirp.org/journal/paperinformation?paperid=133478"> show 	
Cited by : 23
 </a>
                      </div>
                      </div>
                     </div>
                   </div>
                   <div className="col-md-4">
                     
                     <div className="work-dataa">
                     <div className="project-imga">
                         <div className="igm-area-projecta">
                           <img src={pro3}  alt=""  className='img-fluid'/>
                         </div>
                       </div>
                      <div className="project-dataa">
                      <h2>Business Innovations in Healthcare: Emerging Models for Sustainable Growth </h2>
                      <p>Today’s healthcare sector is a dynamic industry that can only support innovations in the business world that address the needs of clients.</p>
                       <a href="https://iraj.in/journal/IJASEAT//paper_detail.php?paper_id=20896&nameBusiness_Innovations_in_Healthcare:_Emerging_Models_for_Sustainable_Growth"> show details </a>
                      </div>
                     </div>
                   </div>
                   <div className="col-md-4">
                     
                     <div className="work-dataa">
                     <div className="project-imga">
                         <div className="igm-area-projecta">
                           <img src={pro4}  alt=""  className='img-fluid'/>
                         </div>
                       </div>
                      <div className="project-dataa">
                      <h2>A classification and prediction based approach for real-time ETP outlet monitoring through </h2>
                      <p>Water is a vital element in our environment but day by day water pollution is increasing in an alarming rate in our country. </p>
                       <a href="https://dspace.bracu.ac.bd/xmlui/browse?value=Wahid,%20SK%20Ayub%20Al&type=author"> show details </a>
                      </div>
                     </div>
                   </div>
                   {/* <div className="col-md-4">
                     
                     <div className="work-dataa">
                     <div className="project-imga">
                         <div className="igm-area-projecta">
                           <img src={proOne}  alt=""  className='img-fluid'/>
                         </div>
                       </div>
                      <div className="project-dataa">
                      <h2>Digital Branding </h2>
                      <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
                       <a href=""> show details </a>
                      </div>
                     </div>
                   </div>
                   <div className="col-md-4">
                     
                     <div className="work-dataa">
                     <div className="project-imga">
                         <div className="igm-area-projecta">
                           <img src={proOne}  alt=""  className='img-fluid'/>
                         </div>
                       </div>
                      <div className="project-dataa">
                      <h2>Digital Branding </h2>
                      <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
                       <a href=""> show details </a>
                      </div>
                     </div>
                   </div> */}
                 

               </div>
               <div className="row  m-40">
           <h3 className="skill-title text-center">Skills</h3>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={reactJs} alt="" />
             
                <h3>React.js</h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={js} alt="" />
               
                <h3>javascript</h3>
              </div>
            </div>
            <div className="col-md-2  col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={node} alt="" />
               
                <h3>node</h3>
              </div>
            </div>
            <div className="col-md-2  col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={redux} alt="" />
               
                <h3>redux</h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={mongo} alt="" />
               
                <h3>mongodb</h3>
              </div>
            </div>
            <div className="col-md-2 col-6 ">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={my} alt="" />
               
                <h3>mySql</h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={posGet} alt="" />
               
                <h3>postgreSql</h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={prisma} alt="" />
              
                <h3>prisma</h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={laravel} alt="" />
              
                <h3>laravel</h3>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="skill-data bg-icon">
                <img className="skill-img" src={next} alt="" />
              
                <h3>next.js</h3>
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