import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";

const Socials = ({color}) => {
    return (
        <Row className="justify-content-left">
                <Col xs="auto">
                  <a
                    href="https://www.linkedin.com/company/evolve-global-solutions/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: color,
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: color, paddingRight: 5 }}
                    />
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.linkedin.com/company/evolve-global-solutions/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: color,
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: color, paddingRight: 5 }}
                    />
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.linkedin.com/company/evolve-global-solutions/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: color,
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: color, paddingRight: 5 }}
                    />
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.linkedin.com/company/evolve-global-solutions/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: color,
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      fontSize: "1.2rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: color, paddingRight: 5 }}
                    />
                  </a>
                </Col>
              </Row>
    )
}

export default Socials;