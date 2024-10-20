import styled from "styled-components/native";
import { fontSizes } from "../../theme/fontSizes";
import { colors } from "../../theme/colors";

export const TrendingContainer = styled.View`
  padding: 24px 24px 0 24px;
  width: 100%;
`;

export const Container = styled.View`
  align-items: flex-start;
`;

export const Subtitle = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: bold;
`;

export const Link = styled.Text`
  color: ${colors.link};
  font-weight: bold;
  font-size: ${fontSizes.md};
`;
