import React from "react";
import {NavLink} from "react-router-dom"
import web from "../src/images/download.png";
const About = () => {

    return (
      <>
        <section id="header" className=" d-flex  align-items-center">     
            <div className="cotainer-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto" >
                        <div className="row">
                    
                        <div id="home" className="col-md-7 pt-5 pt-lg-0 order-2 order-lg-1 d-fleg justify-content-center fleg-column">
                        <h2>
                        Dear Friends Welcome to the <strong className="compani">Dey's Automobiles </strong> 
                        </h2>
                        <h6  className="my-3">
                            We provide the best services, great quality and no.1 product
                        </h6>
                        <div className="my-3">
                            <NavLink to="/contact" className=" button ">
                           Contact us
                            </NavLink>
                        </div>
                        </div>

                         
                        <div className="col-lg-5 col-md-5 col-xs-5 order-1 order-lg-2 header-img">
                        <img id="image" src={web} className="fluid_img" alt="home img"/>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>    
      </>
    );
};


export default About;