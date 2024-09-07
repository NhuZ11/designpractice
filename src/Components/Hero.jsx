import React from 'react'
import Banner from "../assets/images/banner.png";

const Hero = () => {
  return (
   <div className='container mx-5'>
     <div className="d-flex justify-content-center align-items-center">
      <img src={Banner} alt="Card image" className="img-fluid" />
    </div>
   </div>
  )
}

export default Hero
