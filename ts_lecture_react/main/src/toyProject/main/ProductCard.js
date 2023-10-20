import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard = ({
  product,
  setSelectedProduct,
  selectedProduct,
  selectedProductImg,
  setSelectedProductImg,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);
  const handleChecked = async () => {
    if (checked) {
      const index = selectedProduct.indexOf(product.name);
      const temp = [...selectedProduct];
      const temp2 = [...selectedProductImg];

      temp.splice(index, 1);
      temp2.splice(index, 1);
      setSelectedProduct(temp);
      setSelectedProductImg(temp2);

      setChecked(!checked);
    } else {
      console.log(product.name);
      const temp = [...selectedProduct];
      const temp2 = [...selectedProductImg];
      temp.push(product.name);
      temp2.push(product.img);
      setSelectedProduct(temp);
      setSelectedProductImg(temp2);
      setChecked(!checked);
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={product.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={product.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"></IconButton>
        <IconButton aria-label="share"></IconButton>
        <Checkbox {...label} checked={checked} onChange={handleChecked} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          더 보기
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{product.name}이란:</Typography>
          {product["detail"].map((el, index) => {
            return (
              <Typography paragraph key={index}>
                {el}
              </Typography>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductCard;
