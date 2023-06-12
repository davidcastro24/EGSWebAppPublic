import React from "react";
import Link from "next/link";
import styles from "../../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faBellConcierge,
  faBriefcase,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";

const PagesList = () =>{
    return(
        <>
        <h2>Pages</h2>
            <ListGroup
              bsPrefix={`list-unstyled ${styles["link-list"]}`}
              bg="black"
            >
              <ListGroup.Item className="mb-2">
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} className={styles.faws} />
                  Home
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link
                  href="/about-us"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className={styles.faws}
                  />
                  About Us
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link
                  href="/services"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBellConcierge}
                    className={styles.faws}
                  />
                  Services
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faBriefcase} className={styles.faws} />
                  Careers
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="mb-2">
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  <FontAwesomeIcon icon={faMessage} className={styles.faws} />
                  Contact Us
                </Link>
              </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default PagesList;