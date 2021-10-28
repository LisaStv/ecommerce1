import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonGrp from "./ButtonGrp";
import Searcher from "./Search";
import CardMedia from "@mui/material/CardMedia";
import Divider from '@mui/material/Divider';
import Btns from "./Btns";

type Props = {
  searchQuery: string;
  setSearchQuery: (term: string) => void;
  selected: string;
  setSelected: (term: string) => void;
}

const Bar: React.FC<Props> = ({ searchQuery, setSearchQuery, selected, setSelected }) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, alignItems: "center", display: "flex", borderBottom: 1 }}>
        <Grid 
            container
            spacing={0}
        >
          <Grid item md={1}>
            <CardMedia
              component="img"
              width="150"
              height="80"
              image="https://via.placeholder.com/150x80"
              alt="Paella dish"
            />
          </Grid>
          <Grid item lg={2}></Grid>

          <Grid item lg={3}>
            <ButtonGrp
              selected={selected}
              setSelected={setSelected}
            />
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={2}>
            <Searcher searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Grid>
          <Grid item lg={1}>
          <Btns setSearchQuery={setSearchQuery} />
            </Grid>
          <Divider />
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Bar