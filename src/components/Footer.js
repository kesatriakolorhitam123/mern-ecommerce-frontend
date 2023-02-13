import React from 'react'
import { BsLinkedin, BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter"/>
              <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="mb-4 text-white">Contact Us</h4>
           <div>
           <address className="text-white fs-6">
              Hno : Jl.Kayu Putih Tengah 1 Blok A No.2, <br/> Pulogadung, Jakarta Timur <br/>
              PinCode: 13260
            </address>
            <a href="tel:+628322875277" className="mt-3 d-block mb-1 text-white">
              +628322875277
            </a>
            <a href="mailto:afidzpratama@gmail.com" className="mt-2 d-block mb-0 text-white ">
              afidzpratama@gmail.com
            </a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a className="text-white" to="">
               <BsLinkedin className="fs-4"/>
              </a>
              <a className="text-white" to="">
                <BsInstagram className="fs-4"/>
              </a>
              <a className="text-white" to="">
                <BsGithub className="fs-4"/>
              </a>
              <a className="text-white" to="">
               <BsYoutube className="fs-4"/>
              </a>
            </div>
           </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4 text-white">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to="/term-conditions" className="text-white py-2 mb-1">Terms Of Service</Link>
              <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="mb-4 text-white">Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="" className="text-white py-2 mb-1">Search</Link>
              <Link to="" className="text-white py-2 mb-1">About Us</Link>
              <Link to="" className="text-white py-2 mb-1">Faq</Link>
              <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
              <Link to="" className="text-white py-2 mb-1">Size Chart</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="mb-4 text-white">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="" className="text-white py-2 mb-1">Laptops</Link>
              <Link to="" className="text-white py-2 mb-1">Headphones</Link>
              <Link to="" className="text-white py-2 mb-1">Tablets</Link>
              <Link to="" className="text-white py-2 mb-1">Smart Watch</Link>
              <Link to="" className="text-white py-2 mb-1">Accessories</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()} Powered by Gobed Developer's
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer