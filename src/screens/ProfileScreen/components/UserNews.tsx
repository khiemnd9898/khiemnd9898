import React, { memo, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { PostComponent } from "@/components/PostComponent";
import { useAsyncFn } from "@/hooks/useAsyncFn";
import { requestGetPostList } from "@/store/post/functions";
import { usePostsByQuery } from "@/store/post";
import { HomeHeader } from "@/screens/HomeScreen/HomeHeader";
import { UsernewHeader } from "@/screens/ProfileScreen/components/UsernewHeader";
import { NewSection } from "@/screens/NotifyScreen/components/NewSection";
import { FriendRequestSection } from "@/screens/NotifyScreen/components/FriendRequestSection";
import { FriendSuggestSection } from "@/screens/NotifyScreen/components/FriendSuggestSection";
import { ProfileImage } from "@/screens/ProfileScreen/components/ProfileImage";
import { Divider } from "@/components";
import { Friendly } from "@/screens/ProfileScreen/components/Friendly";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const renderItem = ({ item }: any) => <PostComponent id={item} />;

const keyExtractor = (item: any) => item.toString();

export const UserNews = memo(function UserNews() {
  const allPost = usePostsByQuery("all") || [];

  const [{}, getData] = useAsyncFn(async () => {
    requestGetPostList().then();
  }, []);

  useEffect(() => {
    getData().then();
  }, []);
  return (
    <Container>
        <FlatList
          ListHeaderComponent={
            <>
              <ProfileImage />
              <Friendly />
              <UsernewHeader/>
            </>
          }
          data={allPost}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={7}
        />
    </Container>
  );
});
