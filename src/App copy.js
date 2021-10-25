import * as React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ButtonGrp from "./ButtonGrp.js";
import SearchField from "./Search.js";
import Btns from "./Btns.js";
import Cards from "./Cards.js";
import SingleCard from "./SingleCard.js";
import Grid from "@mui/material/Grid";
import Bar from "./Bar.js";

function App() {
  return (
    <div>
      <Bar content="wewe" />
      <Grid container>
        {/* <Grid item xs={3} md={3}> */}
        <SingleCard nome="aaaa" prezzo="bbbb" />
        {/* </Grid> */}
        {/* <Grid item xs={3} md={3}> */}
        <SingleCard nome="ccc" prezzo="bdddbbb" />
        <SingleCard nome="ccc" prezzo="bdddbbb" />
        <SingleCard nome="ccc" prezzo="bdddbbb" />
        <SingleCard nome="ccc" prezzo="bdddbbb" />
        {/* </Grid> */}
      </Grid>
      {/* <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <SingleCard nome="aaaa" prezzo="bbbb" />
        <SingleCard nome="ccc" prezzo="bdddbbb" />
        {/* <Cards nome1="Turbine™ Rotor" prezzo1="206" />
        <Cards nome="Ciao" prezzo="340" /> */}
      {/* </Box>
      </Container>
    </React.Fragment> */}
      {/* <Grid item xs={3} md={3}>   */}
      {/* <Cards nome1="Turbine™ Rotor" prezzo1="206" />
        <Cards nome="Ciao" prezzo="340" />
      </Grid> */}{" "}
      */}
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
