import styled from "styled-components/native";
import { fontSizes } from "../../theme/fontSizes";
import { colors } from "../../theme/colors";

export const Container = styled.View`
  z-index: -1;
`;

export const Subtitle = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: bold;
`;

export const RecipeImage = styled.Image`
  width: 100%;
  height: 300px;
`;
