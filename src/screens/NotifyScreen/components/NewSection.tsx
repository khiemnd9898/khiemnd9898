import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {NotifyItem} from '@/screens/NotifyScreen/components/NotifyItem';

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
    return (
        <Container>
            <StyledText>New</StyledText>

            {Array.from(new Array(3).keys()).map((item, i) => (
                <NotifyItem id={item.toString()} key={i} />
            ))}
        </Container>
    );
});
