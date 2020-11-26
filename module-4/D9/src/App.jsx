import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ShowDeatil from "./components/ShowDetail";
import TvShows from "./components/TvShows";
import SingupForm from "./components/SingupForm";
import SubmitedDetails from "./components/SubmitedDetails";

class App extends React.Component {
  state = {
    myInfo: {},
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            render={(props) => (
              <SingupForm
                onClick={(myInfoObj) => this.setState({ myInfo: myInfoObj })}
                {...props}
              />
            )}
          />
          <Route path="/home" exact component={Home} />
          <Route path="/details/:id" exact component={ShowDeatil} />
          <Route path="/tvshows/:serie" exact component={TvShows} />
          <Route
            path="/sumbitedDetails"
            exact
            render={(props) => (
              <SubmitedDetails myInfo={this.state.myInfo} {...props} />
            )}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
