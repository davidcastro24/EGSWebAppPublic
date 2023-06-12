import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import styles from "../../styles/about.module.css";

const WhoIs = () => {
    return(
        <Container>
        <h1 style={{fontWeight:"bold",fontSize:"4rem"}}><span style={{ color: "#6B9ECA" }}>Evolve Global Solutions :</span> Who Are We</h1>
        <br />
        <Row>
          <Col md={6}>
            <p className={styles.textContent}>
              Evolve is a staffing company that provides exceptional resources
              for businesses all around the world. We specialize in sourcing
              highly skilled and qualified professionals from Honduras, where we
              are headquartered, to help businesses reduce their staffing costs
              without sacrificing quality or productivity.
              <br />
              <br />
              At Evolve, we understand the importance of having a talented and
              reliable workforce. That's why we're committed to finding the best
              candidates who not only meet the technical requirements of a job,
              but also have the right attitude and work ethic to fit seamlessly
              into a company's culture.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "250px", borderColor: "white" }}>
              <Card.Img variant="top" src="images/hn.svg" />
              <Card.Body>
                <Card.Text>
                  Evolve Global Solutions & Honduras{" "}
                  <span style={{ color: "#6B9ECA" }}> Rated 5/5 Stars</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-start align-items-start"
          >
            <Card style={{ width: "425px", borderColor: "white" }}>
              <Card.Img variant="top" src="images/find.jpg" />
              <Card.Body>
                <Card.Text>
                  Streamlined the proceess of finding
                  <span style={{ color: "#6B9ECA" }}> the best</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="text-left">
            <p className={styles.textContent}>
              We have a team of experienced recruiters who are experts in their
              respective fields and are dedicated to finding the best candidates
              for each job. We conduct thorough background checks, skills
              assessments, and interviews to ensure that we only present
              top-quality candidates to our clients.
              <br />
              <br />
              Our mission is to help businesses achieve their goals by providing
              them with the best resources at an affordable cost. We work
              closely with our clients to understand their specific needs and
              provide customized solutions that meet their unique requirements.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md={12}>
            <p className={styles.textContent}>
              With years of experience in the staffing industry, we have built a
              reputation for excellence and have established strong
              relationships with our clients. We pride ourselves on our
              professionalism, integrity, and commitment to delivering
              exceptional service.
              <br />
              <br /> At Evolve, we believe that every business deserves access
              to the best resources, regardless of their size or budget. We're
              here to help businesses grow and succeed by providing them with
              the resources they need to thrive.
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default WhoIs;