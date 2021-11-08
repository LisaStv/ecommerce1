import * as React from "react";
import { useState } from "react";
import SingleCard from "./SingleCard";
import Bar from "./Bar";
import { products } from "./products";
import Footer from "./Footer";
import styled from "styled-components";

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

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState<"all" | "in" | "out">("all");

  return (
    <ContainerGrid>
      <Bar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selected={selected}
        setSelected={setSelected}
      />
      <PaddingGrid>
        <Grid>
          {products
            .filter((prod) => {
              const inStockFilterIn =
                selected === "in" && prod.availability.stock > 0;
              const outStockFilterOut =
                selected === "out" && prod.availability.stock <= 0;
              return selected === "all" || inStockFilterIn || outStockFilterOut;
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
