import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
//import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">KLE TECHNOLOGICAL UNIVERSITY</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">COMPUTER SCIENCE ENGINEERING</strong>
                    <br />
                    {/* <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python */}
                    <br />
                    <strong>Duration:</strong> June 2019-2022
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Projects</strong>:<ol><li>DSA:Prototype of disaster Management in Flood and Drought</li><li>Data Mining: Generation of Underwater and In-Air Images</li><li>WebD:Website on Architectural wonders of India</li><li>ML/AI:Tensorflow App which identifies pest attck on Maize crop</li></ol> </li>
                      <li><strong>Internship</strong>: Worked with Transil as a Junior Web Developer</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;