import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { useFriend } from "@/store/Friend";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const Container = styled.TouchableOpacity<{ color?: any }>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor)};
`;
const ButtonItem = styled.TouchableOpacity`
  width: ${windowWidth/3};
  padding: 10px 16px 10px 16px;
`;
const Avatar = styled.Image`
  width:100px;
  height: 100px;
  border-radius: 10px;
`;
const Name = styled.Text`
  font-size: 14px;
  line-height: 18px;
  padding-top: 5px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
`;
interface Props {
  id: string;
}
export const Friendsection = memo(function Friendsection(props: Props) {
  const { id } = props;
  const itemload = useFriend(id);
  if (!itemload) return null;
  return (
    <Container>
      <ButtonItem>
          <Avatar source={{ uri: itemload?.avatar || "" }} />
          <Name numberOfLines={1}>{itemload?.name || ""}</Name>
      </ButtonItem>
    </Container>

  );
});