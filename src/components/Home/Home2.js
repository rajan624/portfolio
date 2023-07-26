import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a passion for coding and enjoy bringing ideas to life in
              the browser. 🤷‍♂️
              <br />
              <br />I am a curious learner and love to code in
              <i>
                <b className="purple"> Javascript </b>
              </i>
              <br />
              <br />I built a feature-rich job portal , emphasizing user experience and SEO techniques.
              Additionally, I automated customer relationship management using
              Django RestFramework, incorporating{" "}
              <b className="purple"> RBAC authentication</b> and{" "}
              <b className="purple">
                {" "}
                Stripe for secure subscription payments.
              </b>{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{borderRadius:"50%"}} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
