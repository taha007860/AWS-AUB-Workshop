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
      <p>
          Read more on <a href={"https://practicalwanderlust.com/new-england-road-trip/"}>{"https://practicalwanderlust.com/new-england-road-trip/"}</a>
      </p>
      </Modal.Body>
    </Modal>
  );
}

export default Popup;

