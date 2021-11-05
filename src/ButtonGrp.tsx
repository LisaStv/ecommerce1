import "./App.css";
import * as React from "react";
import styled from 'styled-components';
import Ripple from "./Ripple";

type Props = {
  selected: string;
  setSelected: (term: string) => void;
}

type PropBut = {
  toggledBtn: boolean;
}

const Button = styled.button<PropBut>`
  background-color: ${props => props.toggledBtn ? "rgb(25, 118, 210)" : "white"};
  color: ${props => props.toggledBtn ? "white" : "rgb(25, 118, 210)"};
  border: 1px solid rgb(25, 118, 210);
  float:left;
  margin-top: 20px;
  letter-spacing: 0.02857em;
  min-width: 64px;
  font-size: 0.875rem;
  box-sizing: border-box;
  align-items:center;
  vertical-align: middle;
  text-transform: uppercase;
  padding: 10px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  border-radius: 6px 0px 0px 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  &:last-child { border-radius: 0px 6px 6px 0px;  }

`;


const ButtonGroup = styled.button`
  float:left;
  border: 0px;
  background-color: white;
  content: "";
  clear: both;
  display: table;
`


const ButtonGrp: React.FC<Props> = ({ selected, setSelected }) => {
  return (
    // <Box
      // sx={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   marginTop: 2,
      //   "& > *": {
      //     m: 1,
      //   },
      // }}
    // >
      <ButtonGroup 
      // size="small" aria-label="small button group"
      >
        <Button toggledBtn={selected === "in"}
          // key="one"
          onClick={() => {
            // toggle(selected === "all" ? "in" : "all");
            setSelected(selected === "all" ? "in" : "all");
          }}
          // variant={selected === "in" ? "contained" : "outlined"}
        >
          IN STOCK
        </Button>
        
        <Button toggledBtn={selected === "out"}
          key="two"
          onClick={() => {
            // toggle(selected === "all" ? "out" : "all");
            setSelected(selected === "all" ? "out" : "all");
          }}
          // variant={selected === "out" ? "contained" : "outlined"}
        >
          OUT OF STOCK
        </Button>
        
        {/* <Button key="three" onClick={() => { toggle("all"); {setSelected("all")};}} variant={selected === "all" ? "contained" : "outlined"}>
          ALL
        </Button> */}
        
      </ButtonGroup>
    // </Box>
  );
}

export default ButtonGrp;