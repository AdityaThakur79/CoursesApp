import React from "react";
import HeroSection1 from "./HeroSection1.css";
import { NavLink } from "reactstrap";
import {Link} from "react-router-dom"

function HeroSection() {
  return (
    <>
      <div className="header" id="home">
        <div classNameName="container">
          <div className="row">
            <div className="col-2">
              <h1>
                Find the right <span>Courses</span>
                <br />
                Right Away!
              </h1>
              <input
                type="text"
                placeholder="Search For Any Courses..."
                className="searchbox"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
              <br />
              <div className="searches">
                <h3>Popular:</h3>
                <Link to="#" className="searches1">
                  MERN Stack
                </Link>
                <Link to="#" className="searches1">
                  Java Development
                </Link>
                <Link to="#" className="searches1">
                  DSA
                </Link>
                <Link to="#" className="searches1">
                  UI/UX
                </Link>
              </div>

              <Link to="#" className="explore">
                Explore Now &#8594;
              </Link>
            </div>
            <div className="col-2">
              <img src="/images/2.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
