import * as React from "react";
import products from "./products.json";
import SingleCard from "./SingleCard.js";

export default function Dettaglio(props) {
    return (
        <SingleCard prod={products.find((prodo => prodo.UPC === props.match.params.id ))}
        />
      );
    }
    