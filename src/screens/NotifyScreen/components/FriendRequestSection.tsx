import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {NotifyItem} from './NotifyItem';
import {RequestItem} from './RequestItem';

const Container = styled.View<{color?: string}>`
  margin-bottom: 12px;
  background-color: ${(p) => p.color || p.theme.backgroundColor1};
`;
const StyledText = styled.Text`
  background-color: ${(p) => p.theme.backgroundColor1};
  color: ${(p) => p.theme.gray1};
  font-family: ${Fonts.Medium};
  font-size: 14px;

  padding: 10px 0 10px 16px;
`;
const FooterBtn = styled.TouchableOpacity<{color?: string}>`
  background-color: ${(p) => p.color || p.theme.gray5};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  margin: 15px 16px;
`;
const TextBtn = styled.Text<{color?: string}>`
  font-size: 16px;
  color: ${(p) => p.color || p.theme.gray1};
`;

const DATA = ['1', '2'];

export const FriendRequestSection = memo(function FriendRequestSection() {
  return (
    <Container>
      <StyledText>Friend Request</StyledText>

      {DATA.map((item, index) => (
        <RequestItem key={index} />
      ))}

      <FooterBtn onPress={() => {}}>
        <TextBtn>Show All</TextBtn>
      </FooterBtn>
    </Container>
  );
});
