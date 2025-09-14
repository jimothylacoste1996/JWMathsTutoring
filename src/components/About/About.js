import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Aboutcard from "./AboutCard";
import ContactCard from "../Contact Me/ContactCard"; // ✅ Import ContactCard

import examPaper from "../../Assets/exampaper.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Tutoring Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Tutoring <strong className="purple"></strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={examPaper}
              alt="about"
              className="img-fluid"
              style={{ borderRadius: "15px" }} // 👈 Rounded corners
            />
          </Col>
        </Row>

        {/* Contact Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact Me <strong className="purple"></strong>
            </h1>
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
