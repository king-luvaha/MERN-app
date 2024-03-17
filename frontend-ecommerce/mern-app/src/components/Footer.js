import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter"></img>
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
                  <span className="input-group-text p-2" id="basic-addon2">
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
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Komarock : Nairobi, Kenya. <br/>
                  P.O. Box 00100
                </address>
                <a href="tel: +254 769 478 664" className="mt-3 d-block mb-1 text-white">
                  +254769478664
                </a>
                <a href="mailto:mrluvaha@gmail.com" className="mt-2 d-block mb-0 text-white">
                  mrluvaha@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://ke.linkedin.com/">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://www.instagram.com/">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://github.com/">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="https://www.youtube.com/">
                    <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy policy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping policy</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; { new Date().getFullYear()}; Powered by Yeswa&apos;s Corner{" "}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;