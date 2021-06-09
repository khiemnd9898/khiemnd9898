import {Fonts} from '@/assets/fonts';
import useAsyncFn from '@/hooks/useAsyncFn';
import {FriendRequestSection} from '@/screens/NotifyScreen/components/FriendRequestSection';
import {FriendSuggestSection} from '@/screens/NotifyScreen/components/FriendSuggestSection';
import {NewSection} from '@/screens/NotifyScreen/components/NewSection';
import {NotifyHeader} from '@/screens/NotifyScreen/components/NotifyHeader';
import {NotifyItem} from '@/screens/NotifyScreen/components/NotifyItem';
import {useNotificationsByQuery} from '@/store/notification';
import {requestGetNotificationList} from '@/store/notification/function';
import React, {memo, useEffect} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

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

const renderItem = ({item}: any) => <NotifyItem id={item.toString()} />;
const keyExtractor = (item: any) => item.toString();
export const NotifyScreen = memo(function NofityScreen() {
    const allNotification = useNotificationsByQuery('all') || [];
    const filterNotifi = allNotification.filter((_, index) => index > 1);

    const [{loading, error, value}, getData] = useAsyncFn(async () => {
        requestGetNotificationList().then();
    }, []);

    useEffect(() => {
        getData().then();
    }, []);

    return (
        <Container>
            <NotifyHeader />
            <FlatList
                ListHeaderComponent={
                    <>
                        <NewSection />
                        <FriendRequestSection />
                        <FriendSuggestSection />
                        <StyledText>Older</StyledText>
                    </>
                }
                data={filterNotifi}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    );
});
