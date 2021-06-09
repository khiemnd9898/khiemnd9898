import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { setThemeAction, useTheme } from "@/store/constant";
import { StatusBar } from "react-native";
import { AccountHeader } from "@/screens/Account/components/AccountHeader";
import { View } from "react-native-animatable";
import { AccountCenter } from "@/screens/Account/components/AccountCenter";
import { AccountFooter } from "@/screens/Account/components/AccountFooter";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;
export const AccountScreen = memo(function AccountScreen() {
  return (
    <Container>
      <AccountHeader />
      <AccountCenter />
      <AccountFooter />
    </Container>
  );
});

