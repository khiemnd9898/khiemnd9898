import React, { memo, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { HeaderBack } from "@/components/HeaderBack";
import { ItemFriend } from "@/screens/ProfileScreen/components/ItemFriend";
import { FlatList } from "react-native";
import { useFriend, useFriendsByQuery } from "@/store/Friend";
import { useAsyncFn } from "@/hooks/useAsyncFn";
import { useSearch, useSearchsByQuery } from "@/store/ListSearch";
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

export interface ListFriendProps {
  id: string
}
export const ListSearch = memo(function ListSearch() {
  const { id } = useNavigationParams();
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
