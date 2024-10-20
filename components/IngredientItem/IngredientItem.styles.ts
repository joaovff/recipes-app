import styled from "styled-components/native";
import { fontSizes } from "../../theme/fontSizes";
import { colors } from "../../theme/colors";

export const Container = styled.View`
  padding: 20px;
  background-color: ${colors.light_gray};
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IngredientName = styled.Text`
  flex-wrap: wrap;
  flex: 1;
  font-size: ${fontSizes.md};
`;

export const IngredientAmount = styled.Text`
  font-size: ${fontSizes.md};
  color: #a9a9a9;
  flex-shrink: 0;
`;
