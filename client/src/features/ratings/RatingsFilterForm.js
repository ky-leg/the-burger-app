import { useState, useEffect } from "react"; 
import styled from "styled-components";
import {  Form, FormField, Label } from "../../styles";
import { BrowserRouter as Router,Link, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Stack, Card, CardHeader, CardActions, CardContent, Box, Typography, FormControl, MenuItem, InputLabel, Select, Button, Rating } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Ratings from './Ratings'

 

function RatingsFilterForm({restaurantFilter, neighborhoodFilter, locations, restaurantNames, setNeighborhoodFilter, setRestaurantFilter}) {
    
    return (
        <Container>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-neighborhood-label">Filter By Neighborhood</InputLabel>
                    <Select
                    labelId="select-neighborhood"
                    id="neighborhoodFilter"
                    value={neighborhoodFilter}
                    onChange={(e) => setNeighborhoodFilter(e.target.value)}
                    label="Neighborhood"
                    >
                        {locations.map((location, i) => (<MenuItem value={location} key={i}>{location}</MenuItem>))}
                    </Select>
            </FormControl>
        {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>      
            <InputLabel id="select-restaurant-label">Filter By Restaurant</InputLabel>
            <Select
            labelId="select-restaurant"
            id="restaurantFilter"
            value={restaurantFilter}
            onChange={(e) => setRestaurantFilter(e.target.value)}
            label="Restaurant"
            >
                {restaurantNames.map((restaurantName, i) => (<MenuItem value={restaurantName} key={i}>{restaurantName}</MenuItem>))}
            </Select>
        </FormControl> */}
    </Container> 
    )
}


export default RatingsFilterForm;