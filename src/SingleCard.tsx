import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import BtnGrigio from "./BtnGrigio";
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import { Product } from "./products"

type Props = {
    prod: Product | undefined
}

const SingleCard: React.FC<Props> = ({prod}) => {
// export default function SingleCard({prod}) {
  // var history = useHistory();
  return (prod?
(    <Grid item xs={3} md={3}>
      <Link to={`/prod/${prod.UPC}`} style={{textDecoration: "none"}}>
          <Card sx={{ m: 1}}>
          {/* <CardActionArea href={`/#/prod/${prod.UPC}`}> */}
          <CardActionArea>
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
          </CardActionArea></Card></Link>
    </Grid>
):null  );
}

export default SingleCard;