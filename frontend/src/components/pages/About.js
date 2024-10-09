import React from "react";
import img9 from "./picture/img9.webp";

const About = () => {
    return(
        <div className="container-fluid" id="about">
             <div className="row">
                
             {/*----- Left content -----*/}
             <div className="col-lg-6 text-center">
             <img src={img9} className="picture" alt="img"></img>   
             </div>

             {/*----- Right content -----*/}
             <div className="col-lg-6 text-center mt-lg-5" id="aboutus">
             <h1 className="pt-lg-5">About Us</h1>
             <p className="pt-4 fs-5"> We, Sai Yogi fireworks are a leading provider of fireworks and crackers in the industry.
                 We have been functioning in the market since quite a few years now and have an outlet in Malad West, Mumbai, Maharashtra.
                 We understand the need of our clients, especially during several occasions and thus provide our customers with plenty of crackers and
                 beautiful fireworks that they can choose from. We ensure that all our items are lit properly and are within the manufacturer's date.
                 Our goal is to make every event memorable for you & thus have each of our items tried & tested before delivering them to you.</p>
             </div>
             </div>
        </div>
);
}

export default About;
