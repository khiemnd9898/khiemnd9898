import React, { memo } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  IC_ARROW, IC_CONTROL,
  IC_SEACH, IC_SETTINGS
} from "@/assets";
import { View } from "react-native";
import { Fonts } from "@/assets/fonts";
import { Divider } from "@/components";
import { FriendRequestSection } from "@/screens/NotifyScreen/components/FriendRequestSection";
import { FriendlySuggestScreen } from "@/screens/NotifyScreen/FriendlySuggestScreen";
import { FriendSuggestSection } from "@/screens/NotifyScreen/components/FriendSuggestSection";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 7px 16px;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 90px;
  justify-content: center;
  align-items: flex-end;
`;
const STextInput = styled.Text`
  font-size: 14px;
  color: ${p => p.theme.gray1};
`;
const ButtonInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  font-family: ${Fonts.Medium};
  height: 36px;
  padding: 0 12px
`;

const BuutonTest = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export interface SearchFriendProps {
  id: string
}

export const AddFriends = memo(function AddFriends() {
  return (
    <Container>
      <FriendRequestSection/>
    </Container>
  );
});