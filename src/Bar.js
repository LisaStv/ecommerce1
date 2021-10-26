import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonGrp from "./ButtonGrp.js";
import Searcher from "./Search.js";
import CardMedia from "@mui/material/CardMedia";
import Divider from '@mui/material/Divider';


export default function Bar({ toggle, setSearchQuery, select, selected, setSelected }) {
  const [text, setText] = useState("");
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, alignItems: "center", py: 2, display: "flex" }}>
        <Grid 
            container
            spacing={0}
        >
          <Grid item lg={1}>
            <CardMedia
              component="img"
              width="50"
              height="50"
              image="https://mui.com/static/images/cards/paella.jpg"
              alt="Paella dish"
            />{" "}
          </Grid>
          <Grid item lg={2}></Grid>
          <Grid item lg={5}>
            <ButtonGrp
              toggle={toggle}
              select={select}
              selected={selected}
              setSelected={setSelected}
            />
          </Grid>
          <Grid item lg={4}>
            <Searcher text={text} setSearchQuery={setSearchQuery} setText={setText} />
          </Grid>
          <Divider />
        </Grid>
      </Box>

      {/* </Container> */}
    </React.Fragment>
  );
}
