import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-area ">
            <div className="logo-area ">
              <img src={logo} alt="" />
            </div>
           <div className="col-md-12">
           <div className="footer-link text-center">
              <ul className="">

                <li className="">
                  <a className="" href="#home">
                    Home
                  </a>
                </li>

                <li className="">
                  <a className="" href="#about">
                    About
                  </a>
                </li>

                <li className="">
                  <a className="" href="#Publication">
                    Publication
                  </a>
                </li>

                <li className="">
                  <a className="" href="#Project">
                    Project
                  </a>
                </li>

                <li className="">
                  <a className="" href="#Services">
                    Services
                  </a>
                </li>

                <li className="">
                  <a className="" href="#Testimonials">
                    Testimonials
                  </a>
                </li>

                <li className="">
                  <a className="" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
           </div>

            {/* <p>© 2024 BY SK</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
