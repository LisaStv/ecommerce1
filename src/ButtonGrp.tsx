import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

type Props = {
  selected: string;
  setSelected: (term: string) => void;
}

const ButtonGrp: React.FC<Props> = ({ selected, setSelected }) => {
// export default function ButtonGrp({ toggle, selected, setSelected }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 2,
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        <Button
          key="one"
          onClick={() => {
            // toggle(selected === "all" ? "in" : "all");
            setSelected(selected === "all" ? "in" : "all");
          }}
          variant={selected === "in" ? "contained" : "outlined"}
        >
          IN STOCK
        </Button>
        ,
        <Button
          key="two"
          onClick={() => {
            // toggle(selected === "all" ? "out" : "all");
            setSelected(selected === "all" ? "out" : "all");
          }}
          variant={selected === "out" ? "contained" : "outlined"}
        >
          OUT OF STOCK
        </Button>
        ,
        {/* <Button key="three" onClick={() => { toggle("all"); {setSelected("all")};}} variant={selected === "all" ? "contained" : "outlined"}>
          ALL
        </Button> */}
        ,
      </ButtonGroup>
    </Box>
  );
}

export default ButtonGrp;