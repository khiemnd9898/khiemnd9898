import React, {memo} from 'react';
import styled from 'styled-components/native';

import {NotifyHeader} from './components/NotifyHeader';
import {NewSection} from './components/NewSection';
import {OlderSection} from './components/OlderSection';
import {FriendRequestSection} from './components/FriendRequestSection';
import {FriendSuggestSection} from './components/FriendSuggestSection';
import {FlatList} from "react-native";
import {NotifyItem} from "@/screens/NotifyScreen/components/NotifyItem";
import {Fonts} from "@/assets/fonts";

const Container = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.backgroundColor};
`;

const StyledText = styled.Text`
  color: ${(p) => p.theme.gray1};
  font-family: ${Fonts.Medium};
  font-size: 14px;
  padding: 10px 0 10px 16px;
`;

const renderItem = ({item}: any) => <NotifyItem id={item.toString()}/>;
const keyExtractor = (item: any) => item.toString();
export const NotifyScreen = memo(function NofityScreen() {
    return (
        <Container>
            <NotifyHeader/>
            <FlatList
                ListHeaderComponent={
                    <>
                        <NewSection/>
                        <FriendRequestSection/>
                        <FriendSuggestSection suggestion={true}/>
                        <StyledText>Older</StyledText>
                    </>
                }
                data={Array.from(new Array(50).keys())}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    );
});
