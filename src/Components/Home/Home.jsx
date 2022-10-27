import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <section className="hero_section">
          <Row>
            <Col lg="6">
              <div className="hero_leftside ">
                <h2>Full Stack Web Development Course — MERN Stack</h2>
                <h3>for Beginners and Experienced Learners</h3>
                <p>
                  Learn to build entire web applications from start to finish on
                  one of the most versatile tech stacks : MongoDB, Express.js,
                  React.js and Node.js (MERN stack)
                </p>
                <div>
                  <button type="button" class="btn btn-warning">
                    Warning
                  </button>
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
