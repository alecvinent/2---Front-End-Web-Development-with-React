import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

class MenuComponent extends Component {
  //   constructor
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  componentDidMount() {
    console.log("MenuComponent mounted");
  }

  componentWillUnmount(){
    console.log("MenuComponent unmounted");
  }

  //

  onDishSelected(dish) {
    console.log(dish);
    this.setState({
      selectedDish: dish,
    });
  }

  renderDish(dish) {
    if (dish == null) {
      return <div />;
    }

    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1 mt-3">
          <Card onClick={() => this.onDishSelected(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row mt-5">{menu}</div>
        <div className="row mt-5">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default MenuComponent;
