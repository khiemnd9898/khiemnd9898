import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {useNotification} from '@/store/notification';
import moment from 'moment';
import 'moment/locale/vi';

const Container = styled.TouchableOpacity<{seen?: boolean}>`
    background: ${(p) =>
        p.seen ? 'rgba(66, 149, 246, 0.2)' : p.theme.backgroundColor};
    padding: 7px 16px;
`;
const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;
const ViewLeft = styled.View`
    flex: 1;
`;
const Avatar = styled(FastImage)`
    width: 50px;
    height: 50px;
    border-radius: 32px;
    background-color: ${p => p.theme.gray5};
`;
const ViewRight = styled.View`
    flex: 6;
    padding-left: 18px;
`;
const StyledText = styled.Text`
    color: ${(p) => p.theme.gray1};
    line-height: 20px;
`;
const SubTitle = styled.Text`
    color: ${(p) => p.theme.gray3};
    line-height: 20px;
`;

interface Props {
    id: string;
}

export const NotifyItem = memo(function NotifyItem(props: Props) {
    const {id} = props;
    const notification = useNotification(id);
    const created_at = moment(notification?.created_at).startOf('day').fromNow();

    if (!notification) return null;
    return (
        <Container
            activeOpacity={0.4}
            onPress={() => {}}
            seen={notification?.seen}>
            <Row>
                <ViewLeft>
                    <Avatar source={{uri: notification?.image}} />
                </ViewLeft>

                <ViewRight>
                    <StyledText>{notification?.content}</StyledText>
                    <SubTitle>{created_at}</SubTitle>
                </ViewRight>
            </Row>
        </Container>
    );
});
