import React, { memo } from "react";
import styled from "styled-components/native";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { ChangeHeader } from "@/screens/ChangeProfile/HeaderChange";
import { MenuChangeFrofile } from "@/screens/ChangeProfile/components/MenuChangeFrofile";


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
