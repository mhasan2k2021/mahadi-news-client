import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";

const RightSide = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          variant="outline-primary"
          className=" px-3 py-1 mt-2 mb-2 d-flex align-items-center"
        >
          <FaGoogle className="me-2"></FaGoogle> Google
        </Button>
        <Button
          variant="outline-dark"
          className="px-3 py-1 d-flex align-items-center"
        >
          <FaGithub className="me-2" /> Github
        </Button>
      </ButtonGroup>
      <h6 className="mt-3">log in</h6>
      <ListGroup>
        <ListGroup.Item className="mb-2 d-flex align-items-center">
          <FaFacebook className="me-2" />
          Facebook
        </ListGroup.Item>
        <ListGroup.Item className="mb-2 d-flex align-items-center">
          <FaInstagram className="me-2" />
          Instagram
        </ListGroup.Item>
        <ListGroup.Item className="mb-2 d-flex align-items-center">
          <FaTwitter className="me-2" />
          Twitter
        </ListGroup.Item>
        <ListGroup.Item className="mb-2 d-flex align-items-center">
          <FaLinkedinIn className="me-2"></FaLinkedinIn>LinkedIn
        </ListGroup.Item>
        <ListGroup.Item className="mb-2 d-flex align-items-center">
          <FaWhatsapp className="me-2" />
          Whatsapp
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSide;
