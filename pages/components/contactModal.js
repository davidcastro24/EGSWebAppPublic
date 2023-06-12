import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactModal = ({ showModal, handleModalClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const sendMesage = "Name : " + name + "\n" + "Email : " + email + "\n" + "Message: " + message 
    const data = {
      subject: "New quick message from : " + name,
      message: sendMesage
    }
    sendEmail(data);
    closeModal(event);
  };

  const sendEmail = async (data) =>{
    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Email Sent!");
      } else {
        toast.error("There was an error on our side");
      }
    } catch (err) {
      toast.error("There was an error on our side");
    }
  };
  

  const closeModal = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    handleModalClose();
  };
  return (
    <>
    <Modal
      show={showModal}
      onHide={handleModalClose}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to the evolution!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name <span style={{ color: "red" }}> *</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="what's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <Form.Group controlId="email">
            <Form.Label>Email <span style={{ color: "red" }}> *</span></Form.Label>
            <Form.Control
              type="email"
              placeholder="where do we contact you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <Form.Group controlId="email">
            <Form.Label>Message <span style={{ color: "red" }}> *</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="a penny for your thoughts"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Modal.Body>
      {/*<Modal.Footer>
        <Button variant="outline-danger" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="outline-primary" >
          Submit
        </Button>
  </Modal.Footer>*/}
    </Modal>
    <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default contactModal;
