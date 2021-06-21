import React, {memo} from "react";
import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {
  IC_ARROW,
} from "@/assets";
import { goBack } from "@/utils/navigation";
import { Divider } from "@/components";
import { View } from "react-native";
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 7px 16px;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 32px;
  justify-content: center;
`;
const IconPlus = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const STextInput = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.Bold};
  padding-left: 12px;
  color: ${p => p.theme.gray1};
`;
const ButtonInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 12px
`;
export const ChangeHeader = memo(function ChangeHeader() {
  return (
    <Container>
      <Row>
        <ButtonIcon onPress={goBack}>
          <IconPlus source={IC_ARROW} />
        </ButtonIcon>
        <ButtonInput>
         <STextInput>Cài đặt trang cá nhân</STextInput>
        </ButtonInput>
        <View style={{width:30}}></View>
      </Row>
      <Divider height={8} />
    </Container>
  );
});
