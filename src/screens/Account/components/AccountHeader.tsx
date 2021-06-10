import React, { memo } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Fonts } from "@/assets/fonts";
import {Divider} from "@/components";

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()};
  background-color: ${p => p.theme.backgroundColor1};
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: ${60 / 2}px;
`;
const Name = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
  padding-left: 13px;
  line-height: 20px;
`;
const Header = styled.TouchableOpacity`
  padding: 0 0 0 16px;
  height:53px;
  align-items: center;
  flex-direction: row;
`;
export const AccountHeader = memo(function AccountHeader() {
  return (
    <Container>
      <Header>
        <Image
          source={{ uri: "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg" }} />
        <Name>Nguyễn Đức Thuần</Name>
      </Header>
    </Container>
  );
});