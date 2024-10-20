import styled from "styled-components/native";
import { fontSizes } from "../../theme/fontSizes";
import { colors } from "../../theme/colors";

export const ScrollContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
  border-radius: 35px 35px 0px 0px;
  margin-top: -30px;
  overflow: hidden;
`;

export const Container = styled.View`
  padding: 24px 24px 0 24px;
  width: 100%;
  background-color: ${colors.white};
  z-index: 1;
`;

export const Title = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: bold;
  max-width: 70%;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TimeContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DishType = styled.View`
  background-color: ${colors.light_gray};
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 35px;
  height: 30px;
`;

export const RowContainer = styled.View`
  margin-top: -24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: ${fontSizes.md};
  margin-bottom: 20px;
`;

export const IngredientLength = styled.Text`
  color: #a9a9a9;
  font-size: ${fontSizes.md};
`;

export const HowToContainer = styled.View`
  padding: 24px 0;
`;

export const Instructions = styled.Text`
  font-size: ${fontSizes.sm};
`;
