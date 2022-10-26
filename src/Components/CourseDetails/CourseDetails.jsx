import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { image_url, heading } = course;
  console.log(course);
  return (
    <Container>
      <h1 className="text-center">{heading}</h1>
      <div className="d-flex justify-content-center mb-4">
        <img className="img-fluid" src={image_url} alt="" />
      </div>
      <div className="text-center">
        <Link to="/checkout">
          {" "}
          <Button variant="outline-success">Get premium access</Button>{" "}
        </Link>
      </div>
    </Container>
  );
};

export default CourseDetails;
