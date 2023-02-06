
import { Container,  FormControl, MenuItem, InputLabel, Select } from "@mui/material"

function RatingsFilterForm({restaurantFilter, neighborhoodFilter, locations, restaurantNames, setNeighborhoodFilter, setRestaurantFilter}) {

    
    return (
        <Container>
            {restaurantFilter === "-"?
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-neighborhood-label">Filter By Neighborhood</InputLabel>
                    <Select
                    labelId="select-neighborhood"
                    id="neighborhoodFilter"
                    value={neighborhoodFilter}
                    onChange={(e) => setNeighborhoodFilter(e.target.value)}
                    label="Neighborhood"
                    >
                        {locations.length>0? 
                        locations.map((location, i) => (<MenuItem value={location} key={i}>{location}</MenuItem>)): ""
                        }
                    </Select>
            </FormControl> : ""
            }
            
            {neighborhoodFilter === "-"?
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>      
                    <InputLabel id="select-restaurant-label">Filter By Restaurant</InputLabel>
                    <Select
                    labelId="select-restaurant"
                    id="restaurantFilter"
                    value={restaurantFilter}
                    onChange={(e) => setRestaurantFilter(e.target.value)}
                    label="Restaurant"
                    >
                        {locations.length>0? 
                        restaurantNames.map((restaurantName, i) => (<MenuItem value={restaurantName} key={i}>{restaurantName}</MenuItem>)):""}
                    </Select>
                </FormControl>:""
            }
            
    </Container> 
    )
}

export default RatingsFilterForm;