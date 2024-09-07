import React from 'react';
import { LiaDropbox } from "react-icons/lia";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import '../index.css'; // Ensure you import the index.css

const Features = () => {
  return (
    <div>
      <h1 className='display-6 d-flex justify-content-center mt-4 fw-bold text-success'>OUR FEATURES</h1>
      <ul className='list-unstyled mx-5 d-flex justify-content-center my-4 custom-gap'>
        <li><LiaDropbox size={100} color="green"/>
        <p className='text-center'>All Covered</p>
        </li>
        <li><FaPeopleCarryBox size={100} color="green"/>
        <p className='text-center'>Carry with care</p>
        </li>
        <li><GiBoxUnpacking size={100} color="green"/>
        <p className='text-center'>Pre Packing</p>
        </li>
        <li><FaClipboardCheck size={100} color="green"/>
        <p className='text-center'>Full insured</p>
        </li>
        <li><MdBusinessCenter size={100} color="green"/>
        <p className='text-center'>Commercial</p>
        </li>
        <li><BsFillHousesFill size={100} color="green"/>
        <p className='text-center'>Residental</p>
        </li>
      </ul>
    </div>
  );
}

export default Features;
