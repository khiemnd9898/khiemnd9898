import React, { memo, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { HeaderBack } from "@/components/HeaderBack";
import { ItemFriend } from "@/screens/ProfileScreen/components/ItemFriend";
import { FlatList } from "react-native";
import { useFriendsByQuery } from "@/store/Friend";
import { useAsyncFn } from "@/hooks/useAsyncFn";

import { requestGetFriendList } from "@/store/Friend/functions";
import { HeaderListFriends } from "@/screens/ProfileScreen/components/HeaderListFriends";

const Container = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.backgroundColor};
`;

export interface ListFriendProps {
  id: string
}

const renderItem = ({ item }: any) => <ItemFriend id={item.toString()} />;
const keyExtractor = (item: any) => item.toString();
const Headerright = styled.View``;

export interface ListFriendProps {
  id: string
}

export const ListFriend = memo(function ListFriend() {
  const { id } = useNavigationParams();
  const allPost = useFriendsByQuery("all") || [];
  const [{}, getData] = useAsyncFn(async () => {
    requestGetFriendList().then();
  }, []);

  useEffect(() => {
    getData().then();
  }, []);
  return (
    <Container>
      <HeaderBack title={"Tất cả bạn bè"} />
      <HeaderListFriends />
      <FlatList data={allPost}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
      />

    </Container>
  );
});
