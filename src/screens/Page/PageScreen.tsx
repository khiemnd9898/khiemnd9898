import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {PageHeader} from '@/screens/Page/components/PageHeader';
import {FlatList} from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: ${(p) => p.theme.backgroundColor};
`;

export const PageScreen = memo(function PageScreen() {
    return (
        <Container>
            <PageHeader />
            <FlatList ListHeaderComponentStyle={} />
        </Container>
    );
});
