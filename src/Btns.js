import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Btns({ setSearchQuery, setText }) {
  return (
    <Button
      sx={{ marginTop: 2.3, marginLeft: 2 }}
      variant="contained"
      onClick={(text) => {
        setSearchQuery("");
        setText("");
      }}
    >
      Reset
    </Button>
  );
}
