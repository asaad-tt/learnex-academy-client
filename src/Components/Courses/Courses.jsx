import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "../Categories/Categories";

const Courses = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <h2>left side categories</h2>
            <Categories></Categories>
          </Col>
          <Col lg="9">
            <h1>courses layout</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
