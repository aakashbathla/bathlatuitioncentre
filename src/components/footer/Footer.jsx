import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-contact col-12 py-3 ">
            <div className="row justify-content-between ">
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h6>+91 9817607770</h6>
                  <p>Mon-Sat 2pm-8pm</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h6>bathlatuitioncentre@gmail.co</h6>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-map"></i>
                </div>
                <div className="contact-text">
                  <h6>
                    Opposite to Sanatan Dharam Mandir, Model Town, Panipat
                  </h6>
                  <p>132103, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social col-12 py-3">
            <div className="row justify-content-center box rounded-0">
              <div className="col-8 ">
                <div className="row ">
                  <div className="col-12 col-md-6 text-center">
                    <p>connect with us on social media</p>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-baseline ">
                    <div className="social-icon me-2">
                      <i className="fab fa-facebook"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-github"></i>
                    </div>
                    <div className="social-icon me-2">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links col-12 py-3">
            <div className="row">
              <div className="links-pages  col-sm-6">
                <h3>
                  <Link to="/" className="fs-3 fw-bold">
                    <span>Bathla</span>TuitionCenter
                  </Link>
                </h3>
                <ul className="navbar-nav ">
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item  ">
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/singlecourse">
                      Single Course
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/login" className="nav-link">
                      Log In
                    </Link>
                  </li> */}
                  <li className="nav-item ">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="links-info  col-sm-6 mt-4 mt-sm-0">
                <h3>Privacy Policy</h3>
                <p>
                  At Bathla Tuition Centre, we respect your privacy. Please
                  refer to our Privacy Policy for information on how we collect,
                  use, and protect your personal data.
                </p>
                <h3>Terms of Service</h3>
                <p>
                  By using this website, you agree to comply with and be bound
                  by our Terms of Service. Please review the terms carefully
                  before accessing or using our website.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright col-12 text-center py-3 ">
            <p>
              Copyright &copy;{new Date().getFullYear()} Bathla Tuition Centre |
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
