import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Blends from './components/blends';
import Info from './components/Info';
function App() {
  return (
    <div>
      <Header/>
      <Info/>
      <Body />
      <Blends />
    </div>
  );
}

export default App;
