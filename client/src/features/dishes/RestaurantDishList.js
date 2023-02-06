// eslint-disable-next-line
import { fetchDishes } from "./dishesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, Stack, Box, Typography, Button } from "@mui/material"// eslint-disable-next-line
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import Dishes from './Dishes'

function RestaurantDishList(){
    //redux setup 
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurants.entities)
    const dishes = useSelector((state) => state.dishes.entities)

    //Sorting dishes
    const params = useParams()
    const dishSort = () => {
        if (params.id && dishes.length>0) {
            return dishes.filter(d => d.restaurant_id === parseInt(params.id))}
        else {
            return dishes}
    }
    const displayDishes = dishSort()

    console.log(params.id)
   
    //Restaurant Name 
    const restaurantNameSort = (id="") => {
        if (restaurants.find(r=>r.id === parseInt(params.id)) && id===""){
            return (restaurants.find(r => (r.id === parseInt(params.id))).name)
        }
        else if (restaurants.find(r=>r.id===id)){
            return (restaurants.find(r => (r.id === id)).name)
        }
    }
    const restaurantName = restaurantNameSort()

    useEffect(() => {
        dispatch(fetchDishes())
      }, [dispatch]);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">{restaurantName} Top Rated Dishes</Typography>
            <Stack mt={2} spacing={3}>
                <Dishes dishes={displayDishes}/>
            </Stack>
            <Box mt={2}>
                <Button
                    component={Link}
                    to="/ratings/new"
                    variant="contained"
                >
                    Create New Dish
                </Button>
            </Box>
        </Container>
    )
}

export default RestaurantDishList;