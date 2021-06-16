import React, { memo, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useAsyncFn } from "@/hooks/useAsyncFn";
import { useSearchsByQuery } from "@/store/ListSearch";
import { requestGeTSearchList } from "@/store/ListSearch/functions";
import { SearchSection } from "@/screens/SearchScreen/SearchSection";

const Container = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.backgroundColor};
`;
export interface ListFriendProps{
  id: string
}
const renderItem = ({ item }: any) => <SearchSection id={item.toString()} />;
const keyExtractor = (item: any) => item.toString();
const Headerright = styled.View``;


export const ListSearch = memo(function ListSearch() {
  const allPost = useSearchsByQuery("all") || [];
  const [{}, getData] = useAsyncFn(async () => {
    requestGeTSearchList().then();
  }, []);

  useEffect(() => {
    getData().then();
  }, []);
  return (
    <Container>
      <FlatList data={allPost}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
      />
    </Container>
  );
});
