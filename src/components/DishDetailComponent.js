import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  Row,
  Col,
  Label,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

//
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModel: false,
      isModelOpen: false,
    };

    this.toggleModel = this.toggleModel.bind(this);
  }

  toggleModel() {
    this.setState({ toggleModel: !this.state.toggleModel });
    this.setState({ isModelOpen: !this.state.isModelOpen });
    console.log(this.state.toggleModel);
  }

  handleSubmit(value) {
    this.props.postComment(
      this.props.dishId,
      value.rating,
      value.author,
      value.comment
    );
  }

  render() {
    return (
      <div>
        <div className="mb-3 ml-3">
          <Button
            onClick={this.toggleModel}
            outline
            color="white"
            style={{ border: "2px solid black" }}
          >
            <span>
              <i className="fa fa-pencil"> </i> Submit Comment
            </span>
          </Button>
        </div>
        <div>
          <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
            <ModalHeader toggle={this.toggleModel}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                <Row>
                  <Col>
                    <Label htmlFor="rating">Rating</Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                      id=".rating"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label htmlFor="author"> Your Name </Label>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Control.text
                      model=".author"
                      name="author"
                      className="form-control"
                      placeholder="Your Name"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Label htmlFor="comment"> Comment </Label>
                    <Control.textarea
                      model=".comment"
                      name="comment"
                      className="form-control"
                      rows="6"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button color="primary"> Submit </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <FadeTransform in transformProps={{
      exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
      <Card>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
        <CardTitle>
          {" "}
          <h2>{dish.name}</h2>
        </CardTitle>
        <CardText>{dish.description}</CardText>
      </Card>
    </FadeTransform>
  );
}

function renderRating(rating) {
  var stars = [];
  for (let index = 0; index < rating; index++) {
    stars.push(<i key={index} className="fa fa-star text-warning" aria-hidden="true"></i>);
  }
  return stars;
}

//
function RenderComments({comments, postComment, dish}) {
  //
  if (comments != null) {
    return (
      <div>
        <ul className="list-unstyled">
          <Stagger in>
            {comments.map((comment) => {
              return (
                <Fade in>
                  <li key={comment.id}>
                    <blockquote className="blockquote text-right" key={comment.id}>
                      <p className="mb-0">Rating: {renderRating(comment.rating)} </p>
                      <p className="mb-0">{comment.comment}</p>
                      <footer className="blockquote-footer"><i className="fa fa-user" aria-hidden="true"></i> {comment.author} <cite title="Source Title">{new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}</cite></footer>
                    </blockquote>                    
                  </li>
                </Fade>
              );
            })}
          </Stagger>
        </ul>
        <CommentForm dishId={dish.id} postComment={postComment} />
      </div>
    );
  }
};
//

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }

  const selectedDish = () => {
    const dish = props.dish;
    const comments = props.comments;
    if (dish) {
      return (
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home"><i className="fa fa-home" aria-hidden="true"></i></Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={dish} />
            </div>
            <Card className="col-12 col-md-5 m-1">
              <CardBody>
                <CardTitle tag="h5">
                  <i className="fa fa-comment-o" aria-hidden="true"></i> Comments about{" "}
                    <em>
                      {props.dish.featured ? (
                        <i className="fa fa-star" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}{" "}
                      {props.dish.name}
                    </em>
                </CardTitle>
              </CardBody>
              <CardBody>
                <RenderComments
                    comments={comments}
                    postComment={props.postComment}
                    dish={props.dish}
                  />
              </CardBody>
              
            </Card>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return <div className="container">{selectedDish()}</div>;
};
export default DishDetail;
