import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq py-5">
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can I Get Life Time Access?</Accordion.Header>
            <Accordion.Body>
              Yes, if you enroll the course you will get life time access of our
              system
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Course duration?</Accordion.Header>
            <Accordion.Body>
              Normally we have a schedule of five month . it may add some more
              days if needed
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can i get your support any time?
            </Accordion.Header>
            <Accordion.Body>
              You can get our support system facilities from 11am to 12pm
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
