import {IC_SHARE, IC_SEACH} from '@/assets';
import {HeaderBack} from '@/components/HeaderBack';
import React, {memo} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image<{color?: string}>`
    width: 24px;
    height: 24px;
    tint-color: ${(p) => p.color || p.theme.gray1};
`;
const SearchSection = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 18px;
    background-color: ${(p) => p.theme.gray5};
    padding: 5px 12px;
`;
const SearchIcon = styled.Image`
    width: 18px;
    height: 18px;
    tint-color: ${(p) => p.theme.gray1};
`;
const STextInput = styled(TextInput).attrs((props) => ({
    placeholderTextColor: props.theme.gray3,
}))`
    flex: 1;
    margin: 0px;
    padding: 0 0 0 12px;
`;
const RightAction = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
`;

export const PageHeader = memo(function PageHeader() {
    return (
        <HeaderBack
            title={''}
            center={
                <SearchSection>
                    <SearchIcon source={IC_SEACH} />
                    <STextInput placeholder="Tìm kiếm" />
                </SearchSection>
            }
            right={
                <RightAction>
                    <Icon source={IC_SHARE} />
                </RightAction>
            }
        />
    );
});
