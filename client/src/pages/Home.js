import React from "react";
import { FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import "./style.css";
import Body from "../../components/body";
import Blendscard from "../../components/blends";
import Info from "../../components/Info";
import About from "../../components/about";

function Home() {
  return (
  

<About />
        <Body>
          <Blendscard  />
          <Info />
        </Body>
     
  );
}

export default Home;
