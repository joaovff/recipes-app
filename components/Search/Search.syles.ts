import styled from "styled-components/native";
import { fontSizes } from "../../theme/fontSizes";
import { colors } from "../../theme/colors";

export const Container = styled.View`
  padding: 24px 24px 0 24px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  border: 1px solid ${colors.gray};
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 10px;
`;

export const InputSearch = styled.TextInput`
  color: ${colors.black};
  font-size: ${fontSizes.sm};
  flex: 1;
`;
