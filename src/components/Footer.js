import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>News</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">All</a>
                </li>
                <li>
                  <a href="/">Club News</a>
                </li>
                <li>
                  <a href="/">Media Center</a>
                </li>
                <li>
                  <a href="/">Video</a>
                </li>
                {/* <li>
                  <a href="/">RSS</a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>Tickets</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">Online Ticket</a>
                </li>
                <li>
                  <a href="/">Payment and Prices</a>
                </li>
                <li>
                  <a href="/">Contact &amp; Booking</a>
                </li>
                <li>
                  <a href="/">Tickets</a>
                </li>
                <li>
                  <a href="/">Coupon</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>Matches</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">Finals</a>
                </li>
                <li>
                  <a href="/">Semi-Finals</a>
                </li>
                <li>
                  <a href="/">Quarter Finals</a>
                </li>
                <li>
                  <a href="/">League Matches</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget mb-3">
              <h3>Social</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-12">
            <div className=" pt-5">
              <p>
                {/* {document.write(new Date().getFullYear())} */}
                All rights reserved | Web Team | NIT JAMSHEDPUR
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
