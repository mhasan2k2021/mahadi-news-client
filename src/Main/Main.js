import React from "react";
import Header from "../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/footer/Footer";
import "./main.css";
import LeftSide from "../components/leftSide/LeftSide";
import RightSide from "../components/RightSide/RightSide";

const Main = () => {
  return (
    <div className="body-container">
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
      <div className="footer-container">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
