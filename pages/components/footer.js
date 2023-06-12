import React from "react";
import Link from "next/link";
import styles from "../../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import Socials from "./socials";
import PagesList from "./pagesList";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <footer className={styles.footer}>
      <Container style={{ paddingBottom: 20 }}>
        <Row>
          <Col xs="auto">
            <h2>Let's Evolve Together!</h2>
            <p>Need excellence and agility in your business? </p>
            <Button
              variant="outline-primary"
              onClick={() => handleClick("contact-us")}
            >
              Contact Us
            </Button>

            <p>
              <br />
              Want a high paying job that values your skills?
            </p>
              <Button variant="primary" onClick={() => handleClick("careers")}>Apply for a Job</Button>
          </Col>
          <Col xs="auto" className="mx-auto">
            <PagesList />
          </Col>
          <Col xs="auto">
            <h2>Contact Us</h2>
            <a
              href="mailto:contact@evolveglobalsolutions.com"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "white", paddingRight: 5 }}
              />
              contact@evolveglobalsolutions.com
            </a>
            <br />
            <a
              href="https://www.enjoytravel.com/us/travel-news/interesting-facts/interesting-facts-honduras"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white", paddingRight: 5 }}
              />
              Honduras
            </a>
            <br />
            <Socials color="white" />
          </Col>
        </Row>
      </Container>
      <div className={styles.copy} style={{ backgroundColor: "black" }}>
        <div className="container" style={{ backgroundColor: "black" }}>
          Copyright &copy; 2023 Evolve Global Solutions - All Rights Reserved.
          <span>
            <a href="https://www.freepik.com/">
              All images designed by Freepik
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
