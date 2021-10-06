import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from "./Components/Categories";


function App() {
  return (
    <Router>
      <Route exact path="/categories" component={Categories} />
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