import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/dynamicCards.module.css";
import { faBell } from "@fortawesome/free-solid-svg-icons";


const DynamicCards = ({ CardData, handleSelectedTitles, resetSelected }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const handleCardClick = (index) => {
    const handledTitle = CardData[index].title;
    if (selectedCards.includes(index)) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
      setTitle("Removed " + handledTitle);
    } else {
      setSelectedCards([...selectedCards, index]);
      setTitle("Added " + handledTitle);
    }
    handleTitles(handledTitle);
    console.log(selectedTitles);
    setShow(true);
  };

  const handleTitles = (selTitle) => {
    if (selectedTitles.includes(selTitle)) {
      setSelectedTitles(selectedTitles.filter((t) => t !== selTitle));
    } else {
      setSelectedTitles([...selectedTitles, selTitle]);
    }
  };

  useEffect(() => {
    handleSelectedTitles(selectedTitles);
  }, [selectedTitles]);

  useEffect(() => {
    if (resetSelected && selectedTitles.length > 0) {
      setSelectedCards([]);
      setSelectedTitles([]);
      setShow(false);
    }
  }, [resetSelected]);

  return (

      <Container>
        <br />
        {/*<br />
      <h1
        style={{ fontWeight: "bold", fontSize: "4rem" }}
        className="text-center"
      >
        {header}
      </h1>
  <br />*/}
        <br />
        {CardData && <Row>
          {CardData.map((card, index) => (
            <Col key={card.title} xs={12} sm={6} md={3}>
              <Card
                key={card.title}
                className={`mb-4 ${styles["card"]} ${
                  selectedCards.includes(index) ? styles["selectedCard"] : ""
                }`}
                stlye={{ padding: "2rem" }}
                border="light"
                onClick={() => handleCardClick(index)}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    backgroundImage: "url('/images/dark.png')",
                  }}
                  className="text-center"
                >
                  <FontAwesomeIcon
                    icon={card.icon}
                    style={{
                      color: "white",
                      fontSize: "5rem",
                      padding: "2rem",
                    }}
                  ></FontAwesomeIcon>
                </div>
                <Card.Body
                  stlye={{ border: "1px solid white" }}
                  className="text-center"
                >
                  <Card.Title>{card.title}</Card.Title>
                  {/*<Card.Text>{card.text}</Card.Text>*/}
                </Card.Body>
              </Card>
              {index % 4 == 0 ? (
                <>
                  <br />
                  <br />
                </>
              ) : null}
            </Col>
          ))}
        </Row>}
        <Toast
          bg="light"
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          position="top-end"
          autohide
          style={{
            zIndex: 1,
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          <Toast.Header>
            <FontAwesomeIcon icon={faBell} style={{ paddingRight: "5px" }} />
            <strong className="me-auto"> Service</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>{title}</Toast.Body>
        </Toast>
      </Container>

  );
};

export default DynamicCards;

export const SelectedTitles = () => {
  return <DynamicCards />;
};
