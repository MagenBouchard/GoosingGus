import React, { Component } from "react";

import "./style.css";
import Body from "../../components/body";
import Blendscard from "../../components/blends";
import Info from "../../components/Info";
import About from "../../components/about";
import Deadline from "../../components/Deadline/index"

class Home extends Component {
  state = {
   
  };

  render() {
    return (
      <div>
     
        <About />
        <Deadline 
        authorized={this.props.authorized} />
        <Body>
          <Blendscard
           authorized={this.props.authorized}
            />
          <Info />
        </Body>
      </div>
    );
  }
}

export default Home;
