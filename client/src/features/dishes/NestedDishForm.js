import styled from "styled-components";
import { FormField, Input, Label } from "../../styles";
import { Stack, Checkbox, Container, Box, Typography, FormControl, FormControlLabel, MenuItem, InputLabel, Select, Button, TextField } from "@mui/material"


function NestedDishForm({ dishName, setDishName, dishType, setDishType, dishVegan, setDishVegan}) {
 
  return (
    <Stack mt={2} spacing={3}>
          <FormControl>
              <Typography variant="subtitle1">Dish Name</Typography>
              <TextField id="dishName" value={dishName} label="Dish Name" variant="outlined" onChange={(e) => setDishName(e.target.value)}/>
          </FormControl>
          <FormControl>
          <Typography variant="subtitle1">Dish Type</Typography>
            <Select 
              id="type"
              value={dishType}
              onChange={(e) => setDishType(e.target.value)}>
                <MenuItem value='-' key={'-'}>-</MenuItem>
                <MenuItem value='appetizer' key={'appetizer'}>Appetizer</MenuItem>
                <MenuItem value='entree' key={'entree'}>Entree</MenuItem>
                <MenuItem value='dessert' key={'dessert'}>Dessert</MenuItem>
                <MenuItem value='drink' key={'drink'}>Drink</MenuItem>
              </Select>
          </FormControl>
          <FormControl>
            <FormControlLabel control={<Checkbox value={dishVegan} onChange={(e) => setDishVegan(e.target.value)} />} label="Spicy?" />
          </FormControl>
    </Stack>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NestedDishForm;
