import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import Header from './components/header';
import Body from './components/body';
import Blendscard from './components/blends';
import Info from './components/Info';
import blends from './blends.json'
import About from './components/about';

class App extends Component {
  state = {
    blends
  };


  render() {
    return (
      <div>
        
      <Header /> 
      <About />
        <Body> 
          {this.state.blends.map(blends => (
            <Blendscard
              id={blends.id}
              name={blends.name}
              image={blends.image}
              ingredients={blends.ingredients}
              price={blends.price}
            />
          ))}
          <Info/>
          </Body>
</div> 
          );
        }
        }
        
        export default App;
