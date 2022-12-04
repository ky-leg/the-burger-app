import {  Box, FormControl, MenuItem, InputLabel, Select } from "@mui/material"
import { useSelector } from "react-redux"

export default function RestaurantFilterForm({filter, handleChange}){
    const restaurants = useSelector((state) => state.restaurants.entities)
    const locations = restaurants.map((r) => r.location)

    return (
        <Box mt={2}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-restaurant-label">Filter By Location</InputLabel>
                <Select
                labelId="select-neighborhood"
                id="filter"
                value={filter}
                onChange={handleChange}
                label="Neighborhood"
                >
                    {locations ? (locations.map((location, i) => (
                    <MenuItem key={i} value={location}>{location}</MenuItem>
                    ))):""}
                </Select>
            </FormControl>
        </Box>
    )
}