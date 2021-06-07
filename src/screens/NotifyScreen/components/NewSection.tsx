import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {NotifyItem} from './NotifyItem';

const Container = styled.View<{color?: string}>`
  background-color: ${(p) => p.color || p.theme.backgroundColor1};
`;
const StyledText = styled.Text`
  background-color: ${(p) => p.theme.backgroundColor1};
  color: ${(p) => p.theme.gray1};
  font-family: ${Fonts.Medium};
  font-size: 14px;

  padding: 10px 0 10px 16px;
`;

const DATA = ['1', '2'];

export const NewSection = memo(function NewSection() {
  return (
    <Container>
      <StyledText>New</StyledText>

      {DATA.map((item, i) => (
        <NotifyItem key={i} />
      ))}
    </Container>
  );
});
