import React, {memo} from "react";
import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {
  IC_ARROW,
  IC_SEACH,
} from "@/assets";
import { goBack } from "@/utils/navigation";
import { Divider } from "@/components";

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()};
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 7px 16px;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 30px;
  justify-content: center;
`;
const IconPlus = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
const STextInput = styled.Text`
  font-size: 13px;
  padding-left: 12px;
  color: ${p => p.theme.gray1};
`;
const ButtonInput = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 36px;
  border-radius: 18px;
  background-color: ${p => p.theme.gray5};
  padding: 0 12px
`;
export const ProfileHeader = memo(function ProfileHeader() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(""); // string ko có thì để rỗng
  return (
    <Container>
      <Row>
        <ButtonIcon onPress={goBack}>
          <IconPlus source={IC_ARROW} />
        </ButtonIcon>
        <ButtonInput>
          <SearchIcon source={IC_SEACH} />
         <STextInput>Seach.... </STextInput>
        </ButtonInput>
      </Row>
      <Divider height={1.5} />
    </Container>
  );
});