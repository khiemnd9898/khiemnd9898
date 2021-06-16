import React, { memo } from "react";
import styled from "styled-components/native";
import {
  IC_SEACH
} from "@/assets";
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
`;

const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
const TextViewInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  margin: 12px 12px 12px 12px;
  border-radius: 18px;
  background-color: ${p => p.theme.gray5};
  padding: 0 12px
`;

const STextInput = styled.TextInput`
  flex: 1;
  font-family: ${Fonts.Medium};
  height: 36px;
  margin: 0px;
  padding: 0 0 0 12px;
`;
export const HeaderListFriends = memo(function HeaderListFriends() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(""); // string ko có thì để rỗng
  return (
    <Container>
      <TextViewInput>
        <SearchIcon source={IC_SEACH} />
        <STextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Search friend, message ..."
        />
      </TextViewInput>
    </Container>
  );
});
