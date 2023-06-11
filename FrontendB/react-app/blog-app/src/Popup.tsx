import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type PopupProps = {
  text: string; // A string prop for the text
  togglePopup: () => void; // A function prop for the togglePopup handler
};

function Popup(props: PopupProps) {
  return (
    <Modal show={true} onHide={props.togglePopup} centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={props.togglePopup}>
          Close me
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default Popup;

