import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonGrp({toggle, selected, setSelected}) {

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
        <Button key="one" onClick={() => { toggle("in"); {setSelected("in")}; }} variant={selected === "in" ? "contained" : "outlined"}>
          IN STOCK
        </Button>
        ,
        <Button key="two" onClick={() => { toggle("out"); {setSelected("out")};}} variant={selected === "out" ? "contained" : "outlined"}>
          OUT OF STOCK
        </Button>
        ,
        <Button key="three" onClick={() => { toggle("all"); {setSelected("all")};}} variant={selected === "all" ? "contained" : "outlined"}>
          ALL
        </Button>
        ,
      </ButtonGroup>
    </Box>
  );
}
