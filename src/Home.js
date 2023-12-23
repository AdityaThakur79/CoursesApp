import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ViewCourse from "./ViewCourse";
import AddCourse from "./AddCourse";
function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <HeroSection />
      <h2 class="title">ALL COURSES</h2>
      <h4 className="text-center mt-2  ">
        List of Courses Available are followed:
      </h4>
      <div style={{display:"flex" , justifyContent:"center",alignItems:"center" }}> 
      <ViewCourse />
      </div>
    </>
  );
}
export default Home;
