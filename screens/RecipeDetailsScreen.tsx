import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { colors } from "../theme/colors";
import { Text } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import { getRecipeDetails } from "../api/getRecipeDetails.d";
import { RecipeDetails } from "../@types/RecipeDetails";
import DetailsHeader from "../components/DetailsHeader/DetailsHeader";
import data from "../data/apiDataTest.json";
import DetailsInfo from "../components/DetailsInfo/DetailsInfo";
type Props = NativeStackScreenProps<RootStackParamList, "RecipeDetails">;

export default function RecipeDetailsScreen({ navigation, route }: Props) {
  const { id } = route.params;
  const [recipe, setRecipe] = useState<RecipeDetails | undefined>();
  /* const recipe: RecipeDetails = data; */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchRecipeDetailsData = async (id: number) => {
    try {
      const response = await getRecipeDetails(id);
      setRecipe(response.data);
    } catch (error) {
      console.error("Error fetching the recipe details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRecipeDetailsData(id);
    }, [])
  );

  return (
    <Container>
      <DetailsHeader recipe={recipe as RecipeDetails} />
      <DetailsInfo recipe={recipe as RecipeDetails} />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${colors.white};
  flex: 1;
`;
