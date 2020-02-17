import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Blendscard from './components/blends';
import Info from './components/Info';
import blends from './blends.json'

class App extends Component {
  state = {
    blends
  };


  render() {
    return (
      <div>

      <Header /> 
        <Info />
       
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
          </Body>
</div> 

          );
        }
        }
        
        
        export default App;
