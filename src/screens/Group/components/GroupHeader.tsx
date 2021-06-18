import {IC_BACK, IC_MORE, IC_SEACH, IC_SHARE} from '@/assets';
import {goBack} from '@/utils/navigation';
import React, {memo} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';

const Container = styled.View`
    height: ${getStatusBarHeight() + 56}px;
    background-color: ${(p) => p.theme.backgroundColor};
    padding-top: ${getStatusBarHeight()}px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: #dedede;
`;

const Left = styled.TouchableOpacity`
    width: 40px;
    height: 100%;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
`;

const Right = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const IconButton = styled.TouchableOpacity`
    padding: 0 10px 0 15px;
    height: 100%;
    justify-content: center;
`;
const Icon = styled.Image<{color?: string}>`
    width: 24px;
    height: 24px;
    tint-color: ${(p) => p.color || p.theme.gray1};
`;

export const GroupHeader = memo(function GroupHeader() {
    return (
        <Container>
            <Left onPress={goBack}>
                <Icon source={IC_BACK} />
            </Left>
            <Right>
                <IconButton>
                    <Icon source={IC_SEACH} />
                </IconButton>
                <IconButton>
                    <Icon source={IC_SHARE} />
                </IconButton>
                <IconButton>
                    <Icon source={IC_MORE} />
                </IconButton>
            </Right>
        </Container>
    );
});
