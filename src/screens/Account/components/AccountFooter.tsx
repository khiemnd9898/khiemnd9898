import React, { memo } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import {Divider} from "@/components";
import {
  IC_BLOCK,
  IC_CONG_DONG,
  IC_EVENT,
  IC_FLAG1,
  IC_GROUP1, IC_MARKET
} from "@/assets";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor1};
`;
const Icon=styled.Image`
  width: 20px;
  height: 20px;
`;
const Name = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray1};
  padding-left: 18px;
  line-height: 44px;
`;
const Header = styled.View`
  padding: 0 0 0 16px;
  height:264px;
  margin-bottom: 5px;
  flex-direction: column;
`;
const ButtonIcon=styled.TouchableOpacity`
  flex:1;
  flex-direction:row;
  align-items: center;
  padding-left: 5px;
`;
export const AccountFooter = memo(function AccountFooter() {
  return (
    <Container>
      <Divider height={25} />
      <Header>
        <ButtonIcon>
          <Icon source={IC_CONG_DONG}/>
          <Name>Peoples </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_FLAG1} />
          <Name>Pages</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_GROUP1} />
          <Name>Groups</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_EVENT} />
          <Name>Events</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_BLOCK} />
          <Name>Blogs </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_MARKET} />
          <Name>Market </Name>
        </ButtonIcon>
      </Header>
    </Container>
  );
});