import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button, check } from "reactstrap";
import base_url from "./api/BootApi";
import { toast } from "react-toastify";
import axios from "axios";
import AddCourse1 from "./AddCourse1.css";

function AddCourse() {
  useEffect(() => {
    //This is used to change the title of the website
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({});

  //FormHandler function
  const handleForm = (e) => {
    console.log("Data", course);
    postDataOnServer(course);
    e.preventDefault();
  };

  //creating function to post on data server
  const postDataOnServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course Added SuccessFully", {
          theme: "colored",
        });
      },
      (error) => {
        console.log(error);
        toast.success("Something Went Worng");
      }
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Add New Course: </h1>
        <div className="flexContainer">
          <div className="formContaier">
            <Form onSubmit={handleForm} className="text-center mt-5">
              <FormGroup >
                <Label for="userId"  style={{textAlign:"center" ,fontWeight:"600"}} >Course ID</Label>
                <Input
                  className="text-center"
                  type="text"
                  placeholder="Enter userId Here"
                  name="userId"
                  id="userId"
                  onChange={(e) => {
                    setCourse({ ...course, id: e.target.value });
                  }}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label for="courseTitle"  style={{textAlign:"center" ,fontWeight:"600"}}>Course Title</Label>
                <Input
                  className="text-center"
                  id="courseTitle"
                  name="courseTitle"
                  placeholder="Enter Course Title Here"
                  type="text"
                  onChange={(e) => {
                    setCourse({ ...course, title: e.target.value });
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText"  style={{textAlign:"center" ,fontWeight:"600"}}>Course Description</Label>
                <Input
                  className="text-center"
                  id="CourseDescription"
                  name="text"
                  type="textarea"
                  placeholder="Enter Course Description Here"
                  style={{ height: 200 }}
                  onChange={(e) => {
                    setCourse({ ...course, description: e.target.value });
                  }}
                />
              </FormGroup>

              <Button type="submit" color="success mx-2">
                Add Course
              </Button>
              <Button
                type="reset"
                onClick={() => {
                  setCourse({ id: "", title: "", description: "" });
                }}
                color="warning"
              >
                Clear
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCourse;
