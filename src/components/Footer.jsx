import React from "react";
const Footer = () => {
  return (
    <footer>
      <section className="footer-top">
        <div className="ready">
          <p>
            Ready to get started? <br />
            Talk to us today
          </p>
        </div>
        <div className="get-started">
          <a href="/">GET STARTED</a>
        </div>
      </section>
      <section className="footer-botom">
        <ul>
          <li>
            <h4>Ebix</h4>
            <p>Online store </p>
          </li>
          <li>
            <h4>Follow Us</h4>
            <ul className="social-madia">
              <li>
                <i className="bx bxl-instagram"></i>
              </li>
              <li></li>
              <li>
                <i class="bx bxl-youtube"></i>
              </li>
              <li>
                <i class="bx bxl-facebook"></i>
              </li>
            </ul>
          </li>
          <li>
            <h4>Call Us</h4>
            <p>+91 90021 93922</p>
          </li>
        </ul>
      </section>
      <div className="copy">©2023 Ebix. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
