import React, {memo, useCallback} from "react";
import styled from "styled-components/native";
import {HeaderSearch} from "@/components/HeaderSearch";

const Container = styled.View`
  flex: 1;
`;


export const SearchScreen = memo(function SearchScreen() {
    const onTextChange = useCallback((value: string) => {

    }, []);
    return (
        <Container>
            <HeaderSearch
                onTextChange={onTextChange}
            />
        </Container>
    )
});


