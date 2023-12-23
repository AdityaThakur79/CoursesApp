import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ViewCourse from "./ViewCourse";
import AddCourse from "./AddCourse";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ViewCourse" element={<ViewCourse />}></Route>
          <Route path="/AddCourse" element={<AddCourse />}></Route>
          {/* <Route path="/UpdateCourses" element={<UpdateCourses/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
