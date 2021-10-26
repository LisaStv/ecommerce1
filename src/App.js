import * as React from "react";
import "./App.css";
import Home from "./Home.js";
import Dettaglio from "./Dettaglio.js";
import {
  HashRouter,
  HashRouter as Router,
  Route, Switch
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
    <Route path="/prod/:id"><Dettaglio /></Route>
    <Route path="/"><Home /></Route>
      </Switch>
  </HashRouter>
  );
}

export default App;
