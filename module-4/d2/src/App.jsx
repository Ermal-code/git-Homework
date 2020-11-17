import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyJumbotron from "./Components/MyJumbotron";
import LatestRelease from "./Components/LastestRelease";

import { render } from "react-dom";

class App extends React.Component {
  // state = {
  //   genre: Fantasy,
  // };

  render() {
    return (
      <div className="App">
        <MyNav />
        <MyJumbotron />
        <LatestRelease />
        <MyFooter />
      </div>
    );
  }
}

export default App;
