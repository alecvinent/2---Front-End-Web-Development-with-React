import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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
function RenderComments({ dish }) {
  const comments = dish.comments;

  if (comments == null) {
    return <div />;
  }
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
    </div>
  );
}

// DishDetail component
const DishDetail = (props) => {
  const dish = props.dish;

  if (dish == null) {
    return <div />;
  }

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
        <RenderComments dish={dish} />
      </div>
    </div>
  );
};
export default DishDetail;
