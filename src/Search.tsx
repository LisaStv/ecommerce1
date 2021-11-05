import * as React from "react";
import styled from 'styled-components';

const TextField = styled.input`
  font-size: 15px;
  margin-top: 8px;
  width: 60%;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 1.7em;
  padding: 16px;
  vertical-align: middle;
  float:left;
  outline-color: rgb(25, 118, 210);
  `

type Props = {
  setSearchQuery: (term: string) => void
  searchQuery: string
}

const Searcher: React.FC<Props> = ({ setSearchQuery, searchQuery }) => {
  return (
    // <Grid>
      <TextField placeholder="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
    // </Grid>
  );
}

export default Searcher;