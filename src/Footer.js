import * as React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Grid
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'bottom',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: "#bdbdbd",
        // top: 'auto',
        // right: 0,
        // bottom: 0,
        // left: 'auto',
        // position: 'fixed',  
            }}
    >
      <Link target="_blank" href="#">TWITTER</Link>
      <Link href="#">FACEBOOK</Link>
    </Grid>
  );
}
