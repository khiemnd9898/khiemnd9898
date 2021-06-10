import React, {memo, ReactElement} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from "@/themes/Colors";
import { IC_BACK, IC_VIDEO_CAMERA } from "@/assets";
import {goBack} from "@/utils/navigation";
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import {Fonts} from "@/assets/fonts";
import FastImage from "react-native-fast-image";

const Container = styled.View`
  height: ${getStatusBarHeight() + 44}px;
  background-color: ${p => p.theme.backgroundColor};
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  padding-bottom: 8px;
`;

const Left = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;

const Center = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding-right: 20px;
`;

const Right = styled.View`
  width: 80px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Icon = styled.Image<{ color?: string }>`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};
`;

const BannerText = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
  padding: 0 12px;
`;
const RowHeader = styled.View`
  flex-direction: row;
  padding: 0 12px
`;

const Avatar = styled(FastImage)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${p => p.theme.gray5};
  border-width: 0.7px;
  border-color: ${p => p.theme.gray5};
`;

export const ChatEmotion = memo(function ChatEmotion() {
  return (
    <Container>
      <Left onPress={goBack}>
          <Icon source={IC_BACK} />
      </Left>
      <Center>
        <RowHeader>
          <Avatar source={{uri: "https://i.pinimg.com/736x/a7/25/da/a725dac01ff8cefe0143d5e2091c9131.jpg" || ''}}/>
          <View style={{justifyContent:'center'}}>
            <BannerText numberOfLines={1}>
              Kim Vy Nguyễn
            </BannerText>
          </View>
        </RowHeader>
      </Center>
      <Right>
        <TouchableOpacity>
          <Icon source={IC_VIDEO_CAMERA} />
        </TouchableOpacity>
      </Right>
    </Container>
  )
});
