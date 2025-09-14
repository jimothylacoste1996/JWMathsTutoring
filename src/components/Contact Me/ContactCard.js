import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaSms } from "react-icons/fa"; // Changed icon for SMS

function ContactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Interested in booking a tutoring session or have questions?
            <br />
            Feel free to reach out—I'd love to hear from you!
            <br />
            <br />
            You can contact me via:
          </p>
          <ul>
            <li className="about-activity">
              <MdEmail />{" "}
              <a
                href="mailto:jamesmichaelwilson8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jamesmichaelwilson8@gmail.com
              </a>
            </li>
            <li className="about-activity">
              <FaSms />{" "}
              <a
                href="sms:07470450208"
                target="_blank"
                rel="noopener noreferrer"
              >
                Text Message: 07470 450208
              </a>
            </li>
          </ul>
          <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
            I aim to respond within 24 hours. Let’s make learning easier
            together!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
