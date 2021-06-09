import React, {memo} from 'react';
import styled from "styled-components/native";
import {HeaderBack} from "@/components/HeaderBack";
import {FlatList} from "react-native";
import {RequestItem} from "@/screens/NotifyScreen/components/RequestItem";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const renderItem = ({item}: any) => <RequestItem id={item.toString()}/>;
const keyExtractor = (item: any) => item.toString();

export const FriendlyRequestScreen = memo(function FriendlyRequestScreen() {
    return (
        <Container>
            <HeaderBack title={'Tất cả lời mời'}/>
            <FlatList
                contentContainerStyle={{paddingVertical: 16}}
                data={Array.from(new Array(50).keys())}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    )
});
