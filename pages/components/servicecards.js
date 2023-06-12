import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHeadset,
  faGlobeAsia,
  faMagnifyingGlassDollar,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/index.module.css";

const ServiceCards = () => {
  const [cardFlips, setCardFlips] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const handleCardHover = (cardName, isHovered) => {
    setCardFlips((prevFlips) => ({
      ...prevFlips,
      [cardName]: isHovered,
    }));
  };

  return (
    <Container>
      <h1 style={{ fontWeight: "bold" }} className="text-center">
        Step into the Future: Embrace
        <span style={{ color: "#6B9ECA" }}> Evolution</span> with Our Services
      </h1>
      <br /> <br />
      <br />
      <br />
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <Col>
          <Card
            className={` ${styles["cardcontainer"]} ${
              cardFlips.card1 ? styles.flipped : ""
            } }`}
            onMouseEnter={() => handleCardHover("card1", true)}
            onMouseLeave={() => handleCardHover("card1", false)}
          >
            <div className={styles.cardinner}>
              <div className={styles.cardfront}>
                <div
                  style={{
                    backgroundColor: "black",
                    border: "solid 1px  black",
                    backgroundImage: "url('/images/dark.png')",
                  }}
                  className="text-center"
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{
                      color: "white",
                      fontSize: "6rem",
                      padding: "2rem",
                    }}
                  ></FontAwesomeIcon>
                </div>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      IT Services{" "}
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
              <div className={styles.cardback}>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      IT Services{" "}
                    </span>
                    <br />
                    <br />
                    Our team of experienced IT professionals is committed to
                    providing high-quality, reliable services that will help you
                    stay ahead of the competition.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            className={` ${styles["cardcontainer"]} ${
              cardFlips.card2 ? styles.flipped : ""
            } }`}
            onMouseEnter={() => handleCardHover("card2", true)}
            onMouseLeave={() => handleCardHover("card2", false)}
          >
            <div className={styles.cardinner}>
              <div className={styles.cardfront}>
                <div
                  style={{
                    backgroundColor: "black",
                    border: "solid 1px  black",
                    backgroundImage: "url('/images/dark.png')",
                  }}
                  className="text-center"
                >
                  <FontAwesomeIcon
                    icon={faGlobeAsia}
                    style={{
                      color: "white",
                      fontSize: "6rem",
                      padding: "2rem",
                    }}
                  ></FontAwesomeIcon>
                </div>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Virtual Presence
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
              <div className={styles.cardback}>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      Virtual Presence
                    </span>
                    <br />
                    <br />
                    We help businesses establish a strong online presence that
                    engages their audience and drives traffic to their website.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            className={` ${styles["cardcontainer"]} ${
              cardFlips.card3 ? styles.flipped : ""
            } }`}
            onMouseEnter={() => handleCardHover("card3", true)}
            onMouseLeave={() => handleCardHover("card3", false)}
          >
            <div className={styles.cardinner}>
              <div className={styles.cardfront}>
                <div
                  style={{
                    backgroundColor: "black",
                    border: "solid 1px  black",
                    backgroundImage: "url('/images/dark.png')",
                  }}
                  className="text-center"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassDollar}
                    style={{
                      color: "white",
                      fontSize: "6rem",
                      padding: "2rem",
                    }}
                  ></FontAwesomeIcon>
                </div>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Business Services
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
              <div className={styles.cardback}>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      Business Services
                    </span>
                    <br />
                    <br />
                    Our business services are designed to help businesses
                    streamline their operations and increase efficiency. Working
                    closely with our clients we identify areas for improvement
                    and develop customized solutions.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            className={` ${styles["cardcontainer"]} ${
              cardFlips.card4 ? styles.flipped : ""
            } }`}
            onMouseEnter={() => handleCardHover("card4", true)}
            onMouseLeave={() => handleCardHover("card4", false)}
          >
            <div className={styles.cardinner}>
              <div className={styles.cardfront}>
                <div
                  style={{
                    backgroundColor: "black",
                    border: "solid 1px  #5dade2",
                    backgroundImage: "url('/images/dark.png')",
                  }}
                  className="text-center"
                >
                  <FontAwesomeIcon
                    icon={faHeadset}
                    style={{
                      color: "white",
                      fontSize: "6rem",
                      padding: "2rem",
                    }}
                  ></FontAwesomeIcon>
                </div>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      Remote Support
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
              <div className={styles.cardback}>
                <Card.Body>
                  <Card.Text className="text-center">
                    <span
                      style={{
                        color: "#6B9ECA",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      Remote Support
                    </span>
                    <br />
                    <br />
                    Designed to provide businesses with the support they need,
                    no matter where they are located. We ensure that our clients
                    receive fast and reliable support when they need it most.
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceCards;
