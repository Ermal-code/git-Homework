import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import DishDetails from "./components/DishDetails";
import Menu from "./components/Menu";

class App extends React.Component {
  state = {
    myFavdish: false,
  };
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" myFavdish={this.state.myFavdish} />
          <Route
            path="/"
            exact
            // render={(props) => (
            //   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
            // )}
            render={(
              props // props are history, location, match
            ) => (
              <Home
                title="Stefano"
                notMyFavdish={() => {
                  this.setState({ myFavdish: false });
                }}
                {...props}
              />
            )} // in this way you can pass your own props along with the router ones
          />
          <Route
            path="/menu"
            exact
            render={(props) => (
              <Menu
                notMyFavdish={() => {
                  this.setState({ myFavdish: false });
                }}
                {...props}
              />
            )}
          />
          <Route
            path="/reservation"
            exact
            render={(props) => (
              <Reservations
                header="Reservations"
                notMyFavdish={() => {
                  this.setState({ myFavdish: false });
                }}
                {...props}
              />
            )}
          />
          <Route
            path="/details/:stefano"
            render={(props) => (
              <DishDetails
                myFavdish={() => {
                  this.setState({ myFavdish: true });
                }}
                notMyFavdish={() => {
                  this.setState({ myFavdish: false });
                }}
                {...props}
              />
            )}
          />
        </Router>
      </>
    );
  }
}

export default App;
