import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div>
       <div className="section"id='Contact'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta porro repellat et numquam quidem veritatis? Voluptatibus consectetur, repudiandae culpa assumenda, facere totam adipisci illum consequuntur incidunt et molestias at?</p>
      </div>
      <div className="container-fluid contact-bg">
        <div className="container">
          <div className="row" id="">
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
                <h2>Let’s dive into your project and bring your vision to life.</h2>
                <p>
                Join me on a creative journey as we craft a powerful visual narrative for your brand, helping it rise above the noise in today’s crowded digital landscape.
                </p>
                <div className="">
                    <div className="experience">
                      <div className="ex-area">
                        <div className="ex-sectione">
                          <div className="ex-dataa">
                            <h3>Phone :</h3>
                            <h4>+1 424 236 1742</h4>
                          </div>
                          <div className="ex-dataa">
                            <h3>Email :</h3>
                            <h4>skayub.rjs@gmail.com</h4>
                          </div>
                          <div className="ex-dataa">
                            <h3>Address :</h3>
                            <h4>Los Angeles, California, United States of America</h4>
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
