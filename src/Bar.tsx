import * as React from "react";
import ButtonGrp from "./ButtonGrp";
import Searcher from "./Search";
import Btns from "./Btns";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  border-bottom: 1px solid black;
`;
const GridItem = styled.div``;

const CardMedia = styled.img`
  width: 150px;
  height: 80px;
`;

type Props = {
  searchQuery: string;
  setSearchQuery: (term: string) => void;
  selected: string;
  setSelected: (term: "all" | "in" | "out") => void;
};

const Bar: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  selected,
  setSelected,
}) => {
  return (
    <div>
      <GridContainer>
        <CardMedia src="https://via.placeholder.com/150x80" alt="Placeholder" />
        <GridItem>
          <ButtonGrp selected={selected} setSelected={setSelected} />
        </GridItem>
        <GridItem>
          <Searcher searchQuery={searchQuery} setSearchQuery={setSearchQuery} />{" "}
          <Btns setSearchQuery={setSearchQuery} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Bar;
