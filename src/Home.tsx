import * as React from "react";
import SingleCard from "./SingleCard";
import Bar from "./Bar";
import { Product } from "./products";
import Footer from "./Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { filterConst } from "./features/filterSlice";
import { searchConst } from "./features/searchSlice";

const PaddingGrid = styled.div`
  padding-bottom: 70px;
`;

const ContainerGrid = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-flow: row;
  overflow: hidden;
  padding: 8px;
`;

type Props = {
  items: Product[];
};

const Home: React.FC<Props> = ({ items }) => {
  const searchQuery = useSelector(searchConst);
  const selected = useSelector(filterConst);

  return (
    <ContainerGrid>
      <Bar />
      <PaddingGrid>
        <Grid>
          {items
            .filter((prod) => {
              const inStockFilterIn =
                selected === "in" && prod.availability.stock > 0;
              const outStockFilterOut =
                selected === "out" && prod.availability.stock <= 0;
              return selected === "all" || inStockFilterIn || outStockFilterOut              
            })
            .filter((prod) =>
              prod.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((produ) => (
              <SingleCard prod={produ} />
            ))}
        </Grid>
        <Footer />
      </PaddingGrid>
    </ContainerGrid>
  );
};

export default Home;
