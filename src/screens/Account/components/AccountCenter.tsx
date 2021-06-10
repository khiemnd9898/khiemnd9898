import React, { memo } from "react";
import styled from "styled-components/native";
import {Divider} from "@/components";
import { IC_CART, IC_DOCUMENT1, IC_DOCUMENT2, IC_DOWNLOAD } from "@/assets";
import {ChangeThemes} from "@/screens/Account/components/ChangeThemes";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor1};
`;
const Icon=styled.Image`
  width: 20px;
  height: 20px;
`;
const Icondownload = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const Name = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray1};
  padding-left: 18px;
  line-height: 44px;
`;
const Header = styled.View`
  padding: 0 0 0 16px;
  height:200px;
  margin-bottom: 5px;
  flex-direction: column;
`;
const ButtonIcon=styled.TouchableOpacity`
  flex:1;
  flex-direction:row;
  align-items: center;
  padding-left: 5px;
`;
const Themes = styled.View`
  flex:1;
  flex-direction:row;
  align-items: center;
  padding-left: 5px;
`;


export const AccountCenter = memo(function AccountCenter() {
  return (
    <Container>
      <Divider height={20} />
      <Header>
        <Themes>
          <ChangeThemes />
        </Themes>
        <ButtonIcon>
          <Icondownload source={IC_DOCUMENT1}/>
          <Name>News feed </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>My Articles</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_CART} />
          <Name>My Products</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icondownload
            source={IC_DOWNLOAD} />
          <Name>Saved Posts </Name>
        </ButtonIcon>
      </Header>
    </Container>
  );
});