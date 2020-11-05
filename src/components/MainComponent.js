import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }
  
  getSelectedDish(){
    const dish = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish);
    return dish[0];
  }

  render() {

    const logo = "./assets/images/logo.png";
    const title = "Ristorante Con Fusion";

    return (
      <div>
        <Navbar dark color="primary" expand="sm" fixed="top">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt={title} height="30" width="41" />
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.getSelectedDish()} />
      </div>
    );
  }
}

export default Main;
