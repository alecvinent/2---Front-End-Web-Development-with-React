import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Label,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";

// custom validators
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length > len;
const required_option = (val) => val && val > 0;

//
function RenderDish({ dish }) {
  return (
    <div className="col-12 col-sm-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={`/${dish.image}`} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

//
function renderRating(rating) {
  var stars = [];
  for (let index = 0; index < rating; index++) {
    stars.push(<i key={index} className="fa fa-star" aria-hidden="true"></i>);
  }
  return stars;
}

//
function RenderComments({ comments, dish, addComment }) {
  //
  return (
    <div className="col-12 col-sm-12 col-md-5 m-1">
      <div>
        <h4>
          <i className="fa fa-comment-o" aria-hidden="true"></i> Comments about{" "}
          <em>
            {dish.featured ? (
              <i className="fa fa-star" aria-hidden="true"></i>
            ) : (
              ""
            )}{" "}
            {dish.name}
          </em>
        </h4>
      </div>
      <div>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.description}</p>
              <p>
                -- {comment.author}, {comment.date}
              </p>
              <p>Rating: {renderRating(comment.rating)} </p>
            </li>
          ))}
        </ul>
      </div>
      <CommentForm dishId={dish.id} addComment={addComment} />
    </div>
  );
}

//
class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalCommentOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //
  toggleModal() {
    this.setState({
      isModalCommentOpen: !this.state.isModalCommentOpen,
    });
  }

  //
  handleSubmit(values) {
    this.toggleModal();
    console.log("current state is:" + JSON.stringify(values));
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-sm-12 col-md m-1">
          <Button outline onClick={this.toggleModal}>
            <i className="fa fa-pencil" aria-hidden="true"></i> Submit Comment
          </Button>
        </div>

        {/* modal */}

        <Modal isOpen={this.state.isModalCommentOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <LocalForm onSubmit={(v) => this.handleSubmit(v)}>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  name="rating"
                  id="rating"
                  className="form-control"
                  validators={{
                    required_option,
                  }}
                >
                  <option value="-1">---Select rate--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".rating"
                  show="touched"
                  messages={{
                    required_option: "Please, select a rate",
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  type="text"
                  name="author"
                  id="author"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: "Must be greather than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  name="comment"
                  id="comment"
                  className="form-control"
                  rows="6"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".comment"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter className="justify-content-start">
              <Button color="primary" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </LocalForm>
        </Modal>
        {/* ./modal */}
      </React.Fragment>
    );
  }
}

export { CommentForm };

// DishDetail component
const DishDetail = (props) => {
  //
  const dish = props.dish;
  const comments = props.comments;

  if (dish == null) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }

  //
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errorMessage}</h4>
        </div>
      </div>
    );
  } else if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">
                <i className="fa fa-home" aria-hidden="true"></i>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row mt-5">
          <RenderDish dish={dish} />
          <RenderComments
            comments={comments}
            dish={dish}
            addComment={props.addComment}
          />
        </div>
      </div>
    );
  }
};

export default DishDetail;
