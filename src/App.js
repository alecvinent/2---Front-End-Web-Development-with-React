import React, { Component } from 'react';
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';
import './App.css';

const logo = './assets/images/logo.png';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar dark color="primary" expand="sm" fixed="top">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt="Ristorante Con Fusion" height="30" width="41" />
            </NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent />
      </div>
    );
  }
}

export default App;
