import React from "react";

const Services = () => {
  return (
    <>
      <div className="container ">
        <div className="grid gird-three--cols">
          <div className="services">
            <i className="bx bx-bus"></i>
            <span className="services-title">Super Fast and Free Delevery</span>
          </div>
          <div className="ser-3 multi-services--cont">
            <div className="multi-services">
              <i class="bx bx-shield-plus"></i>
              <span className="services-title">Non-contact Shipping</span>
            </div>
            <div className="multi-services">
              <i class="bx bx-money-withdraw"></i>
              <span className="services-title">Money-back Guaranteed</span>
            </div>
          </div>
          <div className="services">
            <i class="bx bx-credit-card-alt"></i>
            <span className="services-title">Super Secure Payment System</span>
          </div>
        </div>
      </div>
      <div className="trusted">
        <span className="title" style={{ fontSize: "14px" }}>
          Trusted By 1000+ Companies
        </span>
        <div className="trusted-companies">
          <ul>
            <li>
              <img src="images/apple.png" alt="trusted companies" />
            </li>
            <li>
              <img src="images/google.png" alt="trusted companies" />
            </li>
            <li>
              {" "}
              <img src="images/mi2.png" alt="trusted companies" />
            </li>
            <li>
              {" "}
              <img src="images/moto.png" alt="trusted companies" />
            </li>
            <li>
              {" "}
              <img src="images/micro.png" alt="trusted companies" />
            </li>
            <li>
              {" "}
              <img src="images/oppo.png" alt="trusted companies" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
