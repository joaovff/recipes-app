import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Recipe } from "../../@types/Recipe";
import {
  Container,
  Likes,
  RatingContainer,
  RecipeImage,
  Title,
} from "./RecipeItem.styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../theme/colors";
import { kFormater } from "../../utils/kFormater";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface RecipesProps {
  item: Recipe;
}

const RecipeItem = ({ item }: RecipesProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { width } = Dimensions.get("window");
  const itemWidth = (width - 40) / 2;

  return (
    <Container
      onPress={() => navigation.navigate("RecipeDetails", { id: item.id })}
      style={{ width: itemWidth }}
    >
      <RatingContainer>
        <AntDesign name="like1" size={15} color={colors.white} />
        <Likes>{kFormater(item.likes)}</Likes>
      </RatingContainer>
      <RecipeImage src={item.image} />
      <Title numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Title>
    </Container>
  );
};

export default RecipeItem;
