import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";


function Certificate() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={5} className="tech-icons award-para">
        <h3 className="award-cont">Data Structure in Java </h3>
        <h5 className="award-cont">Coding Ninjas</h5>
        <Button href="https://certificate.codingninjas.com/view/44d9d7880ca3dd42">
          <BiLinkExternal /> &nbsp; View
        </Button>
      </Col>
      <Col xs={2} md={5} className="tech-icons award-para">
        <h3 className="award-cont">Career Camp | React </h3>
        <h5 className="award-cont">Coding Ninjas</h5>

        <Button href="https://certificate.codingninjas.com/view/785009614a4229ab">
          <BiLinkExternal /> &nbsp; View
        </Button>
      </Col>
      <Col xs={2} md={5} className="tech-icons award-para">
        <h3 className="award-cont">Back End | Node.js </h3>
        <h5 className="award-cont">Coding Ninjas</h5>
        <Button href="https://certificate.codingninjas.com/view/41624b8e177286db">
          <BiLinkExternal /> &nbsp; View
        </Button>
      </Col>
      <Col xs={2} md={5} className="tech-icons award-para">
        <h3 className="award-cont">Front End | JavaScript </h3>
        <h5 className="award-cont">Coding Ninjas</h5>

        <Button href="https://certificate.codingninjas.com/view/4b321778aa84ac03">
          <BiLinkExternal /> &nbsp; View
        </Button>
      </Col>
    </Row>
  );
}


export default Certificate;
