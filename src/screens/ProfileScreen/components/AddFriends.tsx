import React, { memo } from "react";
import styled from "styled-components/native";
import { FriendRequestSection } from "@/screens/NotifyScreen/components/FriendRequestSection";


const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
`;

export const AddFriends = memo(function AddFriends() {
  return (
    <Container>
      <FriendRequestSection />
    </Container>
  );
});