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
            <h2 className="mb-3 fs-5 theme-clr">
              An investment in lnowledge pays the best interset
            </h2>
            <h1 className="mb-3 text-capitalize fs-3 fw-bold">
              best online platform for learning.
            </h1>
            <p className="mb-4 text-muted ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              nisi delectus a minus.
            </p>
            <button
              type="button"
              onClick={() => openSidebar()}
              className=" theme-btn"
            >
              join free
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
