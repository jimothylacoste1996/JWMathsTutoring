import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I offer 1 to 1 tutoring in person and online.
            <br />
            My hourly rate is £40.
            <br />
            <br />
            Within the sessions we can focus on
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exam technique
            </li>
            <li className="about-activity">
              <ImPointRight /> Basic numeracy
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping students complete homework (past papers)
            </li>
            <li className="about-activity">
              <ImPointRight /> Addressing any weaknesses/ misconceptions
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
