import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button, Rating } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import { fetchDishes } from "./dishesSlice";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";



export default function Dish({dish, handleDeleteDish}){
    const params = useParams()
    const dispatch = useDispatch()

    //handling dish delete
    function handleDeleteDish(id){
        fetch(`/dishes/${id}`, {
            method: 'DELETE',
        })
        .then(dispatch(fetchDishes()))
    }

    return(
        <Card key={dish.id} sx={{ minWidth: 345  }}>
            <CardHeader
            title={dish.name}
            subtitle={params.id? "":`Restaurant: ${dish.restaurant.name}`}
            action={
            <IconButton aria-label="settings" onClick={e => handleDeleteDish(dish.id)}>
                <DeleteIcon />
            </IconButton>
            }
            />
            <CardContent>
                <Typography variant="subtitle2">{dish.ratings.length>0 ? `Avg. Rating:`: ""} </Typography>
{dish.ratings ? <Rating name="half-rating-read"  precision={0.1} value={dish.average} readOnly size="small"/>:""}
                <Typography variant="subtitle2">Total Ratings: {dish.ratings.length} </Typography>
            </CardContent>
            <CardActions>
            <Button
                component={Link}
                to={`/ratings/${dish.id}`}
                variant="outlined"
            >
                Read Reviews    
            </Button>
            <Button
                component={Link}
                to={`/ratings/new/${dish.restaurant_id}/${dish.id}/`}
                variant="outlined"
            >
                Review This Dish
            </Button>
            </CardActions>
        </Card>
    )
}