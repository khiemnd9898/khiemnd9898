import React, { memo } from "react";
import styled from "styled-components/native";
import { MessHeader } from "@/screens/MessScreens/MessageHeader";
import {MessComponent1} from "@/components/MessComponent1";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

export const MessScreen = memo(function MessScreen() {
  return (
    <Container>
      <MessHeader />
      <MessComponent1/>
    </Container>
  );

});
