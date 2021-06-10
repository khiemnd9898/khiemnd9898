import {Fonts} from '@/assets/fonts';
import {Divider} from '@/components';
import useAsyncFn from '@/hooks/useAsyncFn';
import {RequestItem} from '@/screens/NotifyScreen/components/RequestItem';
import {useRequestsByQuery} from '@/store/request';
import {requestRequestList} from '@/store/request/function';
import {BaseStyles} from '@/themes/BaseStyles';
import {navigateFriendlyRequestScreen} from '@/utils/navigation';
import React, {memo, useEffect} from 'react';
import styled from 'styled-components/native';

const Container = styled.View<{color?: string}>`
    margin-bottom: 12px;
    background-color: ${(p) => p.color || p.theme.backgroundColor};
`;
const StyledText = styled.Text`
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
    margin: 15px 16px 0 16px;
`;

const TextBtn = styled.Text<{color?: string}>`
    font-size: 16px;
    color: ${(p) => p.color || p.theme.gray1};
`;

export const FriendRequestSection = memo(function FriendRequestSection() {
    const allRequest = useRequestsByQuery('all') || [];

    const [{}, getData] = useAsyncFn(async () => {
        requestRequestList();
    }, []);
    useEffect(() => {
        getData();
    }, []);

    if (allRequest.length === 0) return null;

    return (
        <Container>
            <StyledText>Friend Request</StyledText>

            {allRequest.slice(0, 2).map((item, index) => (
                <RequestItem
                    key={index}
                    id={item.toString()}
                    suggestion={false}
                />
            ))}

            <FooterBtn onPress={navigateFriendlyRequestScreen}>
                <TextBtn>Show All</TextBtn>
            </FooterBtn>
            <Divider height={8} style={BaseStyles.mt12} />
        </Container>
    );
});
