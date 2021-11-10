import * as React from "react";
import styled from "styled-components";
import Ripple from "./Ripple";
import { useDispatch } from 'react-redux'
import { setSearchQuery } from './features/searchSlice'

const Button = styled.button`
  overflow: hidden;
  position: relative;
  border: 0px;
  margin-top: 17px;
  margin-left: 15px;
  letter-spacing: 0.02857em;
  width: 80px;
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
  transition: 0.3s;
  &:hover {
    background-color: rgb(21, 101, 192);
  }
  &:active {
    background-color: #5b93d3;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    transition: 1s;
  }
`;

const Btns: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(setSearchQuery(""));
        }}
      >
        Reset <Ripple />
      </Button>
    </div>
  );
};

export default Btns;
