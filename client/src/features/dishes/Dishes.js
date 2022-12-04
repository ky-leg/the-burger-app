import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button, Rating } from "@mui/material"
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import Dish from './Dish'

export default function Dishes({dishes, handleDeleteDish}){
    return (
        dishes ? (
            dishes.map((dish) => (
            <Dish dish={dish}
                handleDeleteDish={handleDeleteDish}/>
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
        )
    )
}
