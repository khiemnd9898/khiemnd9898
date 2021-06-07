import React, {memo} from 'react';
import styled from 'styled-components/native';

import {NotifyHeader} from './components/NotifyHeader';
import {NewSection} from './components/NewSection';
import {OlderSection} from './components/OlderSection';
import {FriendRequestSection} from './components/FriendRequestSection';
import {FriendSuggestSection} from './components/FriendSuggestSection';
import {ScrollView} from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.backgroundColor};
`;

const Data = ['1', '2'];

export const NotifyScreen = memo(function NofityScreen() {
  return (
    <Container>
      <NotifyHeader />

      <ScrollView>
        <NewSection />
        <FriendRequestSection />
        <FriendSuggestSection suggestion={true} />
        <OlderSection />
      </ScrollView>
    </Container>
  );
});
