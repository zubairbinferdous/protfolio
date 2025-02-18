import { motion } from 'framer-motion';
import React from 'react';
import "../App.css";
import proj6 from "../assets/casino.jpg";
import proj5 from "../assets/ecc.jpg";
import proj3 from "../assets/eco.jpg";
import proj2 from "../assets/poos.jpg";
import proj1 from "../assets/pro.jpg";
import proj4 from "../assets/proj.jpg";

const Work = () => {

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
      <div className="section" id="Project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta
          porro repellat et numquam quidem veritatis? Voluptatibus consectetur,
          repudiandae culpa assumenda, facere totam adipisci illum consequuntur
          incidunt et molestias at?
        </p>
      </div>
      <div className="work-area mb-10">
        <div className="container-fluid">
          <div className="container">
            <div className="row">

            <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5 }} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
     <div className="title-area text-center " id="">
                <h3> My Personal Works</h3>
                {/* <p>
                  {" "}
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and you customers.
                </p> */}
              </div>
    </motion.div>
             
            </div>

            <div className="row mt-60">


            <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
    </motion.div>


              <div className="col-md-4 animation-area">
              <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
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
                    <h4>Application</h4>
                    <h5>Project Management Software</h5>

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
                id="exampleModal5"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel5"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel5">
                        **Project Management Software
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
                        This is a project management Software to maintain project <br /> <br />
                        Admin can assign project to the employee <br /> <br />
                        Employee can update the status of the project <br /> <br />
                        Admin can see the status of the project <br /> <br />
                        Admin can maintain employee salary <br /> <br />
                        Admin can maintain the project details <br /> <br />
                        Generate the report of the project  <br /> <br />
                        PDF report of the project <br /> <br />
                        Multi role based access control <br /> <br />
                        Full responsive design <br /> <br />
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              {/* <a
                                href="https://lkss-hrc.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                live project {" "}
                              </a> */}

                              <a
                                href="https://github.com/zubairbinferdous/LLKS_project-management"
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub Repo
                              </a>
                              <a
                                href="https://lkss-hrc.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Live Link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-md-4 animation-area">
              <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
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
                    <h4>ecommerce</h4>
                    <h5>Complete Multi-Vendor eCommerce System</h5>
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
                id="exampleModal24"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel24"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel24">
                        **Complete Multi-Vendor eCommerce System
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
                        This is a Multi-Vendor Ecommerce website: <br /> <br />
                        Vendor Dashboard: Provide vendors with an intuitive
                        dashboard to manage products, orders, inventory, and
                        sales data. <br /> <br />
                        Product Management: Easy-to-use tools for adding,
                        editing, and organizing products, with support for
                        multiple categories and filters. <br /> <br />
                        Order Tracking & Notifications: Real-time order
                        tracking, with automated notifications for vendors and
                        customers. <br /> <br />
                        Vendor Commission Management: Set flexible commission
                        rates and manage payouts directly within the platform.
                        <br /> <br />
                        Affiliate Commission Management: if anyone refer the site to other person and that person buy the product then the referer will get the commission <br />
                        <br />
                        Advanced Reporting & Analytics: Access detailed sales,
                        inventory, and performance reports for vendors and the
                        marketplace. <br /> <br />
                        Responsive & Mobile-Friendly Design: Optimized for all
                        devices to ensure a seamless shopping experience
                        anywhere, anytime. <br />
                        Customer Reviews & Ratings: Build trust with integrated
                        customer reviews and ratings for vendors and their
                        products. <br /> <br />
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                href="https://eakeen.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {" "}
                                live site{" "}
                              </a>

                              <a
                                href="https://github.com/zubairbinferdous/eakeen-version-one"
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


              <div className="col-md-4 animation-area">
              <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
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
                    <h4>Branding</h4>
                    <h5>Crafting Your Brand's Digital Identity</h5>

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
                id="exampleModal34"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel34"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel34">
                        **Crafting Your Brand's Digital Identity
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
                         Create a unique digital
                        presence that reflects your brand's values and vision.{" "}
                        <br /> <br />
                        Responsive Website Design: Build user-friendly websites
                        optimized for all devices, ensuring seamless user
                        experience. <br /> <br />
                        Visual Identity Development: From logos to color
                        schemes, establish a consistent and appealing visual
                        representation of your brand. <br /> <br />
                        Content Strategy & Creation: Develop engaging content
                        that resonates with your audience and promotes brand
                        awareness. <br /> <br />
                        Social Media Integration: Enhance your brand’s presence
                        with integrated social media strategies for broader
                        audience engagement. <br /> <br />
                        SEO & Digital Marketing: Improve visibility with
                        targeted SEO strategies, driving traffic and conversion
                        for your brand. <br /> <br />
                        Consistent Brand Messaging: Deliver clear, coherent, and
                        impactful messaging across all digital platforms. <br /> <br />
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://github.com/zubairbinferdous/internEventZ"
                                rel="noreferrer"
                              >
                                {" "}
                                github link{" "}
                              </a>
                              <a
                                target="_blank"
                                href="http://intereventz.com/"
                                rel="noreferrer"
                              >
                                {" "}
                                Live link{" "}
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

              <div className="col-md-4 animation-area">
              <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal345"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={proj3} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                  <h4>full stack</h4>
                  <h5>POS Management Platform</h5>

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
                id="exampleModal345"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel345"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel34">
                      **POS Management Platform
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
                      Comprehensive Product Management: Easily add, update,
                          and manage product inventories, including pricing,
                          categories, and stock levels. <br /> <br />
                          Streamlined Billing System: Simplified checkout
                          process with support for multiple payment methods,
                          discounts, and invoices. <br /> <br />
                          Real-Time Sales Tracking: Monitor daily sales,
                          transactions, and performance metrics with real-time
                          reporting tools. <br /> <br />
                          Employee Management: Manage staff roles, track working
                          hours, and oversee performance and salaries. <br /> <br />
                          Expense Reports: Track and categorize business
                          expenses, enabling better financial oversight and
                          profitability analysis. <br /> <br />
                          User-Friendly Interface: Intuitive design for seamless
                          navigation, ensuring quick access to essential
                          functionalities. <br /> <br />
                          Secure Data Handling: Strong data protection and
                          access control, ensuring the security of business and
                          customer information. <br /> <br />
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://github.com/zubairbinferdous/pos-SYSTEM"
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

              

              
              <div className="col-md-4 animation-area">
              <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3450"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={proj5} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                  <h4>full stack</h4>
                  <h5>Ecommerce website</h5>

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
                id="exampleModal3450"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel3450"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel340">
                      **Ecommerce website
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
                      User-Friendly Interface: Seamless navigation for
                          customers, providing an intuitive and enjoyable
                          shopping experience. <br /> <br />
                          Multi-Vendor Support: Enable multiple sellers to
                          manage their own products, orders, and inventory on
                          one platform. <br /> <br />
                          Secure Payment Integration: Support for multiple
                          payment gateways ensuring secure and fast transactions
                          for customers. <br /> <br />
                          Advanced Search & Filters: Help users find products
                          quickly with customizable search options and filtering
                          by price, category, and more. <br /> <br />
                          Product Management: Easily add, edit, or remove
                          products with detailed descriptions, images, pricing,
                          and stock status. <br /> <br />
                          Order Management: Efficiently track and manage
                          customer orders, shipping, and delivery status all in
                          one place. <br /> <br />
                          Responsive Design: Optimized for all devices, ensuring
                          customers can shop from mobile, tablet, or desktop.{" "}
                          <br /> <br />
                          SEO Optimized: Built with search engine optimization
                          best practices to improve visibility and ranking in
                          search results. <br /> <br />
                          Discounts & Coupons: Integrated system for managing
                          promotional offers, discounts, and coupon codes.{" "}
                          <br /> <br />
                          Customer Reviews & Ratings: Allow customers to leave
                          reviews and ratings to build trust and engagement.{" "}
                          <br /> <br />
                          Analytics & Reporting: Get insights into sales
                          performance, customer behavior, and inventory levels
                          with comprehensive reports. <br /> <br />
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://github.com/SKRJS/Ecommerce"
                                rel="noreferrer"
                              >
                                {" "}
                                github link{" "}
                              </a>
                           
                              <a
                                target="_blank"
                                href="https://craftimation.com/"
                                rel="noreferrer"
                              >
                                {" "}
                                live link{" "}
                              </a>
                           
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-md-4 animation-area">

              <motion.div
      className="title-area text-center"
      initial="hidden"
      whileInView="visible" // Triggers the animation when the section comes into view
      viewport={{ once: false, amount: 0.5}} // Only animate once, when 20% is visible
      variants={fadeInUp} // Use the defined fadeInUp variants
    >
    
                <div
                  className="work-dataa "
                  id="three"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalLabel3450"
                >
                  <div className="project-imga">
                    <div className="igm-area-projecta">
                      <img src={proj6} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="project-dataaa">
                  <h4>front - end</h4>
                  <h5>Casino website (front - end )</h5>
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
                id="exampleModalLabel3450"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel3450"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel3450">
                      Casino website (front - end )
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
                      High-Impact Visuals: Use of bold colors like gold,
                          red, and black to convey luxury and excitement. <br /> <br />
                          Interactive Animations: Smooth hover effects and
                          transitions on buttons, cards, and other interactive
                          elements for a dynamic feel. <br /> <br />
                          High-Quality Graphics: Attractive game thumbnails,
                          banners, and promotional graphics showcasing the
                          latest games and offers. <br /> <br />
                          Responsive Layout: Ensuring seamless experience across
                          devices—desktops, tablets, and mobiles. <br /> <br />
                          Intuitive Navigation: Clear, easy-to-use menus for
                          game categories (slots, poker, blackjack, etc.) with
                          quick access to important features (account, deposit,
                          promotions). <br /> <br />
                          Search & Filter Options: Allow users to find games
                          easily with filters like game type, popularity, and
                          jackpots. <br /> <br />
                          Live Game Display: A section to showcase active or
                          trending games, with real-time updates and graphics
                          for live casino games. <br /> <br />
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-dataa">
                            <div className="d-flex project-dataam">
                              <a
                                target="_blank"
                                href="https://github.com/zubairbinferdous/ninjaCasino"
                                rel="noreferrer"
                              >
                                {" "}
                                github link{" "}
                              </a>
                              <a
                                target="_blank"
                                href="https://www.casino.org/"
                                rel="noreferrer"
                              >
                                {" "}
                                live link{" "}
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
  );
};

export default Work;
