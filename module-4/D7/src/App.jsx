import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ShowDeatil from "./components/ShowDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" exact component={ShowDeatil} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
