import React, { Component } from 'react';
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';
import { DISHES } from "./shared/dishes";
import './App.css';

const logo = './assets/images/logo.png';
const title = 'Ristorante Con Fusion';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {

    return (
      <div className="App">
        <Navbar dark color="primary" expand="sm" fixed="top">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt={title} height="30" width="41" />
            </NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
