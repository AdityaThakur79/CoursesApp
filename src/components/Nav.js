import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "./Navbar";

export default function Nav(props) {
  return (
    <>
      <div className="navbar">
        <div class="logo">
          <h2>CourseHub</h2>
        </div>
        <nav>
          <ul id="MenuItem">
            <li>
              <NavLink to="/home" className="navitem">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/ViewCourse" className="navitem">
                ViewCourse
              </NavLink>
            </li>

            <li>
              <NavLink to="/AddCourse" className="navitem">
                AddCourse
              </NavLink>
            </li>

            <li>
              <NavLink to="/Contact" className="navitem">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
