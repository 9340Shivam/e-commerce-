import React from 'react'
import logo from '../ecom.png'
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div>

  {/* Footer */}
  <footer className="text-center text-lg-start text-dark " style={{backgroundColor: 'white'}}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-between p-4 text-bg-dark " style={{backgroundColor: '#6351ce'}}>
      {/* Left */}
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href className="text-white me-4 text-dark">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-instagram" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold"><img src={logo}/></h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Bootstrap Angular</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="/profile" className="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Help</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p><i className="fas fa-home mr-3" /> <FaInstagram/></p>
            <p><i className="fas fa-envelope mr-3" /> <ImFacebook2/></p>
            <p><i className="fas fa-phone mr-3" /> <a href="/contact">+91 9506261709</a></p>
            <p><i className="fas fa-print mr-3" /><a href="/contact">shivamkmaurya@gmail.com</a> </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
    <b>  © 2024 Copyright : </b>
       <a className="text-dark" href="/"> home</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>

{/* <!-- End of .container --> */}
    </div>
  )
}

export default Footer
