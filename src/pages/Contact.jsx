import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

import "../App.css";

const Contact = () => {
  const form = useRef();

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40, // Starts below the normal position
    },
    visible: {
      opacity: 1,
      y: 0, // Ends at the normal position
      transition: {
        duration: 0.5, // Duration of the animation
        ease: "easeOut", // Easing function for a smooth effect
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w2cqkxw", "template_p6j0p67", form.current, {
        publicKey: "YKHK13FJ11oK9pmQi",
      })
      .then(
        () => {
          toast.success("Email sent successfully!"); // Display success message
        },
        (error) => {
          toast.error(`Failed to send email. Error: ${error.text}`); // Display error message
        }
      );
  };

  return (
    <div>
      <ToastContainer /> {/* ToastContainer will show all notifications */}
      <div className="section" id="Contact">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta
          porro repellat et numquam quidem veritatis? Voluptatibus consectetur,
          repudiandae culpa assumenda, facere totam adipisci illum consequuntur
          incidunt et molestias at?
        </p>
      </div>
      <div className="container-fluid contact-bg">
        <div className="title-area text-center">
          <h3> contact me</h3>
        </div>
        <div className="container">
          <div className="row" id="">
            <div className="col-md-6">
              <motion.div
                className="title-area text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                <div className="from-area">
                  <form ref={form} onSubmit={sendEmail} className="from-data">
                    <input type="text" name="from_name" placeholder="name" />
                    <input type="email" name="from_email" placeholder="email" />
                    <textarea name="message" placeholder="message" />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </motion.div>
            </div>

            <div className="col-md-6">
              <div className="contact-area-info">
                <h2>
                  Let’s dive into your project and bring your vision to life.
                </h2>
                <p>
                  Join me on a creative journey as we craft a powerful visual
                  narrative for your brand, helping it rise above the noise in
                  today’s crowded digital landscape.
                </p>
                <div className="">
                  <div className="experience">
                    <div className="ex-area">
                      <div className="ex-sectione">
                        <div className="ex-dataa">
                          <h3>Email :</h3>
                          <h4>zubidev71@gmail.com</h4>
                        </div>
                        <div className="ex-dataa">
                          <h3>Address :</h3>
                          <h4>
                          EURO
Mamataz Mahol
House#14, lane#09, 
ward#09

Hazipara Uttor Badda
                          </h4>
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

export default Contact;
