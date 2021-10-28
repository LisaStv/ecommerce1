import * as React from "react";
import Button from "@mui/material/Button";

type Props = {
  setSearchQuery: (term: string) => void
}

const Btns: React.FC<Props> = ({setSearchQuery }) => {
  return (
    <Button
      sx={{ marginTop: 2.3, marginLeft: 2 }}
      variant="contained"
      onClick={() => {
        setSearchQuery("");
      }}
    >
      Reset
    </Button>
  );
}

export default Btns;