import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AllCourses.css";

const AllCourses = ({ courses }) => {
  const { image_url, title, details, price } = courses;

  return (
    <div className="course_card_1">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img_card" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length > 150 ? (
              <p>{details.slice(0, 150) + "..."}</p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
          <p className="price fw-bold">Price: {price}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllCourses;
