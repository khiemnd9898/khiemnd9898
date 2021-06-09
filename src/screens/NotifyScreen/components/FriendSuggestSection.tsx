import {Fonts} from '@/assets/fonts';
import {Divider} from '@/components';
import useAsyncFn from '@/hooks/useAsyncFn';
import {RequestItem} from '@/screens/NotifyScreen/components/RequestItem';
import {useSuggestionsByQuery} from '@/store/suggestion';
import {BaseStyles} from '@/themes/BaseStyles';
import {navigateFriendlySuggestScreen} from '@/utils/navigation';
import React, {memo, useEffect} from 'react';
import styled from 'styled-components/native';
import {requestSuggestList} from '@/store/suggestion/function';

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

export const FriendSuggestSection = memo(function FriendSuggestSection() {
    const allSuggest = useSuggestionsByQuery('all') || [];
    const [{}, getData] = useAsyncFn(async () => {
        requestSuggestList();
    }, []);
    useEffect(() => {
        getData();
    }, []);

    if (allSuggest.length === 0) return null;
    return (
        <Container>
            <StyledText>Friend Suggestion</StyledText>

            {allSuggest.slice(0, 2).map((item, index) => {
                return <RequestItem key={index} id={item.toString()} suggestion={true} />;
            })}
            <FooterBtn onPress={navigateFriendlySuggestScreen}>
                <TextBtn>Show All</TextBtn>
            </FooterBtn>
            <Divider height={8} style={BaseStyles.mt12} />
        </Container>
    );
});
