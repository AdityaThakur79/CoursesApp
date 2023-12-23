import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "./../api/BootApi";
import { toast } from "react-toastify";
import Course1 from "./Course1.css";

function Course({ course, update }) {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.error("Course Deleted Successfully", {
          theme: "colored",
        });
        update(id);
      },
      (error) => {
        toast.error(" Something Went Wrong", {
          theme: "colored",
        });
      }
    );
  };

  const updateCourse = (course) => {
    axios.put(`${base_url}/courses/${course.id}`).then(
      (response) => {
        console.log(response);
        toast.success("Course Updated SuccessFully", {
          theme: "colored",
        });
      },
      (error) => {
        toast.error(" Something Went Wrong", {
          theme: "colored",
        });
      }
    );
  };
  return (
    <>
      {/* <Card className="text-center"> 
        <CardBody> 
        <CardTitle className="font-weight-bold">{course.id}.{course.title}</CardTitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
            <Button color="danger mx-2 " onClick={() => {deleteCourse(course.id)}}>Delete</Button>
            <Button color="warning" onClick={()=> {updateCourse(course)}}>Update</Button>
        </Container>
        </CardBody>
      </Card> */}

      <div class="card">
        <div class="image">
          <img src="Images/course.jpg" />
        </div>
        <div class="des">
          <h1>
            {course.id}. {course.title}
          </h1>
          <p>{course.description}</p>
          
          <div className="btn">
            <button
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </button>
            <button 
              onClick={() => {
                updateCourse(course);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Course;
