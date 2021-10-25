import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

export default function Searcher({setSearchQuery, text, setText}) {

  return (
    <Grid
    container
    align="center"
    justify="center"
  >    <TextField
      className="input"
      // value={term}
      id="outlined-basic"
      label="Outlined"
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setText(e.target.value);
      }}
      value={text}
    />
            {/* <Stack spacing={2} direction="row"> */}
              <Button
                variant="contained"
                onClick={(text) => {
                  setSearchQuery("");
                  setText("");
                }}
              >
                Reset
              </Button>
            {/* </Stack> */}


  </Grid>  );
}
