import * as React from "react";
import { useState } from "react";
import "./App.css";
import Home from "./Home.js";
import SingleCard from "./SingleCard.js";
import Grid from "@mui/material/Grid";
import Bar from "./Bar.js";
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
