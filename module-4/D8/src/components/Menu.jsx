import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container, Alert } from "react-bootstrap";

class Menu extends React.Component {
  state = {
    dishes: dishes,
  };

  render() {
    return (
      <Container className="mb-4">
        {this.state.dishes.map((dish) => (
          <SingleDish dish={dish} key={dish.id} />
        ))}
        {this.state.dishes.length === 0 && (
          <Alert variant="warning" style={{ marginTop: "10%" }}>
            Work in progress
          </Alert>
        )}
      </Container>
    );
  }
}

export default Menu;
