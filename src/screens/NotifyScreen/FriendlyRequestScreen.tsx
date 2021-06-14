import React, {memo, useEffect} from 'react';
import styled from 'styled-components/native';
import {HeaderBack} from '@/components/HeaderBack';
import {FlatList} from 'react-native';
import {RequestItem} from '@/screens/NotifyScreen/components/RequestItem';
import {useRequestsByQuery} from '@/store/request';
import useAsyncFn from '@/hooks/useAsyncFn';
import {requestRequestList} from '@/store/request/function';

const Container = styled.View`
    flex: 1;
    background-color: ${(p) => p.theme.backgroundColor};
`;

const renderItem = ({item}: any) => (
    <RequestItem id={item.toString()} suggestion={false} />
);
const keyExtractor = (item: any) => item.toString();

export const FriendlyRequestScreen = memo(function FriendlyRequestScreen() {
    const allRequest = useRequestsByQuery('all') || [];

    return (
        <Container>
            <HeaderBack title={'Tất cả lời mời'} />
            <FlatList
                contentContainerStyle={{paddingVertical: 16}}
                data={allRequest}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    );
});
