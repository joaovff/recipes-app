import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Header from "../components/Header/Header";
import { getRecipes } from "../api/getRecipes.d";
import { Recipe } from "../@types/Recipe.d";
import Search from "../components/Search/Search";
import { colors } from "../theme/colors";
import Trending from "../components/TrendingList/TrendingList";
import RecipesList from "../components/RecipesList/RecipesList";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  const fetchReceipesData = async () => {
    try {
      const response = await getRecipes();
      setRecipes(response.data);
      setAllRecipes(response.data);
    } catch (error) {
      console.error("Error fetching receipes:", error);
    }
  };

  useEffect(() => {
    fetchReceipesData();
  }, []);
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <Search allRecipes={allRecipes} setRecipes={setRecipes} />
      <Trending recipes={recipes} />
      <RecipesList recipes={recipes} />
    </Container>
  );
}

const Container = styled.ScrollView`
  background-color: ${colors.white};
  height: 100%;
  padding-top: 12%;
`;
