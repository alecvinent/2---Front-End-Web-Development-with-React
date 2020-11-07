import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent";

//
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// Menu component
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1 mt-3">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  //
  function getSelectedDish(){
    const dish = props.dishes.filter((dish) => dish.id === props.selectedDish);
    return dish[0];
  }
  // 

  return (
    <div className="container">
      <div className="row mt-5">{menu}</div>
      <DishDetail dish={getSelectedDish()} />
    </div>
  );
};

export default Menu;
