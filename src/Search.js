import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Btns from "./Btns.js";

export default function Searcher({ setSearchQuery, text, setText }) {
  return (
    <Grid>
      {" "}
      <TextField
        fullWidth
        sx={{ marginTop: 1 }}
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
      {/* <Btns setSearchQuery={setSearchQuery} setText={setText} /> */}
      {/* <Button
                variant="contained"
                onClick={(text) => {
                  setSearchQuery("");
                  setText("");
                }}
              >
                Reset
              </Button> */}
    </Grid>
  );
}
