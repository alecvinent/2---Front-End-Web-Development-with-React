import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Col } from "reactstrap";
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
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  //
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  //
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  //
  validateFields(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    // firstname
    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = "First name should be greather than 3 characters";
    } else if (this.state.touched.firstname && firstname.length > 10) {
      errors.firstname = "First name should be less than 10 characters";
    }

    // lastname
    if (this.state.touched.lastname && lastname.length < 3) {
      errors.firstname = "Last name should be greather than 3 characters";
    } else if (this.state.touched.lastname && lastname.length < 10) {
      errors.lastname = "Last name should be greather than 10 characters";
    }

    // telnum. Pe.: +5353793780, +53 53793780, +53-53793780
    // const telnum_reg = new RegExp(
    //   "/(?<country_code>+[1-9]{2}?)(?<separator>[()s.-]?)((?<number>.*))/"
    // );

    // const telnum_reg = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;

    // const telnum_reg = /^\d+$/;
    const telnum_reg = /((\+)?[1-9]{2})(.*)/;
    if (this.state.touched.telnum && !telnum_reg.test(telnum)) {
      errors.telnum = "Wrong format";
    }

    // email
    // const email_reg = new RegExp("^((?!.)[w-_.]*[^.])(@w+)(.w+(.w+)?[^.W])$");
    // const email_reg = new RegExp("/\S+@\S+\.\S+/");
    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Wrong format";
    }

    return errors;
  }

  //
  handleSubmit(event) {
    // console.log("current state is:" + JSON.stringify(this.state));
    event.preventDefault();
  }

  //
  render() {
    const errors = this.validateFields(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

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
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    aria-describedby="firstname-help"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstname")}
                  />
                  <FormText color="muted" id="firstname-help">
                    Help text
                  </FormText>
                  <FormFeedback>{errors.firstname}</FormFeedback>
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
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    aria-describedby="lastname-help"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("lastname")}
                  />
                  <FormText color="muted" id="lastname-help">
                    Help text
                  </FormText>
                  <FormFeedback>{errors.lastname}</FormFeedback>
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
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    aria-describedby="telnum-help"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("telnum")}
                  />
                  <FormText color="muted" id="telnum-help">
                    Format: +5353793780, +53 53793780, +53-53793780
                  </FormText>
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2} className="col-form-label">
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    aria-describedby="email-help"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormText color="muted" id="email-help">
                    Help text
                  </FormText>
                  <FormFeedback>{errors.email}</FormFeedback>
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
                  <FormText color="muted" id="message-help">
                    Help text
                  </FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ offset: 2, size: 10 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
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
