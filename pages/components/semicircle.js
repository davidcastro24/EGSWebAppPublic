import React from "react";
import { Container, OverlayTrigger, Row, Tooltip, Col } from "react-bootstrap";
import { useState } from "react";
import styles from "../../styles/semicircle.module.css";
import { useMediaQuery } from "react-responsive";

const SemiCircle = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const rings = [
    {
      id: 1,
      text: "Integrity",
      info: "Upholding high ethical standards and demonstrating honesty and transparency in all aspects of business, including interactions with customers, partners, and employees.",
      color: "#84A5C1",
      color2: "#A9CFEE",
    },
    {
      id: 2,
      text: "Customer-centric",
      info: "Placing customers at the core of business operations and making their needs and satisfaction the top priority, ensuring exceptional service, personalized experiences, and meaningful engagement.",
      color: "#3A6F9B",
      color2: "#74B0E1",
    },
    {
      id: 3,
      text: "Innovation",
      info: "Encouraging a culture of continuous improvement, embracing creativity, and actively seeking out new ideas and solutions to enhance products, services, and processes, staying ahead in a rapidly evolving market.",
      color: "#17568A",
      color2: "#5EA3DD",
    },
    {
      id: 4,
      text: "Teamwork",
      info: "Promoting collaboration, open communication, and mutual support among employees, fostering a cohesive and inclusive work environment where diverse perspectives are valued, and collective goals are achieved.",
      color: "#125287",
      color2: "#559DDB",
    },
    {
      id: 5,
      text: "Accountability",
      info: "Taking ownership of decisions, actions, and outcomes, being responsible for meeting commitments, and holding oneself and others answerable for delivering results while learning from mistakes and striving for continuous growth.",
      color: "#84A6C2",
      color2: "#AACFEE",
    },
    {
      id: 6,
      text: "Trust",
      info: "Building and nurturing trust with customers, employees, and stakeholders by consistently delivering on promises, maintaining confidentiality, and acting with integrity, which forms the foundation for strong and lasting relationships.",
      color: "#C2D3E1",
      color2: "#D6E8F8",
    },
  ];

  const [selectedRing, setSelectedRing] = useState(null);

  const handleRingHover = (ringId) => {
    setSelectedRing(ringId);
  };

  const getContainerStyle = () => {
    if (selectedRing) {
      const selectedRingObj = rings.find((ring) => ring.id === selectedRing);
      if (selectedRingObj) {
        const color1 = selectedRingObj.color;
        const color2 = selectedRingObj.color2;
        return { background: `linear-gradient(to left, ${color1}, ${color2})` };
      }
    }
    return null;
  };

  return (
    <>
      <Container>
        <h1
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "4rem" }}
        >
          Value-driven <span style={{ color: "#6B9ECA" }}>Excellence</span>: Our{" "}
          <span style={{ color: "#6B9ECA" }}>Commitment</span> to Success
        </h1>
        <br />
        <h4 className="text-center">Hover over each ring in our logo and discover our <span style={{ color: "#6B9ECA" }}>core values</span></h4>
        <br />
        <br /> <br />
        <br />
        <Row>
          <Col md={6}>
            <div className={styles.semicirclecontainer}>
              <div
                className={
                  isMobile ? styles.semicircleMobile : styles.semicircle
                }
              >
                {rings.map((ring) => (
                  <OverlayTrigger
                    key={ring.id}
                    placement="top"
                    overlay={<Tooltip>{ring.text}</Tooltip>}
                  >
                    <div
                      className={`${styles.ring} ${styles[`ring${ring.id}`]} ${
                        selectedRing === ring.id ? styles.active : ""
                      }`}
                      onMouseEnter={() => handleRingHover(ring.id)}
                      onMouseLeave={() => handleRingHover(null)}
                    ></div>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div
              className={`${styles.infocontainer} rounded text-center`}
              style={getContainerStyle()}
            >
              {selectedRing && (
                <div className={styles.info}>
                  <h3
                    className="text-white"
                    style={{ fontWeight: "bold", fontSize: "2.3rem" }}
                  >
                    <span style={{ color: "black" }}>Evolve Value </span>
                    {rings.find((ring) => ring.id === selectedRing).text}
                  </h3>
                  <br />
                  <br />
                  {!isMobile && (
                    <p style={{ fontSize: "1.3rem" }}>
                      {rings.find((ring) => ring.id === selectedRing).info}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SemiCircle;
