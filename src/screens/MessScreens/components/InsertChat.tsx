import React, {memo} from 'react';
import styled from "styled-components/native";
import {BaseStyles} from "@/themes/BaseStyles";
import { IC_EMOJI, IC_IMAGE, IC_LIKE, IC_PLUS, IC_SEND } from "@/assets";
import {Colors} from "@/themes/Colors";
import {Keyboard} from "react-native";


const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 56px;
  background-color: ${p => p.theme.backgroundColor};
`;

const TextInput = styled.TextInput`
  width: 100%;
  min-height: 44px;
  max-height: 75px;
  font-size: 13px;
  margin: 0;
  color:${p => p.theme.gray1};
  background-color: ${p => p.theme.gray6};
  border-radius: 20px;
  padding: 6px 40px 6px 12px;
`;
const Viewv = styled.View`
  width: 30px;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
const ViewCenter = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
const BtnSend = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const IconEmoji=styled.Image`
  width: 24px;
  height: 24px;
  tint-color:#4CAF50;

`;
const IconSend = styled.Image`
  width: 24px;
  height: 24px;
  tint-color:#4CAF50;
`;

const BtnImageAb = styled.TouchableOpacity`
  position: absolute;
  top: 2px;
  right: 4px;
  width: 40px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const InsertChat= memo(function InsertChat() {
  return (
    <Container style={BaseStyles.viewShadow}>
      <Viewv>
        <IconEmoji source={IC_PLUS} />
      </Viewv>
      <ViewCenter>
        <TextInput
          placeholder={'Input message...'}
          placeholderTextColor={Colors.gray4}
          onBlur={Keyboard.dismiss}
          multiline={true}/>
        <BtnImageAb>
          <IconEmoji source={IC_EMOJI} />
        </BtnImageAb>
      </ViewCenter>

      <BtnSend>
        <IconSend source={IC_LIKE}/>
      </BtnSend>
    </Container>
  )
});
