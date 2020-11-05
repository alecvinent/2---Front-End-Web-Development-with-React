import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { date, lorem, random, name } from "faker";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidUpdate(prevProps){
    if (this.props.dish !== prevProps.dish) {
      this.setState({
        comments: this.generateComments(this.props.dish)
      });
    }
  }

  generateComments(dish){
    const comments = [];
    if (dish != null) {
      const dish = this.props.dish;
      for (let index = 0; index < 5; index++) {
        const date_options = { year: "numeric", month: "short", day: "2-digit" };
        const comment = {
          id: random.uuid(),
          author: name.findName(),
          date: date.recent(5).toLocaleDateString("en-US", date_options),
          description: lorem.lines(2),
          dishId: dish.id
        };
  
        comments.push(comment);
      }
    }   
    return comments;
  }

  render() {
    return this.renderDish(this.props.dish);
  }

  renderDish(dish) {
    if (dish == null) {
      return <div />;
    }

    return (
      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-sm-12 col-md-5 m-1">
          <div>
            <h4>
              <i className="fa fa-comment-o" aria-hidden="true"></i> Comments
              about <em>{dish.name}</em>
            </h4>
          </div>
          <div>{this.renderComments(dish)}</div>
        </div>
      </div>
    );
  }

  renderComments(dish) {
    const comments = this.state.comments;
    if (comments == null) {
      return <div />;
    }
    //
    return (
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
    );
  }
}

export default DishDetail;
