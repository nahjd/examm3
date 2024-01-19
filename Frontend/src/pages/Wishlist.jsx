import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist, fetchData, addWishlist } from '../redux/slices/mealSlice'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.meal.data)
    const wishlist = useSelector((state) => state.meal.wishlist)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    console.log(wishlist);



    return (

        <>
            <h1>Wishlist</h1>
            {wishlist && wishlist.map((item) => {
                return (
                    <Card sx={{ maxWidth: 345 }}>
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
                            <Button
                                onClick={() => {
                                    dispatch(deleteWishlist(item))
                                }}
                                size="small"><FaRegHeart /></Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )

            })}

        </>



    )
}

export default Wishlist