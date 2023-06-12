import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import styles from "../styles/about.module.css";
import Banner from "./components/banner";

const Mission = () => {
  return (
    <>
    <Banner text="Our Mission"></Banner>
    <br /><br />
    <Container>
      <h1 style={{ fontWeight: "bold", fontSize: "4rem" }}>
        <span style={{ color: "#6B9ECA" }}>Our Mission :</span> 3...2...1...
        Liftoff!
      </h1>
      <br />
      <Row>
        <Col md={6}>
          <p className={styles.textContent}>
            At Evolve, our mission is to provide affordable and exceptional
            staffing solutions that help businesses grow and positively impact
            communities worldwide.. We strive to be a trusted partner to our
            clients, offering the highest quality resources at an affordable
            cost, and building long-lasting relationships based on integrity and
            mutual respect.
            <br />
            <br />
            We are committed to creating meaningful employment opportunities for
            talented professionals in Latin America, especially from Honduras,
            where we are headquartered, and helping businesses reduce their
            staffing costs without sacrificing quality or productivity. We
            believe that by providing exceptional service to our clients, we can
            contribute to their success and make a positive impact on the global
            economy.
          </p>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card style={{ width: "350px", borderColor: "white" }}>
            <Card.Img variant="top" src="images/launch.jpg" />
            <Card.Body>
              <Card.Text>
                Our journey to the cosmos{" "}
                <span style={{ color: "#6B9ECA" }}>begins now!</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className={styles.textContent}>
            We also believe in giving back to the community and supporting local
            initiatives that promote education, healthcare, and economic
            development. We're committed to being a responsible corporate
            citizen and making a positive impact on the world around us.
            <br />
            <br />
            At Evolve, we're dedicated to our mission, and we work tirelessly to
            ensure that we're delivering exceptional service to our clients
            while making a positive impact on the community.
          </p>
        </Col>
      </Row>
    </Container>
    <br /><br />
    </>
  );
};

export default Mission;
