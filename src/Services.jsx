import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/s2t.jpg";
import wec from "../src/images/Scooto.png";
import wec1 from "../src/images/st20.jpeg";
import wec2 from "../src/images/servo40.jpg";
import wec3 from "../src/images/syn.png";
import wec4 from "../src/images/aaa.jpeg";
import wec5 from "../src/images/goben.jpg";
import wec6 from "../src/images/BBB.jpg";
import wec7 from "../src/images/lll.jpg";
const Services = () => {
   
    function abc(e){
        e.preventDefault();
        alert("For purches this product CONTACT with us")
       
        
     }

    return (
      <>
            <div class="serviecs">
                <center>
                    <h2>
                        Our Services
                    </h2>
                </center>
            </div>
            <div className="cotainer-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto" >
                        <div className="row">
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {web} class="card-img-top id2" alt="..."/>
                            <div class="card-body">
                                <h6 class="card-title">Servo 2T Supreme</h6>
                                <p class="card-text">Petrol Mix Engin Oil. Use for 2 Strock , 2 Wheelers & Autorickshaws. Vehicle TVS & Bajaj 
                                <br/>
                                <br/>
                                </p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec} class="card-img-top id1"  alt="..."/>
                            <div class="card-body">
                                <h10 class="card-title">Servo Scootomatic 4ST 10W30</h10>
                                <p class="card-text">Engin Oil. Use for 4 Strock Gearless Scooter. Vehicle TVS Scooty Jupiter & Wego
                                 Hero Maestro Yamaha Ray Honda Activa & Dio.</p>
                                <NavLink type="submit" onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>

                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec1} class="card-img-top id1" alt="..."/>
                            <div class="card-body">
                                <h7 class="card-title">Servo Scootomatic 4ST 20W40</h7>
                                <p class="card-text">Engin Oil. Use for 4 Strock Gearless Scooter. Vehicle TVS Scooty Jupiter & Wego
                                 Hero Maestro Yamaha Ray Honda Activa & Dio.</p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec2} class="card-img-top " alt="..."/>
                            <div class="card-body">
                                <h6 class="card-title">Servo 4T 20W40</h6>
                                <p class="card-text">Engin Oil. Use for all 4 Strock Motorcycle. </p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec3} class="card-img-top id6" alt="..."/>
                            <div class="card-body">
                                <h7 class="card-title">Servo 4T Synth 20W40</h7><br/>
                                <p class="card-text">Engin Oil. Use for all 4 Strock Motorcycle. </p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec4} class="card-img-top id8" alt="..."/>
                            <div class="card-body">
                                <h7 class="card-title">Servo 4T Zoom 10W30</h7>
                                <br/>
                                <p class="card-text">Engin Oil . use for 4 Strock Motorcycle. vehicle Hero Motorcycle</p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec5} class="card-img-top id3" alt="..."/>
                            <div class="card-body">
                                <h7 class="card-title">Servo 4T Goben 10W30</h7><br/><br/>
                                <p class="card-text">Engin Oil . use for 4 Strock Motorcycle. vehicle Honda Motorcycle <br/></p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec6} class="card-img-top id3" alt="..."/>
                            <div class="card-body">
                             <h5 class="card-title">Servo 4T bullet 15W50</h5>
                                <p class="card-text">Engin Oil . use for 4 Strock Motorcycle. vehicle Royal Enfield</p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>
                           <div className="col-md-4 col-10 mx-auto">
                           <div class="card">
                            <img src= {wec7} class="card-img-top id7" alt="..."/>
                            <div class="card-body">
                                <h7 class="card-title">Servo 4T SAE 20W40 900ml</h7>
                                <p class="card-text">Engin Oil . use for all 4 Strock Motorcycle.</p>
                                <NavLink onClick={abc} to="/contact" class="click">Add</NavLink>
                            </div>
                            </div>
                           </div>


                        

                        </div>
                    </div>
                </div>
            </div>
         
      </>
    );
};


export default Services;