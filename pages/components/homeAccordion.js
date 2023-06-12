import React from "react";
import { Container, Accordion } from "react-bootstrap";

const HomeAccordion = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Who Are We</Accordion.Header>
          <Accordion.Body>
            Evolve is a staffing company that provides exceptional resources for
            businesses all around the world. We specialize in sourcing highly
            skilled and qualified professionals from Honduras, with offices in
            Honduras, we specialize in sourcing highly skilled and qualified
            professionals. We to help businesses reduce their staffing costs
            without sacrificing quality or productivity.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Our Commitment</Accordion.Header>
          <Accordion.Body>
            We are committed to creating meaningful employment opportunities for
            talented professionals in Latin America, especially from Honduras,
            where we are headquartered, and helping businesses reduce their
            staffing costs without sacrificing quality or productivity. We
            believe that by providing exceptional service to our clients, we can
            contribute to their success and make a positive impact on the global
            economy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Our Mission</Accordion.Header>
          <Accordion.Body>
            At Evolve, our mission is to provide affordable and exceptional
            staffing solutions that help businesses grow and positively impact
            communities worldwide.. We strive to be a trusted partner to our
            clients, offering the highest quality resources at an affordable
            cost, and building long-lasting relationships based on integrity and
            mutual respect.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default HomeAccordion;
