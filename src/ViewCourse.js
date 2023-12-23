import React, { useState, useEffect } from "react";
import Course from "./components/Course";
import base_url from "././api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

export default function ViewCourse() {
  useEffect(() => {
    //This is used to change the title of the website
    document.title = "All Courses";
  }, []);

  // function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("Courses Loaded Successfully", {
          theme: "colored",
          position: "top-right",
        });
        setCourses(response.data);
      },
      (error) => {
        //error
        console.log(error);
        toast.error("Something Went Wrong");
      }
    );
  };

  //calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  // After deleting course
  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <>
    <div style={{display:"flex" , justifyContent:"center",alignItems:"center" ,marginTop:"100px"}}> 
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourses} />
          ))
        : <div style={{display:"flex" , justifyContent:"center" , alignContent:"center" ,paddingTop:"50px",margin:"auto", background:"white"}}>
         <h2>No Course Available Right Now</h2>
        </div>}
        </div>
    </>
  );
}
