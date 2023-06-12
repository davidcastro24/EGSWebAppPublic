import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AreYou = ({ handleWhatIs, show, setShow }) => {
 //const [whatIs, setWhatIs] = useState(false); //if false its company, otherwise candidate

  const handleButtons = (value) => {
    setShow(false);
    handleWhatIs(value);

  };


  return (
    <>
      <Modal show={show} onHide={() => handleButtons(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tell us about yourself!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Let us know if you're a{" "}
            <span style={{ color: "#6B9ECA" }}>Company</span> or a{" "}
            <span style={{ color: "#6B9ECA" }}>Candidate</span>
          </p>
          <p>This way we can adapt this page to your needs!!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => handleButtons(false)}>
            I'm a Company
          </Button>
          <Button variant="success" onClick={() => handleButtons(true)}>
            I'm a Candidate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AreYou;
