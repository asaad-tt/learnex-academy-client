import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = ({ course }) => {
  const { _id, image_url, heading, details, instractor, rating } = course;

  const { name, img } = instractor;
  const { number } = rating;

  console.log(course);
  return (
    <div className="pb-5">
      <Container>
        <h1 className="text-center mb-3">{heading}</h1>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <p className="intractor_name">
              Instractor: <span>{name}</span>
            </p>
            <p className="instractor_img">
              <img className="" src={img} alt="" />
            </p>
          </div>
          <div>
            <button className="pdf_button">Download Pdf</button>
          </div>
        </div>
        <p className="ratings">Ratings: {number}</p>
        <div className="d-flex justify-content-center mb-4">
          <img className="img-fluid" src={image_url} alt="" />
        </div>
        <p className="details">
          Description: <span>{details}</span>
        </p>

        <div className="text-center get_btn">
          <Link to={`/checkout/${_id}`}>
            {" "}
            <Button className="fw-bold" variant="outline-success">
              Get premium access
            </Button>{" "}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
