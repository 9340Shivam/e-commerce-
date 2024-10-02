import React from 'react'
import './Profile.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Profile = () => {
  return (
    <div>
     <div className="col-5 ">
  <div className="row d-flex justify-content-center">
    <div className="col-md-7">
      <div className="card p-3 py-4">
        <div className="text-center">
          <img src="https://i.imgur.com/bDLhJiP.jpg" width={100} className="rounded-circle" />
        </div>
        <div className="text-center mt-3">
          <span className="bg-secondary p-1 px-4 rounded text-white">Programer </span>
          <h5 className="mt-2 mb-0">Shivam Lambodiya</h5>
          <span>UI/UX Designer</span>
          <div className="px-4 mt-1">
            <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <ul className="social-list">
            <li><FaInstagramSquare/></li>
            <li><FaGithub/></li>
            <li><SiFacebook/></li>
            <li><FaSquareWhatsapp/></li>
            <li><i className="fa fa-google" /></li>
          </ul>
          <div className="buttons">
            <button className="btn btn-outline-primary px-4">Message</button>
            <Link to="/contact" className="btn btn-primary px-4 ms-3">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Profile
