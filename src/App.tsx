import * as React from "react";
import "./App.css";
import Home from "./Home";
import Dettaglio from "./Dettaglio";
import {
  Route,
  Switch,
} from "react-router-dom";

const App: React.FC = () => {
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
