import React, {memo} from "react";
import styled from "styled-components/native";
import {ProfileHeader} from "@/screens/ProfileScreen/components/ProfileHeader";
import {useNavigationParams} from "@/hooks/useNavigationParams";
import {UserNews} from "@/screens/ProfileScreen/components/UserNews";


const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

export interface ProfileScreenProps {
  id: string
}

export const ProfileScreen = memo(function ProfileScreen() {
  const { id } = useNavigationParams();

  return (
    <Container>
      <ProfileHeader />
      <UserNews />
    </Container>
  );

});
