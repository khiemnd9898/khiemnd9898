import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { Colors } from "@/themes/Colors";
import { syncFriends, useFriend } from "@/store/Friend";

const Container = styled.TouchableOpacity<{ color?: any }>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor)};
`;
const ButtonItem = styled.TouchableOpacity`
  padding: 10px 16px 10px 16px;
`;
const Column = styled.View`
  justify-content: center;
`;
const Avatar = styled.Image`
  width: 100px;
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
const Title = styled.Text`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.gray4};
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
        <Column>
          <Avatar source={{ uri: itemload?.avatar || "" }} />
          <Name numberOfLines={1}>{itemload?.name || ""}</Name>
        </Column>
      </ButtonItem>
    </Container>

  );
});