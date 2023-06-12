import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  Button,
  Row,
  Col,
  Offcanvas,
  Form,
  Badge,
} from "react-bootstrap";
//import DynamicCards from "./components/DynamicCards";
import { useMediaQuery } from "react-responsive";
import ITData from "./api/ITData";
import VPData from "./api/VPData";
import BSData from "./api/BSData";
import RSData from "./api/RSData";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/banner";
//import AreYou from "./components/AreYou";

const AreYou = dynamic(() => import("./components/AreYou"), {
  ssr: false,
});

const DynamicCards = dynamic(() => import("./components/DynamicCards"));

const Services = () => {
  const [ITTitles, setITTitles] = useState([]);
  const [VPTitles, setVPTitles] = useState([]);
  const [BSTitles, setBSTitles] = useState([]);
  const [RSTitles, setRSTitles] = useState([]);
  const [whatIs, setWhatIs] = useState(false); //false if company, true if candidate
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [show, setShow] = useState(true);
  const [resetSelected, setResetSelected] = useState(false);
  const [showOff, setShowOff] = useState(false);

  const handleCloseOff = () => {
    setShowOff(false);
    handleReset();
  };

  const handleShowOff = () => {
    if (
      ITTitles.length + VPTitles.length + RSTitles.length + BSTitles.length <
      1
    ) {
      toast.error("Please choose at least one service");
    } else {
      if (
        whatIs &&
        ITTitles.length + VPTitles.length + RSTitles.length + BSTitles.length >
          3
      ) {
        toast.error("Maximum of 3 services can be chosen");
      } else {
        setShowOff(true);
      }
    }
  };

  const handleSelectedTitlesIT = (selectedTitles) => {
    setITTitles(selectedTitles);
  };

  const handleSelectedTitlesVP = (selectedTitles) => {
    setVPTitles(selectedTitles);
  };

  const handleSelectedTitlesBS = (selectedTitles) => {
    setBSTitles(selectedTitles);
  };

  const handleSelectedTitlesRS = (selectedTitles) => {
    setRSTitles(selectedTitles);
  };

  const handleWhatIs = (value) => {
    setWhatIs(value);
  };

  const handleReset = () => {
    setResetSelected(true);
    setTimeout(() => {
      setResetSelected(false);
    }, 2000);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const name = event.target.elements.contactName.value;
    const email = event.target.elements.contactEmail.value;
    const comments = event.target.elements.contactComments.value;
    const candOrComp = whatIs ? "Candidate" : "Company";
    let message = "Name: " + name + "\n" + "Email: " + email + "\n" + "Type: " + candOrComp + "\n" + "Message: " + comments + "\n";
    message += "\n" + "It Services: " + ITTitles.join(" , ");
    message += "\n" + "Virtual Presence Services: " + VPTitles.join(" , ");
    message += "\n" + "Business Services: " + BSTitles.join(" , ");
    message += "\n" + "Remote Support Services: " + RSTitles.join(" , ");
    const data = {
      subject : "New message from " + name + " using services page",
      message: message
    }
    sendEmail(data);
    handleCloseOff();
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
  

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
    <Banner text="Services" />
      <Container>
        {show && (
          <AreYou handleWhatIs={handleWhatIs} show={show} setShow={setShow} />
        )}
        <Row>
          <Col md={12}>
            <br />
            <br />
            <h1 style={{ fontWeight: "bold", fontSize: "4rem" }}>
              <span style={{ color: "#6B9ECA" }}>Embrace The Evolution : </span>{" "}
              Our Services
            </h1>
            <br />
            {whatIs ? (
              <h4>
                Feel free to choose maximum 3 services that describe your
                skills.
              </h4>
            ) : (
              <h4>
                Feel free to choose any service you wish to hire or adquire more
                information about it
              </h4>
            )}
            <h6>
              <span style={{ color: "#6B9ECA" }}>
                Once you've selected what you want, click on send message penis
              </span>
            </h6>
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                handleShowOff();
              }}
            >
              Send Message
            </Button>
            {isMobile ? (
              <>
                <br />
                <br />
              </>
            ) : null}
            {!whatIs ? (
              <Button
                variant="danger"
                className={isMobile ? "" : "float-end"}
                onClick={() => handleReset()}
              >
                UnSelect All
              </Button>
            ) : null}
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>IT Services</Accordion.Header>
              <Accordion.Body>
                {ITData && (
                  <DynamicCards
                    CardData={ITData}
                    handleSelectedTitles={handleSelectedTitlesIT}
                    resetSelected={resetSelected}
                  />
                )}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Virtual Presence Services</Accordion.Header>
              <Accordion.Body>
                {VPData && <DynamicCards
                  CardData={VPData}
                  handleSelectedTitles={handleSelectedTitlesVP}
                  resetSelected={resetSelected}
                />}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Business Services</Accordion.Header>
              <Accordion.Body>
                {BSData && <DynamicCards
                  CardData={BSData}
                  handleSelectedTitles={handleSelectedTitlesBS}
                  resetSelected={resetSelected}
                />}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Remote Support Services</Accordion.Header>
              <Accordion.Body>
                {RSData && <DynamicCards
                  CardData={RSData}
                  handleSelectedTitles={handleSelectedTitlesRS}
                  resetSelected={resetSelected}
                />}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
      <Offcanvas show={showOff} onHide={handleCloseOff}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Evolve Global Solutions appreciates your interest
            <br />
            <br />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5 style={{ fontWeight: "bold" }}>You have selected</h5>
          <br />
          {ITTitles.length > 1 && <h6>IT Services</h6>}
          {ITTitles.map((badge) => (
            <Badge key={badge} pill bg="primary">
              {badge}
            </Badge>
          ))}
          {VPTitles.length > 1 && (
            <>
              <br />
              <br />
              <h6>Virtual Presence Services</h6>
            </>
          )}
          {VPTitles.map((badge) => (
            <Badge pill bg="primary">
              {badge}
            </Badge>
          ))}
          {BSTitles.length > 1 && (
            <>
              <br />
              <br />
              <h6> Business Services</h6>
            </>
          )}
          {BSTitles.map((badge) => (
            <Badge pill bg="primary">
              {badge}
            </Badge>
          ))}
          {RSTitles.length > 1 && (
            <>
              <br />
              <br />
              <h6>Remote Support Services</h6>
            </>
          )}
          {RSTitles.map((badge) => (
            <Badge pill bg="primary">
              {badge}
            </Badge>
          ))}
          <br />
          <br />
          <h5 style={{ fontWeight: "bold" }}>
            Please let us know how we can contact you
          </h5>
          <br />

          <Form onSubmit={submitForm}>
            <Form.Group controlId="contactService">
              <Form.Label>
                Name <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                name="contactName"
                type="text"
                placeholder="what's your name?"
                required
              />
              <br />
              <Form.Label>
                Email <span style={{ color: "red" }}> *</span>{" "}
              </Form.Label>
              <Form.Control
                name="contactEmail"
                type="email"
                placeholder="where do we contact you?"
                required
              />
              <br />
              <Form.Label>Comments <span style={{ color: "red" }}> *</span></Form.Label>
              <Form.Control
                name="contactComments"
                as="textarea"
                rows={3}
                placeholder="additional comments"
                required
              />
            </Form.Group>
            <br />
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <br />
      <br />
    </>
  );
};

export default Services;
