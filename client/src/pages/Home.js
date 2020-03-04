import React from "react";
import { FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import "./style.css";
import Body from "../../components/body";
import Blendscard from "../../components/blends";
import Info from "../../components/Info";
import About from "../../components/about";

function Home({logout}) {
  return (
    <Container fluid>

<About />
        <Body>
          <Blendscard  />
          <Info />
        </Body>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to the Home Page</h1>
            <FormBtn
              text="Logout"
              onClick={logout}
              classes="btn-primary logoutBtn"
            />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
