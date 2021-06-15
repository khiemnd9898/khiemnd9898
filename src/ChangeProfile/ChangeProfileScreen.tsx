import React, { memo, useEffect } from "react";
import styled from "styled-components/native";
import { HomeHeader } from "@/screens/HomeScreen/HomeHeader";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { HeaderBack } from "@/components/HeaderBack";
import { ChangeHeader } from "@/ChangeProfile/HeaderChange";
import { MenuChangeFrofile } from "@/ChangeProfile/components/MenuChangeFrofile";


const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;
export interface ChangeProfileProps {
  id: string
}
export const ChangeProfile = memo(function ChangeProfile() {
  const { id } = useNavigationParams();
  return (
    <Container>
      <ChangeHeader />
      <MenuChangeFrofile />
    </Container>
  );
});
