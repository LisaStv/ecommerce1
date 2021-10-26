import * as React from "react";
import "./App.css";
import Home from "./Home.js";
import Dettaglio from "./Dettaglio.js";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/prod/:id" component={Dettaglio} />
  </Router>
  );
}

export default App;
