import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

//
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

//
class Main extends Component {
  render() {
    //
    const HomePage = () => {
      return (
        <Home
          featured_dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    //
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
        />
      );
    };

    //
    const AboutPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    //
    const ContactPage = () => {
      return <Contact />;
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
            component={() => <Menu dishes={this.props.dishes} />}
          ></Route>
          <Route path="/menu/:dishId" component={DishWithId} />
          {/* ./ menu */}

          <Route path="/contactus" component={ContactPage} />
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

export default withRouter(connect(mapStateToProps)(Main));
