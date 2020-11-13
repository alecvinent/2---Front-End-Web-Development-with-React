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
import { addComment, fetchDishes } from "../redux/ActionCreators";

//
const mapStateToProps = (state) => {  
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments,
  };
};

//
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
});

//
class Main extends Component {
  
  //
  componentDidMount(){
    this.props.fetchDishes();
  };

  //
  render() {
    //
    const HomePage = () => {
      return (
        <Home
          featured_dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrorMessage={this.props.dishes.errorMessage}
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
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          dishLoading={this.props.dishes.isLoading}
          dishErrorMessage={this.props.dishes.errorMessage}

          comments={
            this.props.comments.filter(
              (comment) => comment.dishId === parseInt(match.params.dishId, 10)
            )
          }

          addComment={this.props.addComment}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
