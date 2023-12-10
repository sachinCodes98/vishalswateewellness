import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
  const elem = props.elem;
  console.log("elem: ", elem);

  return (
    <div style={{display:"flex", justifyContent: "center", margin:"auto", width:"100%",}}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={elem.text}
        height="auto"
        image={elem.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elem.cardName}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          style={{
            color: "#fff",
            backgroundColor: "#391d94",
            textAlign: "center",
          }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
