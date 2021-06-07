import React, {memo} from 'react';
import styled from "styled-components/native";
import {BaseStyles} from "@/themes/BaseStyles";
import {IC_SEND} from "@/assets";


const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 56px;
  background-color: ${p => p.theme.backgroundColor};
  border-top-width: 1px;
  border-top-color: ${p => p.theme.divider};
`;

const TextInput = styled.TextInput`
  width: 100%;
  min-height: 44px;
  max-height: 75px;
  font-size: 13px;
  margin: 0;
  padding: 6px 12px;
  color:${p => p.theme.gray1};
  background-color: ${p => p.theme.gray6};
  border-radius: 20px;
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

const IconSend = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #0077cc
`;
export const InsertComment = memo(function InsertComment() {
    return (
        <Container style={BaseStyles.viewShadow}>
            <ViewCenter>
                <TextInput multiline={true}/>
            </ViewCenter>

            <BtnSend>
                <IconSend source={IC_SEND} />
            </BtnSend>
        </Container>
    )
});
