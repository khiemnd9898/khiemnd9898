import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { ProfileHeader } from "@/screens/ProfileScreen/components/ProfileHeader";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { Divider } from "@/components";
import { ScrollView } from "react-native";
import { ProfileImage } from "@/screens/ProfileScreen/components/ProfileImage";


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
      <Divider height={1.5} />
      <ScrollView>
        <ProfileImage />
      </ScrollView>
    </Container>
  );

});