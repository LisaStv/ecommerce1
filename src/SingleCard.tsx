import * as React from "react";
import BtnGrigio from "./BtnGrigio";
import { Link } from "react-router-dom";
import { Product } from "./products";
import styled from "styled-components";

const Griditem = styled.div`
`

const MyCard = styled.div`
  color: black;
  border: 1px solid lightgrey;
  margin: 7px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  border-radius: 4px;
  box-shadow: lightgrey 0px 2px 1px -1px, lightgrey 0px 1px 3px 0px;

  `

const CardContent = styled.div`
  padding: 20px;
`

const CardMedia = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.div`
  font-size: 1.5rem;;
  line-height: 1.334;
  `
const CardPrice = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  `

type Props = {
  prod: Product | undefined;
};

const SingleCard: React.FC<Props> = ({ prod }) => {
  return prod ? (
    <Griditem>
      <Link to={`/prod/${prod.UPC}`} style={{ textDecoration: "none" }}>
        <MyCard 
        // sx={{ m: 1 }}
        >
          {/* <CardActionArea> */}
            <React.Fragment>
              <CardMedia src="https://via.placeholder.com/350"
              // component="img"
              // height="350"
              // image="https://via.placeholder.com/350"
              // alt="Alt"
              />
              <CardContent>
                <CardTitle>{prod.name}</CardTitle>
                <CardPrice 
                // sx={{ mb: 1.5 }} color="text.secondary"
                >
                  $ {prod.price.current.value}
                </CardPrice>
                {/* <CardActions> */}
                  {prod.availability.stock > 0 && <BtnGrigio />}
                {/* </CardActions> */}
              </CardContent>
            </React.Fragment>
          {/* </CardActionArea> */}
        </MyCard>
      </Link>
    </Griditem>
  ) : null;
};

export default SingleCard;
