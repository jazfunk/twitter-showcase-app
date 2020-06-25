import React from 'react';
import logo from './logo.svg';
import TwitterShowcase from "./TwitterShowcase"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <TwitterShowcase />     
      </header>
    </div>
  );
}

export default App;