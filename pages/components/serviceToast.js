import React from "react";
import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const ServiceToast = ({bg, title, body, show,}) =>{
    return(
        <Toast
        bg={bg}
        onClose={() => setShow(false)}
        show={show}
        delay={2000}
        position="top-end"
        autohide
        style={{ zIndex: 1, position: "fixed", bottom: "20px", right: "20px" }}
      >
        <Toast.Header>
          <FontAwesomeIcon icon={faBell} style={{ paddingRight: "5px" }} />
          <strong className="me-auto">{title}</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
   );
};

export default ServiceToast;