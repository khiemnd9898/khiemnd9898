import React, { memo } from 'react';
import styled from "styled-components/native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()};
  background-color: ${p => p.theme.backgroundColor1};
`;
const StyledView = styled.View`
  height: 44px;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 0 16px;

  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
`;

export const NotifyHeader = memo(function NotifyHeader() {
  return (
    <Container>
      <StyledView>
        <StyledText>Notifications</StyledText>
      </StyledView>
    </Container>
  )
});