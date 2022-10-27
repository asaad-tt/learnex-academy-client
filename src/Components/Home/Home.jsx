import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <section className="hero_section">
          <Row>
            <Col lg="6">
              <div className="hero_leftside ">
                <div className="hero_text">
                  <h2 className="mb-3">
                    <span className="learnex">Learnex Academy</span> brings you
                    a course of excellence
                  </h2>
                  <h4 className="mb-4">
                    for Beginners and Experienced Learners
                  </h4>
                  <p className="mb-4">
                    Learn to build entire web applications from start to finish
                    with MongoDB, Express.js, React.js and Node.js (MERN stack).
                    you can explore video editing, blog writing, wordpress,
                    email marketing, digital marketing and many more. Tech world
                    is waiting for you . so let's sharpen your skill...
                  </p>
                </div>
                <div>
                  <Link to="/courses">
                    {" "}
                    <button type="button" class="hero_btn">
                      Explore our courses
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid rounded shadow-lg"
                  src="https://i.ibb.co/7QQLKQZ/hero.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Home;
