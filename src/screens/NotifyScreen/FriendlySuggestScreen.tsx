import {HeaderBack} from '@/components/HeaderBack';
import useAsyncFn from '@/hooks/useAsyncFn';
import {RequestItem} from '@/screens/NotifyScreen/components/RequestItem';
import {useSuggestionsByQuery} from '@/store/suggestion';
import {requestSuggestList} from '@/store/suggestion/function';
import React, {memo, useEffect} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: ${(p) => p.theme.backgroundColor};
`;
const renderItem = ({item}: any) => (
    <RequestItem id={item.toString()} suggestion={true} />
);
const keyExtractor = (item: any) => item.toString();

export const FriendlySuggestScreen = memo(function FriendlySuggestScreen() {
    const allSuggest = useSuggestionsByQuery('all') || [];

    return (
        <Container>
            <HeaderBack title={'Tất cả gợi ý'} />
            <FlatList
                contentContainerStyle={{paddingVertical: 16}}
                data={allSuggest}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    );
});
