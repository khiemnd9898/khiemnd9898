import React, {memo} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';


const Container = styled.View`
  width: 100%;
  height: ${80 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()};
  background-color: ${p => p.theme.backgroundColor};
`;

export const HomeHeader = memo(function HomeHeader() {
    return (
        <Container>

        </Container>
    )
});
