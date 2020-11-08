import React from "react";

function Contact(props) {
  return (
    <div className="container">
      <div className="row">
        <ol className="col-12 breadcrumb">
          <li className="breadcrumb-item">
            <a href="./index.html">
              <span className="fa fa-home" aria-hidden="true"></span>
            </a>
          </li>
          <li className="breadcrumb-item active">Contact Us</li>
        </ol>
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
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope"></i>:
                        <a href="mailto:confusion@food.net">confusion@food.net</a>
		           </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+85212345678" role="button"><i className="fa fa-phone" aria-hidden="true"></i> Call</a>
                    <a role="button" className="btn btn-info" href="#" role="button"><i className="fa fa-skype" aria-hidden="true"></i> Skype</a>
                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net" role="button"><i className="fa fa-envelope" aria-hidden="true"></i> Email</a>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Contact;
