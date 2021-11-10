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

const Bar: React.FC = () => {
  return (
    <div>
      <GridContainer>
        <CardMedia src="https://via.placeholder.com/150x80" alt="Placeholder" />
        <GridItem>
          <ButtonGrp />
        </GridItem>
        <GridItem>
          <Searcher/>
          <Btns />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Bar;
