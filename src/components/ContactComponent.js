import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  //
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "telephone",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name] : value
    });
  };
  
  //
  handleSubmit(event){
    console.log('current state is:' + JSON.stringify(this.state));
    alert('current state is:' + JSON.stringify(this.state));
    event.preventDefault();
  };

  //
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">
                <i className="fa fa-home" aria-hidden="true"></i>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
                role="button"
              >
                <i className="fa fa-phone" aria-hidden="true"></i> Call
              </a>
              <a role="button" className="btn btn-info" href="#" role="button">
                <i className="fa fa-skype" aria-hidden="true"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
                role="button"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i> Email
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2} className="col-form-label">
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="First Name"
                    value={this.state.firstname}
                    aria-describedby="firstname-help"
                    onChange={this.handleInputChange}
                  />
                  <FormText color="muted" id="firstname-help">Help text</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={2} className="col-form-label">
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="form-control"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    aria-describedby="lastname-help"
                    onChange={this.handleInputChange}
                  />
                  <FormText color="muted" id="lastname-help">Help text</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telnum" md={2} className="col-form-label">
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    className="form-control"
                    placeholder="Tel. number"
                    value={this.state.telnum}
                    aria-describedby="telnum-help"
                    onChange={this.handleInputChange}
                  />
                  <FormText color="muted" id="telnum-help">Help text</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2} className="col-form-label">
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    aria-describedby="email-help"
                    onChange={this.handleInputChange}
                  />
                  <FormText color="muted" id="email-help">Help text</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check htmlFor="agree">
                      <Input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={this.state.agree}
                        className="form-control"
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    id="contactType"
                    className="form-control"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option value="telephone">Telephone</option>
                    <option value="email">Email</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="message" md={2} className="col-form-label">
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    value={this.state.message}
                    aria-describedby="message-help"
                    onChange={this.handleInputChange}
                  />
                  <FormText color="muted" id="message-help">Help text</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
              <Col md={{ offset: 2, size: 10 }}>
                  <Button type="submit" color="primary">Send Feedback</Button>
                </Col>
              </FormGroup>

            </Form>
          </div>
        </div>
        {/* ./form */}
      </div>
    );
  }
}

export default Contact;
