import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import logo from "../netflix-logo.png";
import "../App.css";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand my-1 mx-4" to="/home">
          <img src={logo} width="125" alt="netflixLogo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-3 ">
              <Link
                to="/home"
                className={
                  this.props.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                Series
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                Films
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                New & Popular
              </a>
            </li>
            <li className="nav-item mr-3">
              <Link
                to="/tvshows/:serie"
                className={
                  this.props.location.pathname === "/tvshows/:serie"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                TV Shows
              </Link>
            </li>
          </ul>

          <div className="bell-container">
            <i className="fa fa-bell mr-3 fa-lg"></i>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span className="avatar mr-3">
                <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
              </span>{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Orhan
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Stephanie
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Manuel
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <span className="mini-avatar">
                  <img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png" />
                </span>
                Ermal
              </Dropdown.Item>
              <div className="dropdown-divider"></div>
              <Dropdown.Item href="#/action-5">Manage Profiles</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Accounts</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Back Office</Dropdown.Item>
              <Dropdown.Item>
                <Link to="/">Sign out</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
