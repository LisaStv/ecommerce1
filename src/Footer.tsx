import * as React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Footer: React.FC = () => {
  return (
    <Grid
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#bdbdbd",
      }}
    >
      <Link target="_blank" href="#">
        TWITTER
      </Link>{" "}
      |<Link href="#">FACEBOOK</Link>
    </Grid>
  );
};

export default Footer;
