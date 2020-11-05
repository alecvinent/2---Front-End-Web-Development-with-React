import React, { Component } from 'react';
import Main from "./components/MainComponent";
import './App.css';

const logo = './assets/images/logo.png';
const title = 'Ristorante Con Fusion';

class App extends Component {

  render() {

    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
