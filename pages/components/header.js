import React, { useState, useEffect } from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ContactModal from "./contactModal";
import { useMediaQuery } from "react-responsive";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isNavbarOnTop, setIsNavbarOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isOnTop = window.scrollY < 50;
      setIsNavbarOnTop(isOnTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar
        expand="md"
        sticky="top"
        className={`${styles.transparentNavbar} ${
          isNavbarOnTop ? styles.topNavbar : ""
        }`}
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/images/evolvedosisnavlight.png"
              alt="evolve global solutions logo"
              width={130}
              height={50}
              className={styles.log}
            ></Image>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-collapse">
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="navbar-collapse"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link href="/" style={{ color: "white", fontSize: "1.3rem" }}>
                Home
              </Nav.Link>
              <NavDropdown
                title="About Evolve"
                id="about-us-dropdown"
                bsPrefix={styles.drop}
                className={styles.dropdownMenu}
              >
                <NavDropdown.Item
                  href="/about-us"
                  className={styles.dropdownItem}
                >
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/mission"
                  className={styles.dropdownItem}
                >
                  Our Mission
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/services"
                style={{ color: "white", fontSize: "1.3rem" }}
              >
                Services
              </Nav.Link>
              <Nav.Link href="/careers" style={{ color: "white", fontSize: "1.3rem" }}>
                Careers
              </Nav.Link>
              <Nav.Link href="/contact-us" style={{ color: "white", fontSize: "1.3rem" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {isMobile ? null : (
            <Nav>
              <Nav.Link className="ml-auto" onClick={handleModalOpen}>
                <Button variant="outline-light" style={{ fontSize: "1.1rem" }}>
                  Say A Quick Hello
                </Button>
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      <ContactModal showModal={showModal} handleModalClose={handleModalClose} />
    </>
  );
};

export default Header;
