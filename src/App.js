import * as React from "react";
import { useState } from "react";
import "./App.css";
import SingleCard from "./SingleCard.js";
import Grid from "@mui/material/Grid";
import Bar from "./Bar.js";
import products from "./products.json";

function App() {
  const [arrProds, setArrProds] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("all");

  function select(value) {
    setSelected(value);
    console.log(selected);
  }

  function cerca(text) {
    setSearchQuery(text);
    console.log(searchQuery);
  }

  const toggle = (value) => {
    var newArr = products.filter((prodx) => {
      const inStockFilterIn = value === "in" && prodx.availability.stock > 0;
      const outStockFilterOut = value === "out" && prodx.availability.stock <= 0
      return value === "all" || inStockFilterIn || outStockFilterOut 
            
    });
    setArrProds(newArr);
  };
  

  return (
    <div>
      <Bar
        content="text"
        toggle={toggle}
        cerca={cerca}
        select={select}
        selected={selected}
        setSelected={setSelected}
        
      />
      {/* cerca={props.searchQuery} */}
      {/* <Bar content="text" toggle={(value) => toggle(value)} cerca={handleQuery} /> */}
      <Grid container>
        {arrProds
          .filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((produ) => (
            // {arrProds.filter(prod => prod.name.toLowerCase().includes(props.handleQuery.toLowerCase())).map((produ) => (

            <SingleCard
              nome={produ.name}
              prezzo={produ.price.current.value}
              stock={produ.availability.stock}
            />
          ))}
      </Grid>
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
