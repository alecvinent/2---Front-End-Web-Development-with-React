import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';

//
function RenderMenuItem({ dish, onClick }) {

  return (
    <Card>
      <Link to={{ pathname: "/menu/" + dish.id }}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

// Menu component
const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1 mt-3">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });


  if (props.dishes.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.dishes.errorMessage) {
    return(
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <h4>{props.dishes.errorMessage}</h4>
                </div>
            </div>
        </div>
    );
}
  else {
    //
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Menu
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-5">{menu}</div>
    </div>
  );
  }
};

export default Menu;
