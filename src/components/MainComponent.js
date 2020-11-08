import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

// shared
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    //
    const HomePage = () => {
      return (
        <Home
          featured_dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    //
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
        />
      );
    };

    //
    const AboutPage = () => {
      return (
        <About leaders={this.state.leaders} />
      );
    };

    //
    return (
      <div>
        <Header />

        {/* main content */}
        <Switch>
          <Route path="/home" component={HomePage} />
         

          {/* menu */}
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            )}
          ></Route>
          <Route path="/menu/:dishId" component={DishWithId} />
          {/* ./ menu */}

          <Route path="/contactus" />
          <Route path="/aboutus" component={AboutPage} />

          {/* others */}
          <Redirect to="/home" />
          
        </Switch>
        {/* main content */}
        <Footer />
      </div>
    );
  }
}

export default Main;
