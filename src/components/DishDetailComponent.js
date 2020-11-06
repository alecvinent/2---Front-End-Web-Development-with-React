import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { date, lorem, random, name } from "faker";

// 
function generateComments(dish) {
  const comments = [];
  if (dish != null) {
    for (let index = 0; index < 5; index++) {
      const date_options = { year: "numeric", month: "short", day: "2-digit" };
      const comment = {
        id: random.uuid(),
        author: name.findName(),
        date: date.recent(5).toLocaleDateString("en-US", date_options),
        description: lorem.lines(2),
        dishId: dish.id,
      };

      comments.push(comment);
    }
  }
  return comments;
}

// 
function RenderDish({ dish }) {
  return (
    <div className="col-12 col-sm-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
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
          <em>{dish.name}</em>
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

  dish.comments = generateComments(dish);

  return (
    <div className="row mt-5">
      <RenderDish dish={dish} />
      <RenderComments dish={dish} />
    </div>
  );
};
export default DishDetail;
