import * as React from "react";
import { useParams } from "react-router";
import products from "./products.json";
import SingleCard from "./SingleCard.js";

export default function Dettaglio() {
  const { id } = useParams()
    return (
        <SingleCard prod={products.find((prodo => prodo.UPC === id ))}
        />
      );
    }
    