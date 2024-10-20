import React from "react";
import {
  TrendingContainer,
  Container,
  Subtitle,
  Link,
} from "./TrendingList.styles";
import Feather from "@expo/vector-icons/Feather";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../theme/colors";
import { Recipe } from "../../@types/Recipe";
import RecipeItem from "../RecipeItem/RecipeItem";

interface RecipesProps {
  recipes: Recipe[];
}
const Trending = ({ recipes }: RecipesProps) => {
  const sortedRecipesByLikes = recipes
    .slice()
    .sort((a, b) => (a.likes > b.likes ? -1 : 1))
    .slice(0, 5);

  return (
    <TrendingContainer>
      <Container>
        <Subtitle>Trending now 🔥</Subtitle>
      </Container>

      <FlatList
        style={styles.list}
        data={sortedRecipesByLikes}
        renderItem={({ item }) => <RecipeItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No trend items available.</Text>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
      />
    </TrendingContainer>
  );
};

export default Trending;

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  list: {
    marginTop: 20,
  },
});
