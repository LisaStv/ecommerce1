import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import BtnGrigio from "./BtnGrigio.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

export default function SingleCard({nome, prezzo, stock}) {
  return (
      <Grid item xs={3} md={3}>
        <Item>
          <Card variant="outlined">
            <React.Fragment>
              <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h4" component="div">
                  {nome}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $ {prezzo}
                </Typography>
              </CardContent>
              <CardActions>
                {stock > 0 && <BtnGrigio />}
              </CardActions>
            </React.Fragment>
          </Card>
        </Item>
    </Grid>
  );}