import * as React from "react";
import styled from "styled-components";
import Ripple from "./Ripple";

const Button = styled.button`
  overflow: hidden;
  position: relative;
  border: 0px;
  margin-top: 20px;
  margin-left: 30px;
  letter-spacing: 0.02857em;
  width: 84px;
  font-size: 0.875rem;
  align-items: center;
  vertical-align: middle;
  text-transform: uppercase;
  padding: 10px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: white;
  background-color: rgb(25, 118, 210);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  &:hover {
    background-color: rgb(21, 101, 192);
  }
`;

type Props = {
  setSearchQuery: (term: string) => void;
};

const Btns: React.FC<Props> = ({ setSearchQuery }) => {
  return (
    <div>
      <Button
        onClick={() => {
          setSearchQuery("");
        }}
      >
        Reset <Ripple />
      </Button>
    </div>
  );
};

export default Btns;
