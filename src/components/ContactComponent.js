import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

class Contact extends Component {
  //
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //
  handleSubmit(values) {
    console.log("current state is:" + JSON.stringify(values));
    // event.preventDefault();
  }

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
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2} className="col-form-label">
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    placeholder="First Name"
                    aria-describedby="firstname-help"
                  />
                  <FormText color="muted" id="firstname-help">
                    Help text
                  </FormText>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="lastname" md={2} className="col-form-label">
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    className="form-control"
                    placeholder="Last Name"
                  />
                  <FormText color="muted" id="lastname-help">
                    Help text
                  </FormText>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="telnum" md={2} className="col-form-label">
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    className="form-control"
                    placeholder="Tel. number"
                  />
                  <FormText color="muted" id="telnum-help">
                    Format: +5353793780, +53 53793780, +53-53793780
                  </FormText>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="email" md={2} className="col-form-label">
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <FormText color="muted" id="email-help">
                    Help text
                  </FormText>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check htmlFor="agree">
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        id="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    id="contactType"
                    className="form-control"
                  >
                    <option value="telephone">Telephone</option>
                    <option value="email">Email</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="message" md={2} className="col-form-label">
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    aria-describedby="message-help"
                    rows="12"
                  />
                  <FormText color="muted" id="message-help">
                    Help text
                  </FormText>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ offset: 2, size: 10 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                  <Control.button
                    model="."
                    disabled={{ valid: false }}
                    color="primary"
                  >
                    Send Feedback 2
                  </Control.button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
        {/* ./form */}
      </div>
    );
  }
}

export default Contact;
