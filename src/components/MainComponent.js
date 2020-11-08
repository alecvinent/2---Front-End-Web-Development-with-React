import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";

// shared
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          featured_dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />

        {/* main content */}
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
                selectedDish={this.state.selectedDish}
              />
            )}
          ></Route>
          <Route path="/contactus" component={HomePage}>
            <Contact />
          </Route>
          <Redirect to="/home" />
        </Switch>
        {/* main content */}
        <Footer />
      </div>
    );
  }
}

export default Main;
