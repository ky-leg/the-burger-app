import styled from "styled-components";
import { FormField, Input, Label } from "../../styles";

function NestedDishForm({ dishName, setDishName, dishType, setDishType, dishVegan, setDishVegan}) {
 
  return (
    <Wrapper>
      <WrapperChild>
          <FormField>
            <Label htmlFor="name">Dish Name</Label>
            <Input
              type="text"
              id="dishName"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="type">Dish Type</Label>
            <select 
              id="type"
              value={dishType}
              onChange={(e) => setDishType(e.target.value)}>
                <option key={'-'}>-</option>
                <option key={'appetizer'}>Appetizer</option>
                <option key={'entree'}>Entree</option>
                <option key={'dessert'}>Dessert</option>
                <option key={'drink'}>Drink</option>
              </select>
          </FormField>
          <FormField>
            <Label htmlFor="name">Vegan
              <input
                type="checkbox"
                id="dishVegan"
                value={dishVegan}
                onChange={(e) => setDishVegan(e.target.value)}
              />
            </Label>
          </FormField>
      </WrapperChild>
    </Wrapper>
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
