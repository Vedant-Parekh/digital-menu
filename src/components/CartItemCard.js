import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

// import SkipNextIcon from "@mui/icons-material/SkipNext";

import PlusMinusCounter from "./PlusMinusCounter";

export default function CartItemCard(props) {
  return (
    <Card className="my-3" sx={{ display: "flex", borderRadius: "20px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.itemName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.description}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Price: ${props.price}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardMedia
          className="mx-4"
          component="img"
          sx={{ width: 150, height: 150 }}
          image={props.imageurl}
          alt="Live from space album cover"
        />
        <PlusMinusCounter />
      </Box>
    </Card>
  );
}

CartItemCard.defaultProps = {
  itemName: "Garam Chai",
  description: "Chef's Special",
  price: "5",
  imageurl: "https://picsum.photos/200/300",
};
