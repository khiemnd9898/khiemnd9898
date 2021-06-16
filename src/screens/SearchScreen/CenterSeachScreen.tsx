import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Fonts } from "@/assets/fonts";
import { navigateListFriendScreen, navigationSearchFriend } from "@/utils/navigation";
import { Friendsection } from "@/screens/ProfileScreen/components/Friendsection";
import { useFriendsByQuery } from "@/store/Friend";
import useAsyncFn from "@/hooks/useAsyncFn";
import { requestGetFriendList } from "@/store/Friend/functions";
import { Divider } from "@/components";
import { useSearch, useSearchsByQuery } from "@/store/ListSearch";
import { requestGeTSearchList } from "@/store/ListSearch/functions";
import { SearchSection } from "@/screens/SearchScreen/SearchSection";
import { SearchScreen } from "@/screens/Preload/SearchScreen";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};

`;
const Header = styled.View`
  flex-direction: row;
  padding: 12px 16px 12px 16px;
`;
const Headerleft = styled.View`
  flex: 1;
  flex-direction: column;
`;
const Friend = styled.Text`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
`;
const Ftext = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray2};
`;
const FriendButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const SFriend = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
`;
const AllFriend = styled.TouchableOpacity`
  background-color: ${p => p.theme.gray5};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Des = styled.Text`
  font-size: 13px;
  line-height: 19px;
  margin: 10px 5px 10px 5px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
`;
const BotFriends = styled.View`
  padding: 5px 16px 10px 16px;
`;
const Headerright = styled.View`
  align-items: flex-end;
`;
const Sixitems = styled.View`
  padding: 0 16px;
  flex-direction: column;
`;
export const CenterSeachScreen = memo(function CenterSeachScreen() {
  const allSearch = useSearchsByQuery("all") || [];
  const [{ loading, error, value }, getData] = useAsyncFn(async () => {
    requestGeTSearchList();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Header>
        <Headerleft>
          <Friend>Tìm kiếm gần đây</Friend>
        </Headerleft>
        <Headerright>
          <FriendButton>
            <SFriend>
              Xem tất cả
            </SFriend>
          </FriendButton>
        </Headerright>
      </Header>
      <Sixitems>
        {allSearch.slice(0, 20).map((item, i) => (
          <SearchSection id={item.toString()} key={i} />
        ))}
      </Sixitems>
    </Container>
  );
});