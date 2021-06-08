import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {RequestItem} from '@/screens/NotifyScreen/components/RequestItem';
import {Divider} from '@/components';
import {BaseStyles} from '@/themes/BaseStyles';
import {navigateFriendlyRequestScreen} from '@/utils/navigation';

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

const DATA = [
    {
        id: 1,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '4d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
];

export const FriendRequestSection = memo(function FriendRequestSection() {
    return (
        <Container>
            <StyledText>Friend Request</StyledText>

            {DATA.map((item, index) => {
                return (
                    <RequestItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        avatar={item.avatar}
                        subTitle={item.subTitle}
                        suggestion={item.suggestion}
                    />
                );
            })}

            <FooterBtn onPress={navigateFriendlyRequestScreen}>
                <TextBtn>Show All</TextBtn>
            </FooterBtn>
            <Divider height={8} style={BaseStyles.mt12} />
        </Container>
    );
});
