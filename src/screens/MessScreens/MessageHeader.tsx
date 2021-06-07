import React, {memo} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FastImage from "react-native-fast-image";
import {
  IC_HOME_SEARCH,
  IC_MENU,
  IC_MOREDOT,
  IC_PLUS, IC_SEACH, IC_SHARE,
  IC_VIDEO_CAMERA,
  IMG_LOGO_APP,
  IMG_PHOTOS
} from "@/assets";
import { TextInput, View,Image } from "react-native";
import {Colors} from "@/themes/Colors";
import {Fonts} from "@/assets/fonts";
import {BaseStyles} from "@/themes/BaseStyles";


const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()};
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 7px 16px;
`;

const Avatar = styled.Image`
  width: 26px;
  height: 26px;
  border-radius: ${26 / 2}px;
  background-color: #fff;
`;

const ViewFull = styled.TouchableOpacity`
  flex: 1;
`;

const TextMind = styled.Text`
    padding-left: 12px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: #ffffff;
`;
const Buttonicon=styled.TouchableOpacity`
  width: 40px;
  justify-content: center;
  align-items: flex-end;
`;
const Icons=styled.Image`
  width: 16px;
  height: 16px;
  tint-color: ${p => p.theme.gray1};
`;
const SearchIcon=styled.Image`
  width: 18px;
  height: 18px;
`;
const TextViewInput=styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  margin:12px 12px 12px 12px;
  borderRadius:18px;
  background-color:#3B3D3D;
  padding:0 12px
`;


export const MessHeader = memo(function MessHeader() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(""); // string ko có thì để rỗng
  return (
    <Container>
      <Row>
        <Avatar
          source={{uri: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg'}}/>
        <ViewFull>
          <TextMind numberOfLines={1}>
            Định Pu
          </TextMind>
        </ViewFull>
        <Buttonicon>
          <Icons  resizeMode={"contain"} source={IC_PLUS} />
        </Buttonicon>
      </Row>
        <TextViewInput>
          <SearchIcon source={IC_SEACH}  />
          <TextInput
            style={{ flex:1,paddingLeft:15,height:36}}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search friend, message ..."
          />
        </TextViewInput>


    </Container>
  )
});
