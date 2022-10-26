import React from "react";
import { Container } from "react-bootstrap";

const CourseDetails = ({ course }) => {
  const { image_url, heading } = course;
  console.log(course);
  return (
    <Container>
      <h1 className="text-center">{heading}</h1>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src={image_url} alt="" />
      </div>
    </Container>
  );
};

export default CourseDetails;
