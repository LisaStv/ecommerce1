import * as React from "react";
import { useParams } from "react-router";
import { Product } from "./products";
import SingleCard from "./SingleCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 25%;
`;

type Props = {
  items: Product[];
}

type Params = {
  id: string;
};

const Dettaglio: React.FC<Props> = ({items}) => {
  const { id } = useParams<Params>();
  return (
    <Grid>
      <SingleCard prod={items.find((prodo) => prodo.UPC === id)} />
    </Grid>
  );
};

export default Dettaglio;
