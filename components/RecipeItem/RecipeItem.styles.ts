import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { fontSizes } from "../../theme/fontSizes";
import { colors } from "../../theme/colors";
const { width } = Dimensions.get("window");

const itemWidth = (width - 60) / 2;

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: ${itemWidth}px;
  align-items: center;
  justify-content: flex-start;
`;

export const RecipeImage = styled.Image`
  width: ${itemWidth}px;
  height: 200px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${fontSizes.md};
  font-weight: bold;
  width: ${itemWidth}px;
  margin-top: 8px;
`;

export const RatingContainer = styled.View`
  padding: 8px;
  background-color: rgba(000, 000, 000, 0.5);
  position: absolute;
  top: 2%;
  left: 2%;
  z-index: 1;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Likes = styled.Text`
  color: ${colors.white};
  margin-left: 4px;
  font-weight: bold;
`;
