import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Container } from "./RecipesList.styles";
import { Subtitle } from "../TrendingList/TrendingList.styles";
import { Recipe } from "../../@types/Recipe";
import RecipeItem from "../RecipeItem/RecipeItem";

interface RecipesProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: RecipesProps) => {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Subtitle>Discover all</Subtitle>
      </View>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No trend items available.</Text>}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 20 }}
      />
    </Container>
  );
};

export default RecipesList;
