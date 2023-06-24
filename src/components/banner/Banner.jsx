import React from "react";

import bannerImg from "../../assets/img/banner-img.png";

import { useGlobalContext } from "../../context/context";

import "./banner.css";
const Banner = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <section className="banner d-flex align-items-center ">
      <div className="bubble-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="theme-clr mb-3 fs-5">
              Welcome to Bathla Tuition Centre
            </h2>
            <h1 className="mb-3 text-capitalize fs-3 fw-bold">
              Unlocking Academic Excellence
            </h1>
            <p className="mb-4">
              At Bathla Tuition Centre, we are dedicated to empowering students
              with knowledge, skills, and confidence to excel in their academic
              pursuits. With a team of highly qualified and experienced
              educators, we offer comprehensive tutoring services for students
              from classes 6th to 12th.
            </p>
            <h1 className="mb-3 text-capitalize fs-3 fw-bold">
              Subjects We Teach:
            </h1>
            <ul>
              <li className="my-3">
                <span className="theme-clr fw-bold">Mathematics:</span> Master
                the world of numbers, equations, and problem-solving techniques
                with our expert math tutors.
              </li>
              <li className="my-3">
                <span className="theme-clr fw-bold">Science:</span> Explore the
                wonders of the scientific world through engaging experiments,
                conceptual learning, and practical applications.
              </li>
              <li className="my-3">
                <span className="theme-clr fw-bold">Physics:</span> Unravel the
                mysteries of the physical universe and enhance your
                understanding of fundamental principles.
              </li>
              <li className="my-3">
                <span className="theme-clr fw-bold">Chemistry:</span> Dive into
                the fascinating realm of chemical reactions, compounds, and
                atomic structures with our chemistry experts.
              </li>
              <li className="my-3">
                <span className="theme-clr fw-bold">Commerce:</span> Gain a
                strong foundation in commerce subjects, including accountancy,
                economics, and business studies.
              </li>
            </ul>
            <button type="button" className="theme-btn">
              Call Now
            </button>
          </div>
          <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
            <div className="circular-img">
              <img src={bannerImg} alt="banner img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
