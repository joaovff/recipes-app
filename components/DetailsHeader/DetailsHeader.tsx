import { Text } from "react-native";
import React from "react";
import { Container, RecipeImage } from "./DetailsHeader.styles";
import { RecipeDetails } from "../../@types/RecipeDetails";

interface RecipeProps {
  recipe: RecipeDetails;
}

const DetailsHeader = ({ recipe }: RecipeProps) => {
  return (
    <Container>
      {recipe ? (
        <>
          <RecipeImage src={recipe.image} />
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </Container>
  );
};

export default DetailsHeader;
