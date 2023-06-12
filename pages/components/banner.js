import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Banner = ({ text }) => {
  return (
    <Container fluid style={{ backgroundImage: "url('/images/banner.png')" }}>
        <br/><br/>
      <Row>
        <Col className="text-center text-white">
          <h1 style={{fontWeight:"bold", fontSize:"3rem"}}>{text}</h1>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col className="text-center text-white">
          <h3>We're Reaching For the Stars, and Taking You With Us.</h3>
        </Col>
      </Row>
      <br/><br/><br/>
    </Container>
  );
};

export default Banner;
