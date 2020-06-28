import React from 'react';
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <AppFooter />
    </div>
  );
}

export default App;