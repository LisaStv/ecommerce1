import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import BtnGrigio from "./BtnGrigio.js";
import { useState } from "react";
import SingleCard from "./SingleCard.js";
import Bar from "./Bar.js";
import products from "./products.json";

export default function Home({cerca, select}) {
  const [arrProds, setArrProds] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("all");
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
        setSearchQuery={setSearchQuery}
        select={select}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid container>
        {arrProds.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((produ) => (
            <SingleCard prod={produ}
              // nome={produ.name}
              // UPC={produ.UPC}
              // prezzo={produ.price.current.value}
              // stock={produ.availability.stock}
            />
          ))}
      </Grid>
    </div>
  );
}
