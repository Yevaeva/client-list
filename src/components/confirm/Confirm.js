import { Modal, Button } from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

export default function Confirm(props) {
  return (
    <Modal centered show={true} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete client?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Close</Button>
        <Button variant="danger" onClick={props.removeClient}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

Confirm.propTypes = {
  removeClient: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
