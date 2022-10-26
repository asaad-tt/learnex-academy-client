import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AllCourses from "../AllCourses/AllCourses";
import "./Courses.css";

import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);

  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <h2>left side categories</h2>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <div className="course_card gap-3">
              {allCourses.map((courses) => (
                <AllCourses
                  key={courses.category_id}
                  courses={courses}
                ></AllCourses>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
