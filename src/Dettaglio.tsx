import * as React from "react";
import { useParams } from "react-router";
import { products } from "./products";
import SingleCard from "./SingleCard";
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  width: 25%;  `

type Params = {
  id: string;
}

const Dettaglio: React.FC = () => {
  const { id } = useParams<Params>()
    return (
      <Grid> 
      <SingleCard prod={products.find((prodo => prodo.UPC === id ))} />
      </Grid>
      );
    }
    
    
export default Dettaglio;