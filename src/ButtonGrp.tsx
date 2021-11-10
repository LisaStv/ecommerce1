import "./App.css";
import * as React from "react";
import styled from "styled-components";
import Ripple from "./Ripple";
import { useSelector, useDispatch } from 'react-redux'
import { filterConst, setSelected } from './features/filterSlice'

type PropBut = {
  toggledBtn: boolean;
};

const Button = styled.button<PropBut>`
  background-color: ${(props) =>
  props.toggledBtn ? "rgb(25, 118, 210)" : "white"};
  color: ${(props) => (props.toggledBtn ? "white" : "rgb(25, 118, 210)")};
  border: 1px solid rgb(25, 118, 210);
  float: left;
  margin-top: 21px;
  height: 36px;
  letter-spacing: 0.02857em;
  min-width: 64px;
  font-size: 0.875rem;
  box-sizing: border-box;
  align-items: center;
  vertical-align: middle;
  text-transform: uppercase;
  padding: 10px 15px;
  border-radius: 4px 0px 0px 4px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: 0.3s;
  &:last-child {
    border-radius: 0px 4px 4px 0px;
  }
  &:hover {
    background-color: ${(props) => props.toggledBtn ? "#1565c0" : "#f6fafd"};;
  }
  &:active {
    background-color: #b4d2f1;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    transition: 1s;
  }
`;

const ButtonGroup = styled.button`
  margin-left: 90px;
  float: left;
  border: 0px;
  background-color: white;
  content: "";
  clear: both;
  display: table;
`;

const ButtonGrp: React.FC = () => {
  const selected = useSelector(filterConst);
  const dispatch = useDispatch()
  return (
    <ButtonGroup>
      <Button
        toggledBtn={selected === "in"}
        onClick={() => {
          dispatch(setSelected(selected === "all" ? "in" : "all"));
        }}
      >
        IN STOCK
        <Ripple duration={1200} />
      </Button>

      <Button
        toggledBtn={selected === "out"}
        key="two"
        onClick={() => {
          dispatch(setSelected(selected === "all" ? "out" : "all"));
        }}
      >
        OUT OF STOCK
        <Ripple duration={1200} />
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGrp;
