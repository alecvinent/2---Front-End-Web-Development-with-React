import React, { Component } from "react";

import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
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
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        
        {/* main content */}
        <DishDetail dish={this.getSelectedDish()} />
        {/* main content */}
        <Footer />
      </div>
    );
  }
}

export default Main;
