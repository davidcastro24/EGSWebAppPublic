import React, { useState } from "react";
import IndexBanner from "./components/indexBanner";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ServiceCards from "./components/servicecards";
import EvolveFunTitle from "./components/evolveFunTitle";
import HomeCarousel from "./components/homeCarousel";
import HomeAccordion from "./components/homeAccordion";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <>
      <IndexBanner />
      <br /><br />
      <Container>
        <h1 style={{ fontWeight: "bold" }}>
          Evolving <span style={{color:"#6B9ECA"}}> Minds</span>, Transforming <span style={{color:"#6B9ECA"}}> Businesses</span>
        </h1>
        <br /><br />
        <span style={{ fontSize: "1.3rem" }}>
          <p>
            Finding the right talent can be complex, time-consuming, and
            uncertain. You deserve a stress-free, seamless, and exceptional
            staffing experience. We offer you the magic of simplicity,
            trustworthiness, and consistency. Things that ensure that your business
            thrives with the right talent by your side.
          </p>
        </span>
      </Container>
      <br /><br />
      <Container>
        <Card
          style={{
            border: "1px dotted black",
            padding: "10px",
            backgroundImage: "url('/images/dark.png')",
          }}
        >
          <Card.Body className="blockquote mb-0 text-center">
            <p
              style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Transformation begins with the power of the human mind!
            </p>
          </Card.Body>
          <Card.Footer className="text-white text-center">
            And a little help from us
          </Card.Footer>
        </Card>
      </Container>
      <br /><br />
      <br /><br />
      <EvolveFunTitle/>
      <br /><br />
      <HomeAccordion/>
      <br />
      <br />
      <br />
      <br />
      <HomeCarousel/>
      <br />
      <br />
      <br /><br />
      <ServiceCards/>
      <br /><br />
    </>
  );
};

export default Home;
