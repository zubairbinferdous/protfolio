import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div>
      <div className="container-fluid contact-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="from-area">
                <from className="from-data">
                  <input type="text" placeholder="Your name" />
                  <input type="email" placeholder="Your email" />
                  <textarea placeholder="Your massages"></textarea>
                  <button type="submit">submit now</button>
                </from>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-area-info">
                <h2>It's time to talk about your project.</h2>
                <p>
                  Let’s embark on creative journey together by shaping a visual
                  narrative of your brand in the crowded digital space.
                </p>
                <div className="">
                    <div className="experience">
                      <div className="ex-area">
                        <div className="ex-sectione">
                          <div className="ex-dataa">
                            <h3>Phone :</h3>
                            <h4>+01 234 567 8902</h4>
                          </div>
                          <div className="ex-dataa">
                            <h3>Email :</h3>
                            <h4>sayhello@olyveschwarz.me</h4>
                          </div>
                          <div className="ex-dataa">
                            <h3>Address :</h3>
                            <h4>Borough 47, Aveton Gifford,
                            Devon, UK, EX4 1QU</h4>
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
