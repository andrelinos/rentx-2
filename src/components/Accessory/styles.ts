import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
 

export const Container = styled.View`
  width: 110px;
  height:  ${RFValue(92)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  margin: 5px 4px;
  border-radius:10px ;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;