import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { Colors } from "@/themes/Colors";
import { IC_MORE } from "@/assets";
import { useSearch } from "@/store/ListSearch";
const Container = styled.TouchableOpacity<{ color?: any }>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor)};
`;
const ButtonItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 16px 5px 16px;
`;
const Column = styled.View`
  width: 60px;
`;
const Column2 = styled.View`
  flex: 1;
  padding-left: 10px;
  flex-direction: column;
  justify-content: center;
`;
const Comlumn3 = styled.View`
  width: 60px;
  align-items: flex-end;
  justify-content: center;

`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: ${50 / 2}px;
`;
const Name = styled.Text`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
`;
const Title = styled.Text`
  font-size: 12px;
  line-height: 20px;
  color: ${Colors.gray4};
  font-family: ${Fonts.Bold};
`;
const ButtonIcon = styled.TouchableOpacity`
`;
const Sicon = styled.Image`
  width: 24px;
  height: 24px;
`;

interface Props {
  id: string;
}
export const ItemSearch = memo(function ItemSearch(props: Props) {
  const { id } = props;
  const itemload = useSearch(id);

  if (!itemload) return null;
  return (
    <Container>
      <ButtonItem>
        <Column>
          <Avatar source={{ uri: itemload?.avatar }} />
        </Column>
        <Column2>
          <Name numberOfLines={1}>{itemload?.name || ""}</Name>
        </Column2>
        <Comlumn3>
          <ButtonIcon>
            <Sicon source={IC_MORE} />
          </ButtonIcon>
        </Comlumn3>
      </ButtonItem>
    </Container>
  );
});