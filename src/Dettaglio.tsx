import * as React from "react";
import { useParams } from "react-router";
import { products } from "./products";
import SingleCard from "./SingleCard";

type Params = {
  id: string;
}

const Dettaglio: React.FC = () => {
  const { id } = useParams<Params>()
    return (
      <SingleCard prod={products.find((prodo => prodo.UPC === id ))} />
      );
    }
    
    
export default Dettaglio;