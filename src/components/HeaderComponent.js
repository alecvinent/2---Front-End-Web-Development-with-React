import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  Form,
  FormFeedback,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toogleNav = this.toogleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toogleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  //
  handleLogin(event) {
    this.toggleModal();
    console.log("username: " + this.username.value);
    event.preventDefault();
  }

  //
  render() {
    const logo = "./assets/images/logo.png";

    return (
      <React.Fragment>
        {/* navbar */}
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toogleNav} />
            <NavbarBrand
              href="/"
              title="Ristorante Con Fusion"
              className="mr-auto"
            >
              <img
                src={`/${logo}`}
                alt="Ristorante Con Fusion"
                height="30"
                width="41"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" aria-hidden="true"></i> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" aria-hidden="true"></i>{" "}
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <i className="fa fa-list fa-lg" aria-hidden="true"></i> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i
                      className="fa fa-address-book fa-lg"
                      aria-hidden="true"
                    ></i>{" "}
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-sign-in fa-lg" aria-hidden="true"></i>{" "}
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* ./navbar */}
        <header className="jumbotron">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Or lipsmacking will tickle your
                  culinary senses!
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* modal */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <Form onSubmit={this.handleLogin}>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input name="username" id="username" type="text" innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input name="password" id="password" type="password" innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} /> Remember me?
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </FormGroup>
            </ModalFooter>
          </Form>
        </Modal>
        {/* ./modal */}
      </React.Fragment>
    );
  }
}

export default Header;
