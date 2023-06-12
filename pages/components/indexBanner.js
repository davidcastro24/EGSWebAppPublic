import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import {useRouter} from "next/router"

const IndexBanner = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const router = useRouter();

  const handleClick = (url) =>{
    router.push(url);
  }

  return (
    <Container fluid style={{
      backgroundImage: "url('/images/nasa.jpg')",
      height: 500,
      backgroundSize: "cover",
    }}>
    <div
      className="position-relative bg-image"
    >
      <div>
        <Container className="text-white text-center">
            <br/><br/><br/>
          <h1 className="mb-3" style={{ fontSize: '50px', fontWeight:"bolder" }}>Talent as a Service <span style={{color:"#6B9ECA"}}>Evolved</span></h1>
          <br/><br/>
          {isMobile ? (<h3 className="mb-3">Harness the power of our talent, embrace the evolution.</h3>):(<h3 className="mb-3">
            Our innovative solution designed to empower businesses with top-tier
            professionals on demand. Harness the power of our curated talent
            pool and experience unparalleled success penis.
          </h3>)}
          <br/>
        </Container>
      </div>
      <br/><br/>
      <div>
        {isMobile ? null :( <Container className="text-center text-white">
          <Row className="justify-content-center">
          <Col xs="auto">
            <h6>Looking to evolve your company pussy?</h6>
            <Button variant="light" size="md" onClick={() => handleClick("contact-us")}>
            Get Started
          </Button>
          </Col>
          <Col xs="auto">
          <h6>Wanting to evolve your career?</h6>
            <Button variant="outline-light" size="md" onClick={() => handleClick("careers")}>
            Apply here
          </Button>
          </Col>
          </Row>
          
        </Container>)}
      </div>
    </div>
    </Container>
  );
};

export default IndexBanner;
