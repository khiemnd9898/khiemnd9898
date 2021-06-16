import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { HeaderSearch } from "@/components/HeaderSearch";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { CenterSeachScreen } from "@/screens/SearchScreen/CenterSeachScreen";
import { FooterSearchScreen } from "@/screens/SearchScreen/FooterSearchScreen";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
`;

export interface SearchScreenProps {
  id: string
}


export const SearchScreen = memo(function SearchScreen() {
  const { id } = useNavigationParams();
  const onTextChange = useCallback((value: string) => {

  }, []);
  return (
    <Container>
      <HeaderSearch
        onTextChange={onTextChange}
      />
      <ScrollView>
        <CenterSeachScreen />
        <FooterSearchScreen />
      </ScrollView>

    </Container>
  );
});


