import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    renderLoading: "Navbar is rendering...",
  };

  render() {
    console.log(this.state.renderLoading);
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {/* {this.props.location.pathname === "/details/2" && (
                <Link className="nav-link active" to="/details/2">
                  My favorite!
                </Link>
              )} */}
              {this.props.myFavdish && (
                <Link className="nav-link active" to="/details/2">
                  My favorite!
                </Link>
              )}
              <Link to="/menu">
                <div
                  className={
                    this.props.location.pathname === "/menu"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Menu
                </div>
              </Link>
              <Link to="/reservation">
                <div
                  className={
                    this.props.location.pathname === "/reservation"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Reservation
                </div>
              </Link>
              <Nav.Link>Our Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar); // will give the component exported EXTRA this.PROPS: history, location, match
