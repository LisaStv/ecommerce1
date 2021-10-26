import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonGrp from "./ButtonGrp.js";
import Searcher from "./Search.js";
import CardMedia from "@mui/material/CardMedia";
import Divider from '@mui/material/Divider';
import Btns from "./Btns.js";


export default function Bar({ toggle, setSearchQuery, select, selected, setSelected }) {
  const [text, setText] = useState("");
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, alignItems: "center", display: "flex", borderBottom: 1 }}>
        <Grid 
            container
            spacing={0}
        >
          <Grid item lg={1.2}>
            <CardMedia
              component="img"
              width="150"
              height="80"
              image="https://via.placeholder.com/150x80"
              alt="Paella dish"
            />{" "}
          </Grid>
          <Grid item lg={2.1}></Grid>
          <Grid item lg={3.4}>
            <ButtonGrp
              toggle={toggle}
              select={select}
              selected={selected}
              setSelected={setSelected}
            />
          </Grid>
          <Grid item lg={1.5}></Grid>
          <Grid item lg={2.5}>
            <Searcher text={text} setSearchQuery={setSearchQuery} setText={setText} />
          </Grid>
          <Grid item lg={1}>
          <Btns setSearchQuery={setSearchQuery} setText={setText} />
            </Grid>
          <Divider />
        </Grid>
      </Box>

      {/* </Container> */}
    </React.Fragment>
  );
}
