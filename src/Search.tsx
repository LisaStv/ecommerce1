import * as React from "react";
import styled from "styled-components";

const TextField = styled.input`
  cursor: default;
  font-size: 16px;
  margin-top: 8px;
  width: 59%;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 1.7em;
  padding: 11px 16px 16px 16px;
  vertical-align: middle;
  float: left;
  outline-color: rgb(25, 118, 210);
`;

type Props = {
  setSearchQuery: (term: any) => void;
  searchQuery: any;
};

const Searcher: React.FC<Props> = ({ setSearchQuery, searchQuery }) => {
  return (
    <TextField
      placeholder="search"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      value={searchQuery}
    />
  );
};

export default Searcher;
