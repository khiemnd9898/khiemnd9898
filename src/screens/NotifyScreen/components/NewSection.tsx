import React, {memo, useEffect} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {NotifyItem} from '@/screens/NotifyScreen/components/NotifyItem';
import {useNotificationsByQuery} from '@/store/notification';
import useAsyncFn from '@/hooks/useAsyncFn';
import {requestGetNotificationList} from '@/store/notification/function';

const Container = styled.View<{color?: string}>`
    background-color: ${(p) => p.color || p.theme.backgroundColor};
`;
const StyledText = styled.Text`
    color: ${(p) => p.theme.gray1};
    font-family: ${Fonts.Medium};
    font-size: 14px;

    padding: 10px 0 10px 16px;
`;

export const NewSection = memo(function NewSection() {
    const allNotification = useNotificationsByQuery('all') || [];

    const [{loading, error, value}, getData] = useAsyncFn(async () => {
        requestGetNotificationList();
    }, []);

    useEffect(() => {
        getData();
    }, []);

    if (allNotification.length === 0) return null;
    return (
        <Container>
            <StyledText>New</StyledText>

            {allNotification.slice(0, 2).map((item, i) => (
                <NotifyItem id={item.toString()} key={i} />
            ))}
        </Container>
    );
});
