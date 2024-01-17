import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Basket.scss";
import { fetchData, deleteBasket } from "./../../redux/slices/mealSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.meal.basket);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(basket);

  return (
    <>
      <div className="cards">
        {basket &&
          basket.map((item, index) => {
            return (
              <>
                <Card key={index} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image={item.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.about}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button
                      onClick={() => {
                        dispatch(deleteBasket(item));
                      }}
                      size="small"
                    >
                      <MdDelete style={{ color: "red", fontSize: "25px" }} />
                    </Button>
                  </CardActions>
                </Card>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Basket;
