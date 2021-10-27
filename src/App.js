import * as React from "react";
import "./App.css";
import Home from "./Home.js";
import Dettaglio from "./Dettaglio.js";
import {
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
      <Switch>
        <Route path="/prod/:id">
          <Dettaglio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;
