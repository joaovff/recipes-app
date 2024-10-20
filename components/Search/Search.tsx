import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { InputSearch, Container, SearchContainer } from "./Search.syles";
import { colors } from "../../theme/colors";
import { Recipe } from "../../@types/Recipe";

interface RecipesProps {
  allRecipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

const Search = ({ setRecipes, allRecipes }: RecipesProps) => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (inputText: string) => {
    setInputText(inputText);

    if (inputText.trim() === "") {
      setRecipes(allRecipes);
    } else {
      const filteredRecipes = allRecipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(inputText.toLowerCase());
      });

      setRecipes(filteredRecipes);
    }
  };

  return (
    <Container>
      <SearchContainer>
        <AntDesign
          name="search1"
          size={24}
          color={colors.gray}
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <InputSearch
          placeholder="Search receipes"
          placeholderTextColor={colors.gray}
          onChangeText={handleInputChange}
          value={inputText}
        />
      </SearchContainer>
    </Container>
  );
};

export default Search;
