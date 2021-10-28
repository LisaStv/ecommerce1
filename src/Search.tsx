import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

type Props = {
  setSearchQuery: (term: string) => void
  searchQuery: string
}

const Searcher: React.FC<Props> = ({ setSearchQuery, searchQuery }) => {
// export default function Searcher({ setSearchQuery, text, setText }) {
  return (
    <Grid>
      {" "}
      <TextField
        fullWidth
        sx={{ marginTop: 1 }}
        className="input"
        id="outlined-basic"
        label="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      />
    </Grid>
  );
}

export default Searcher;