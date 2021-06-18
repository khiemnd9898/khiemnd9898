import {IC_PLUS, IC_SEACH} from '@/assets';
import React, {memo} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

const Avatar = styled.Image`
  width: 26px;
  height: 26px;
  border-radius: ${26 / 2}px;
  background-color: #fff;
`;

const ViewFull = styled.TouchableOpacity`
  flex: 1;
  padding: 5px 0;
`;

const TextMind = styled.Text`
  padding-left: 12px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
`;
const ButtonIcon = styled.TouchableOpacity`
  width: 40px;
  padding: 5px 0;
  justify-content: center;
  align-items: flex-end;
`;
const IconPlus = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};
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

const STextInput = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.gray3,
}))`
  flex: 1;
  height:36px;
  margin: 0px;
  padding: 0 0 0 12px;
`;

export const MessHeader = memo(function MessHeader() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(""); // string ko có thì để rỗng
  return (
    <Container>
      <Row>
        <Avatar
          source={{ uri: "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg" }} />
        <ViewFull>
          <TextMind numberOfLines={1}>
            Định Pu
          </TextMind>
        </ViewFull>
        <ButtonIcon>
          <IconPlus resizeMode={"contain"} source={IC_PLUS} />
        </ButtonIcon>
      </Row>
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
