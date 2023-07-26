import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import iserach from "../../Assets/Projects/Isearch.png";
import authentication from "../../Assets/Projects/authentication.png";
import cms from "../../Assets/Projects/Screenshot 2023-07-27 011040.png"
import chatApp from "../../Assets/Projects/chatApp.png"
import bug from "../../Assets/Projects/bug.png"


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiReact,
} from "react-icons/di";
import { SiExpress, SiFirebase } from "react-icons/si";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Personal Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* First Project */}
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            display: "flex",
          }}
        >
          <Col md={7} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={cms} alt="card-img" />

              <Card.Body>
                <Card.Title>CMS Web APP</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Designed a user-friendly interface for creating and managing
                  blog posts within the web app.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Features :
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Successfully achieved the objective of creating a MERN content
                  management web app with user authentication, blog creation and
                  management.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Designed a user-friendly interface for creating and managing
                  blog posts within the web app
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tech Stack :
                </Card.Text>

                <Row style={{ whiteSpace: "10px" }}>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiReact />
                      <span>
                        <h6>React</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiNodejs />
                      <span>
                        <h6>Node</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <SiExpress />
                      <span>
                        <h6>Express</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiMongodb />
                      <span>
                        <h6>Mongodb</h6>
                      </span>
                    </span>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://github.com/rajan624/CMS_Front_End"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; Front-End Code
                    </Button>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://cms-web-app-07.web.app/"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; Live
                    </Button>
                  </Col>

                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://github.com/rajan624/CMS_Back_End"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; Back-End Code
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Project */}
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            display: "flex",
          }}
        >
          <Col md={7} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={iserach} alt="card-img" />

              <Card.Body>
                <Card.Title>Isearch Web App</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Designed a web application for rapid search of missing
                  children, utilizing HTML5, CSS3, JavaScript and Firebase.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Features :
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Developed search functions to allow parents to easily find
                  their children.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Optimized the application for seamless and efficient
                  performance.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tech Stack :
                </Card.Text>

                <Row style={{ whiteSpace: "10px" }}>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiJavascript1 />
                      <span>
                        <h6>JavaScript</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiHtml5 />
                      <span>
                        <h6>HTML</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiCss3 />
                      <span>
                        <h6>CSS</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <SiFirebase />
                      <span>
                        <h6>Firebase</h6>
                      </span>
                    </span>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://github.com/rajan624/-Isearch_Web_App"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; View Code
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Third Project */}
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            display: "flex",
          }}
        >
          <Col md={7} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={authentication} alt="card-img" />

              <Card.Body>
                <Card.Title>Authentication App</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A web application that Authenticate user.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Features :
                </Card.Text>
                <Card.Text style={{ textAlign: "justify", lineHeight: "0" }}>
                  Sign-in/Sign-up or Google sign in and interactive Home Page
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  create session of user and store in DB.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tech Stack :
                </Card.Text>

                <Row style={{ whiteSpace: "10px" }}>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiJavascript1 />
                      <span>
                        <h6>JavaScript</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiHtml5 />
                      <span>
                        <h6>HTML</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiCss3 />
                      <span>
                        <h6>CSS</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiNodejs />
                      <span>
                        <h6>Node</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <SiExpress />
                      <span>
                        <h6>Express</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiMongodb />
                      <span>
                        <h6>Mongodb</h6>
                      </span>
                    </span>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://github.com/rajan624/authentication_app"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; View Code
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Third Project */}
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            display: "flex",
          }}
        >
          <Col md={7} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={chatApp} alt="card-img" />

              <Card.Body>
                <Card.Title>Dummy Chat App</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  This is a dummy chat application built using React.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Features :
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  it allows users to search for conversations by contact name,
                  view conversations in the left sidebar, start new
                  conversations, send messages
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Create Conversation Button: Opens a popup and loads all the
                  contacts from a dummy data JSON file. Clicking on a contact
                  starts a new conversation if no conversation was previously
                  started, or opens the existing conversation for that contact.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tech Stack :
                </Card.Text>

                <Row style={{ whiteSpace: "10px" }}>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiReact />
                      <span>
                        <h6>React</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiJavascript1 />
                      <span>
                        <h6>JavaScript</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiHtml5 />
                      <span>
                        <h6>HTML</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiCss3 />
                      <span>
                        <h6>CSS</h6>
                      </span>
                    </span>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://react-chat-app-sepia.vercel.app/"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; Live
                    </Button>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://github.com/rajan624/react_chat_app"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; View Code
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            display: "flex",
          }}
        >
          <Col md={7} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={bug} alt="card-img" />

              <Card.Body>
                <Card.Title>Bug Tracker UI</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Create a nodejs + ejs application to track issues/bugs for a
                  project.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Features :
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  it allows users to Create a new Project.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Create Bug inside Project and assign also.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tech Stack :
                </Card.Text>

                <Row style={{ whiteSpace: "10px" }}>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiJavascript1 />
                      <span>
                        <h6>JavaScript</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiHtml5 />
                      <span>
                        <h6>HTML</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiCss3 />
                      <span>
                        <h6>CSS</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <DiNodejs />
                      <span>
                        <h6>Node</h6>
                      </span>
                    </span>
                  </Col>
                  <Col xs={4} md={2} className="first-proj-icons">
                    <span>
                      {" "}
                      <SiExpress />
                      <span>
                        <h6>Express</h6>
                      </span>
                    </span>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://project-issue-app.vercel.app/"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; Live
                    </Button>
                  </Col>
                  <Col className="view">
                    <Button
                      variant="primary"
                      href="https://github.com/rajan624/project_issue_app"
                      target="_blank"
                    >
                      <BiLinkExternal /> &nbsp; View Code
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;



