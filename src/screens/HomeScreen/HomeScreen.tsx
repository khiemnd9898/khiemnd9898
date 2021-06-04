import React, {memo} from 'react';
import styled from "styled-components/native";
import {HomeHeader} from "./HomeHeader";
import {FlatList} from "react-native";
import {PostComponent} from "@/components/PostComponent";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;


const renderItem = ({item}: any) => <PostComponent id={item} />;
const keyExtractor = (item: any) => item.toString();

export const HomeScreen = memo(function HomeScreen() {
    return (
        <Container>
            <HomeHeader/>
            <FlatList
                data={Array.from(new Array(20).keys())}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    )
});
