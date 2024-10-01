import { faGitlab, faReact, faSearchengin, faSellsy, faTrello } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import '../App.css';

const Service = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60, // Starts below the normal position
    },
    visible: {
      opacity: 1,
      y: 0, // Ends at the normal position
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeOut', // Easing function for a smooth effect
      },
    },
  };
    return (
        <div>
                <div className="section"id='Services'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta porro repellat et numquam quidem veritatis? Voluptatibus consectetur, repudiandae culpa assumenda, facere totam adipisci illum consequuntur incidunt et molestias at?</p>
      </div>
          <div className="service-area mb-10">
          <div className="container-fluid">
                <div className="container">
                    <div className="row" id=''>
                        <div className="title-area text-center">
                        <h3>  My Quality Services</h3>
                        <p>  From web applications to digital marketing, brand promotion, and eCommerce solutions, I provide everything you need to succeed in the digital world.</p>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-md-4 fadeInRight">
                        <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
                          <div className="service-dataa">
                          <FontAwesomeIcon icon={faReact} />
                            <h2>web applications</h2>
                            <p>I create cutting-edge, user-friendly web apps that are responsive and tailored to your company's requirements, providing a smooth functioning experience.</p>
                          </div>

                          </motion.div>
                        </div>


                        <div className="col-md-4 fadeInRight">

                        <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
                        <div className="service-dataa">
                        <FontAwesomeIcon icon={faSearchengin} />
                            <h2>digital marketing</h2>
                            <p>From SEO to social media, I offer comprehensive digital marketing services that increase visibility and grow your business.</p>
                          </div>


                          </motion.div>
                        </div>



                        <div className="col-md-4 fadeInRight">

                        <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >

                        <div className="service-dataa">
                        <FontAwesomeIcon icon={faGitlab} />
                            <h2>brand promotion</h2>
                            <p>I help elevate your brand by creating impactful promotion strategies that resonate with your audience and build lasting recognition.</p>
                          </div>





                        </motion.div>
                        </div>


                        <div className="col-md-4 fadeInRight">

                        <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
                        <div className="service-dataa">
                        <FontAwesomeIcon icon={faSellsy} />
                            <h2>eCommerce Solutions</h2>
                            <p>I provide customized eCommerce solutions that streamline your online sales process, enhance user experience, and drive business growth.</p>
                          </div>

                        /</motion.div>
                        </div>

                        <div className="col-md-4 fadeInRight">

                        <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >

                        <div className="service-dataa">
                        <FontAwesomeIcon icon={faTrello} />
                        <h2>Website Maintenance </h2>
<p>I offer comprehensive website maintenance services to ensure your site runs smoothly, stays secure, and performs optimally. From regular updates to troubleshooting.</p>

                          </div>


                          </motion.div>

                        </div>

                        <div className="col-md-4 fadeInRight">
                        <div className="service-daata">
                           

                         <div className="icon">
                        
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

export default Service;