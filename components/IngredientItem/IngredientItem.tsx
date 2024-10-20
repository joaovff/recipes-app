import React from "react";
import {
  Container,
  IngredientName,
  IngredientAmount,
} from "./IngredientItem.styles";

interface RecipeProps {
  item: any;
}

const IngredientItem = ({ item }: RecipeProps) => {
  return (
    <Container>
      <IngredientName numberOfLines={2}>
        {item.item.name.charAt(0).toUpperCase() + item.item.name.slice(1)}
      </IngredientName>
      <IngredientAmount>
        {item.item.amount.toString().replace(".", ",")} {item.item.unit}
      </IngredientAmount>
    </Container>
  );
};

export default IngredientItem;
