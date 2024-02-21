import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components 
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import BookUser from "./components/BookUser";

// Configuration React-Toastify 
import "react-toastify/dist/ReactToastify.css"

// Style 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
