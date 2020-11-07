// components
import React, { Component } from 'react';
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";


// css
import './App.css';

// 
class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
