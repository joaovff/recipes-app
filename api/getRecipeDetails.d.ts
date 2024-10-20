import axios, { AxiosResponse } from "axios";
import { API_KEY } from "@env";
import { RecipeDetails } from "../@types/RecipeDetails.d";

export const getRecipeDetails = (
  id: number
): Promise<AxiosResponse<RecipeDetails>> => {
  return axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&includeInstructions=true&apiKey=${API_KEY}`
  );
};
