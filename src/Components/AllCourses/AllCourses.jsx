import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllCourses = ({ courses }) => {
  const { image_url, title } = courses;

  return (
    <div className="course_card_1">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllCourses;
