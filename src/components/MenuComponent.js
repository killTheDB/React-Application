/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Dishdetail from "./DishDetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Menu = ({ dishes }) => {
  useEffect(() => {
    console.log("Menu LifeCycle: useEffect as componentDidMount");
  }, []);

  const [appState, setAppState] = useState({ selectedDish: null });

  const onSelectedItemChanged = (d) => setAppState({ selectedDish: d });

  console.log({ msg: "Menu LifeCycle: render; twice in debug mode", dishes });
  var onDishSelect = (d) => {
    onSelectedItemChanged(d);
  };
  return (
    <div className="container">
      <div className="row">{renderRegularDishes(dishes, onDishSelect)}</div>
      <Dishdetail dish={appState.selectedDish} />
    </div>
  );
};

function renderRegularDishes(dishes, onDishSelect) {
  return dishes.map((dish) => {
    return renderRegularDish(dish, onDishSelect);
  });
}

function renderRegularDish(dish, onDishSelect) {
  return (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={() => onDishSelect(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default Menu;
