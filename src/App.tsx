import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Dettaglio from "./Dettaglio";
import { Product } from "./products";
import {
  Route,
  Switch,
} from "react-router-dom";

const App: React.FC = () => {
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
      fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
        )
    }, [])
  
  return (
      <Switch>
        <Route path="/prod/:id">
          <Dettaglio items={items} />
        </Route>
        <Route path="/">
          <Home items={items}/>
        </Route>
      </Switch>
  );
}


export default App;
