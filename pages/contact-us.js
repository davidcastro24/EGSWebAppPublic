import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Socials from "./components/socials";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/banner"

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const subject = "New message from " + name;
    const fullMessage =
      "Name : " + name + "\n" + "Email: " + email + "\n" + "Phone: " + (phone
        ? phone
        : "Not provided") + "\n" + "Message: " + message;
    const data = {
      subject: subject,
      message: fullMessage,
    };
    sendMail(data);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendMail = async (data) => {
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

  return (
    <>
    <Banner text="Contact Us"></Banner>
      <br />
      <br />
      <Container>
        <h1 style={{ fontWeight: "bold" }}>
          Ready to <span style={{ color: "#6B9ECA" }}>Evolve</span>?
        </h1>
        <Row>
          <Col>
            <br />

            <h5>
              If you want to partner with{" "}
              <span style={{ color: "#6B9ECA" }}>Evolve Global Solutions </span>{" "}
              please send us a message, we'll contact you right away.
            </h5>
            <br />
            <h5>
              If you're looking for a job and didn't find an opening that
              matches your skills,penis send us a message.
            </h5>
            <br />
            <br />
            <h5>Find us where you need us</h5>
            <br />

            <Socials color="black" />
          </Col>
          <Col>
            <Form onSubmit={submitForm}>
              <Form.Group controlId="contact">
                <Form.Label>
                  Full Name <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                ></Form.Control>
                <br />
                <Form.Label>
                  Email <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                ></Form.Control>
                <br />
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                ></Form.Control>
                <br />
                <Form.Label>
                  Message <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  as="textarea"
                  rows={5}
                  required
                ></Form.Control>
                <br />
              </Form.Group>
              <br />
              <Button type="submit" variant="info">
                Begin my Evolution!
              </Button>
            </Form>
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default ContactUs;
