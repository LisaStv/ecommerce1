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
import CardActionArea from '@mui/material/CardActionArea';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

export default function SingleCard({prod}) {
  return (
    <Grid item xs={3} md={3}>
          <Card sx={{ m: 1}}>
          <CardActionArea href={`/#/prod/${prod.UPC}`}>
            <React.Fragment>
              <CardMedia
                component="img"
                height="350"
                image="https://via.placeholder.com/350"
                alt="Alt"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {prod.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  $ {prod.price.current.value}
                </Typography>
                <CardActions>{prod.availability.stock > 0 && <BtnGrigio />}</CardActions>
              </CardContent>
            </React.Fragment>
          </CardActionArea></Card>
    </Grid>
  );
}
