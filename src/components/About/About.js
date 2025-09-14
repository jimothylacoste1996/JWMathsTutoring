// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Tutoring<strong className="purple"></strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         {/* <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1> */}

//         {/* <Techstack /> */}

//         {/* <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1> */}
//         {/* <Toolstack /> */}

//         {/* <Github /> */}
//       </Container>
//     </Container>
//   );
// }

// export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ContactCard from "../Contact Me/ContactCard"; // ✅ Import ContactCard
import laptopImg from "../../Assets/about.png";
import examPaper from "../../Assets/exampaper.jpg";
import Toolstack from "./Toolstack";

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

        {/* Optional Sections */}
        {/* <Techstack /> */}
        {/* <Toolstack /> */}
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
