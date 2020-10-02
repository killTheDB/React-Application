/* eslint-disable no-unused-vars */
import React, { Component } from "react";
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Dishdetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="Container">
            <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        {/* <Menu /> */}
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
