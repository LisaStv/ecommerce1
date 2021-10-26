import * as React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import SingleCard from "./SingleCard.js";
import Bar from "./Bar.js";
import products from "./products.json";
import Footer from "./Footer.js";

export default function Home() {
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
        toggle={toggle}
        setSearchQuery={setSearchQuery}
        // select={select}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid sx={{mb:'auto'}} container minHeight="100vh">
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
      <Footer />
    </div>
  );
}
