import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { RecipeDetails } from "../../@types/RecipeDetails";
import {
  Container,
  DishType,
  TimeContainer,
  Title,
  TitleContainer,
  ScrollContainer,
  RowContainer,
  SectionTitle,
  IngredientLength,
  HowToContainer,
  Instructions,
} from "./DetailsInfo.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../theme/colors";
import IngredientItem from "../IngredientItem/IngredientItem";
import { formatInstructions } from "../../utils/htmlRemover";

interface RecipeProps {
  recipe: RecipeDetails;
}

const DetailsInfo = ({ recipe }: RecipeProps) => {
  return (
    <ScrollContainer>
      <Container>
        {recipe ? (
          <>
            <TitleContainer>
              <Title>{recipe.title}</Title>
              <TimeContainer>
                <MaterialIcons
                  name="access-time"
                  size={35}
                  color={colors.black}
                />
                <Text>{recipe.readyInMinutes} m</Text>
              </TimeContainer>
            </TitleContainer>

            <FlatList
              style={{ paddingBottom: 20 }}
              data={recipe.dishTypes}
              renderItem={(item) => (
                <DishType>
                  <Text>#{item.item}</Text>
                </DishType>
              )}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </Container>

      <ScrollView>
        <Container>
          {recipe ? (
            <>
              <View>
                <RowContainer>
                  <SectionTitle>Ingredients</SectionTitle>
                  <View>
                    {recipe.extendedIngredients.length >= 1 ? (
                      <IngredientLength>
                        {recipe.extendedIngredients.length} items
                      </IngredientLength>
                    ) : (
                      <IngredientLength>
                        {recipe.extendedIngredients.length} item
                      </IngredientLength>
                    )}
                  </View>
                </RowContainer>
                <FlatList
                  data={recipe.extendedIngredients.filter(
                    (recipe, index, self) =>
                      index === self.findIndex((r) => r.id === recipe.id)
                  )}
                  ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                  renderItem={(item) => <IngredientItem item={item} />}
                  keyExtractor={(item) => item.id.toString()}
                  scrollEnabled={false}
                />
              </View>

              {recipe.instructions ? (
                <HowToContainer>
                  <SectionTitle>Instructions:</SectionTitle>
                  <Instructions>
                    {formatInstructions(recipe.instructions)}
                  </Instructions>
                </HowToContainer>
              ) : (
                <HowToContainer>
                  <Instructions>
                    Unfortunately, the creator of the recipe didn't give us the
                    details on how to prepare it, but don't worry, we're working
                    to discover all the secrets behind this wonderful recipe.
                  </Instructions>
                </HowToContainer>
              )}
            </>
          ) : (
            <Text>Loading</Text>
          )}
        </Container>
      </ScrollView>
    </ScrollContainer>
  );
};

export default DetailsInfo;
