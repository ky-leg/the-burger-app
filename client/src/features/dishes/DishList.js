// import { useState } from "react"; 
import styled from "styled-components";// eslint-disable-next-line
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { fetchDishes } from "./dishesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button, Rating } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function DishList( { onSetDish } ) {
    //redux setup 
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => state.restaurants.entities)
    const dishes = useSelector((state) => state.dishes.entities)

    console.log(onSetDish)
    //sorting dishes
    const params = useParams()
    const dishSort = () => {
        if (params.id && dishes>0) {
            return dishes.filter(d => d.restaurant_id === parseInt(params.id))
        }
        else {
            return dishes
        }
    }
    const displayDishes = dishSort()
   
    //
    const restaurantName = (id="") => {
        if (restaurants.find(r=>r.id === parseInt(params.id)) && id===""){
            return (restaurants.find(r => (r.id === parseInt(params.id))).name)
        }
        else if (restaurants.find(r=>r.id===id)){
            return (restaurants.find(r => (r.id === id)).name)
        }
    }
    
    //handling dish delete
    function handleDeleteDish(id){
        fetch(`/dishes/${id}`, {
            method: 'DELETE',
        })
        .then(dispatch(fetchDishes()))
    }

    useEffect(() => {
        dispatch(fetchDishes())
      }, [dispatch]);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">{restaurantName()} Top Rated Dishes</Typography>
            <Stack mt={2} spacing={3}>
            {displayDishes.length > 0 ? (
                displayDishes.map((dish) => (
   
                        <Card key={dish.id} sx={{ minWidth: 345  }}>
                            <CardHeader
                            title={dish.name}
                            subtitle={params.id? "":`Restaurant: ${restaurantName(dish.restaurant_id)}`}
                            action={
                                <IconButton aria-label="settings" onClick={e => handleDeleteDish(dish.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                            />
                            <CardContent>
                                <Typography variant="subtitle2">{dish.ratings.length>0 ? `Avg. Rating:`: ""} </Typography>
                                {dish.ratings.length>0 ? <Rating name="half-rating-read"  precision={0.1} value={dish.average} readOnly size="small"/>:""}
                                <Typography variant="subtitle2">Total Ratings: {dish.ratings.length} </Typography>
                            </CardContent>
                            <CardActions>
                            {dish.ratings.length>0 ? 
                                    (
                                        <Button
                                            component={Link}
                                            to={`/dish/${dish.id}/reviews`}
                                            variant="contained"
                                        >
                                            Read Reviews    
                                        </Button>
                                    )
                                    : ""}
                                        <Button
                                            component={Link}
                                            to={`/ratings/new/${dish.restaurant_id}/${dish.id}/`}
                                            variant="contained"
                                        >
                                            Review This Dish
                                        </Button>
                            </CardActions>
                        </Card>
                ))
            ) : (
                <>
                <h2>No Dishes Found</h2>
                <Button 
                    component={Link}
                    to="/ratings"
                    variant="contained"
                >
                    Back To Homepage
                </Button>
                </>
            )}
            </Stack>
            <Box mt={2}>
                <Button
                    component={Link}
                    to="/dishes/new"
                    variant="contained"
                >
                    Create New Dish
                </Button>
            </Box>
        </Container>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Dish = styled.article`
  margin-bottom: 24px;
`;

export default DishList;