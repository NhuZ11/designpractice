import React from "react";
import { MdAvTimer } from "react-icons/md";
import { AiFillCalculator } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import AboutImg from "../assets/images/Rectangle 8.png";

const About = () => {
  return (
    <div className="mx-5 mt-5">
      <div className="background-image d-flex align-items-center justify-content-center">
        <div className="row w-100 mx-5">
          <div className="col-md-8 pe-5">
            <p className="text-success">About upex</p>
            <h1>MOVING & STORAGE SERVICE</h1>
            <p>
              Reliable solutions for smooth transitions. We provide packing &
              unpacking, commerical and residential relocation, our experienced
              team can help you.
            </p>

            <p>
              Our movers are trained to handle your belongings with utmost care,
              ensuring they arrive at your new location in perfect condition, we
              believe in providing transparent pricing and outsatanding
              cutstomer service, amking us the preferred choice for many
              homeowners and businesses.
            </p>


            <div className="row w-100 mt-5">
              <div className="col-md-6">
                <p><span><MdAvTimer size={25} color="green" /></span> On Time</p>
                <p><span><FaHome  size={25} color="green"/></span> For All Your Home</p>
                <button className="btn btn-success mt-4">READ MORE</button>
              </div>
              <div className="col-md-6">
                <p><span><AiFillCalculator  size={25} color="green"/></span> Free Estimates</p>
                <p><span><MdVerified  size={25} color="green" /></span> Guarantee</p>

                <p><span className="display-5 fw-bold text-success">15+</span> <br /> years of moving service</p>
                
              </div>
            </div>

          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
          <div className="about-image">
          <img src={AboutImg} alt="Card image" className="img-fluid" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
