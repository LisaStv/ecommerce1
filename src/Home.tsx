import * as React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import SingleCard from "./SingleCard";
import Bar from "./Bar";
import {products} from "./products";
import Footer from "./Footer";

const Home: React.FC = () => {
  // const [arrProds, setArrProds] = useState(products);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selected, setSelected] = useState<string>("all");
    // const toggle = (value: string) => {
    //     var newArr = products.filter((prodx) => {
    //       const inStockFilterIn = value === "in" && prodx.availability.stock > 0;
    //       const outStockFilterOut = value === "out" && prodx.availability.stock <= 0
    //       return value === "all" || inStockFilterIn || outStockFilterOut 
                
    //     });
    //     setArrProds(newArr);
    //   };
    
  return (
    <div>
      <Bar
        // toggle={toggle}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid sx={{mb:'auto'}} container minHeight="100vh">
        {products
        .filter((prod) =>{           
        const inStockFilterIn = selected === "in" && prod.availability.stock > 0;
        const outStockFilterOut = selected === "out" && prod.availability.stock <= 0
        return selected === "all" || inStockFilterIn || outStockFilterOut }

        )
        .filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((produ) => (
            // <SingleCard prod={produ}
            <SingleCard prod={produ} />     
              // nome={produ.name}
              // UPC={produ.UPC}
              // prezzo={produ.price.current.value}
              // stock={produ.availability.stock}
            
          ))}
      </Grid>
      <Footer />
    </div>
  );
}


export default Home;
