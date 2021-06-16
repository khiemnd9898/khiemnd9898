import React, { memo } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { Colors } from "@/themes/Colors";
import { IC_CLOSE } from "@/assets";
import { useSearch } from "@/store/ListSearch";

const Container = styled.TouchableOpacity<{ color?: any }>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor)};
`;
const ButtonItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px 16px 8px 16px;
`;
const Column = styled.View`
  width: 60px;
`;
const Column2 = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
const Comlumn3 = styled.View`
  align-items: flex-end;
  justify-content: center;

`;
const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 10px;
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
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;

interface Props {
  id: string;
}
export const SearchSection= memo(function SearchSection(props: Props) {
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
            <Sicon source={IC_CLOSE} />
          </ButtonIcon>
        </Comlumn3>
      </ButtonItem>
    </Container>
  );
});