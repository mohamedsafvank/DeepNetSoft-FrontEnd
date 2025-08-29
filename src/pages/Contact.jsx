import React from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter,CiLocationOn  } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='card f'>
        <h1>Connect With Us</h1>
        <p> <GiRotaryPhone size={25} color='#C5A059'/> +91 1231415682</p>
        <p> <MdEmail size={25} color='#C5A059'/> info@deepnetsoft.com</p>
      </div>
      <div className='card s'>
        <img src="../Images/logo.png" alt="" className='first' />
        <img src="../Images/logo-text.png" alt="" className='second'/>
        <div className='social-icons'>
            <SlSocialFacebook size={25} color='grey'/>
            <CiTwitter size={25} color='grey'/>
            <AiOutlineYoutube size={25} color='grey'/>
            <IoLogoInstagram size={25} color='grey'/>
        </div>

      </div>
      <div className='card t'>
        <h1>find Us</h1>
        <div>
            <CiLocationOn size={25} color='#C5A059'/> 
            <p>First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </div>
    <div className='footer'>
        <p>© 2025 Deepnetsoft Solutions. All rights reserved.</p>
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
    </div>
    </>
  )
}

export default Contact
