import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./Components/Collection";


function App() {
  return (
    <Router>
      <Route exact path="/get-db-collection/:collection" component={Collection} />
    </Router>
  );
}

export default App;

// Page de base
// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //        Learn React
    //      </a>
    //   </header>
    // </div>