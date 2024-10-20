import axios, { AxiosResponse } from "axios";
import { API_KEY } from "@env";
import { Recipe } from "../@types/Recipe.d";

export const getRecipes = (): Promise<AxiosResponse<Recipe[]>> => {
  return axios.get(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=garlic,salt,butter&number=50&apiKey=${API_KEY}`
  );
};
