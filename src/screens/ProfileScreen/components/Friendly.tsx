import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { navigateListFriendScreen, navigationSearchFriend } from "@/utils/navigation";
import { Friendsection } from "@/screens/ProfileScreen/components/Friendsection";
import { useFriendsByQuery } from "@/store/Friend";
import useAsyncFn from "@/hooks/useAsyncFn";
import { requestGetFriendList } from "@/store/Friend/functions";
import { Divider } from "@/components";

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
  border-radius: 10px;
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
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Friendly = memo(function Friendly() {
  const openFriendModal = useCallback(() => {
    navigateListFriendScreen({ id: "1" });
  }, []);
  const openSearchFriendModal = useCallback(() => {
    navigationSearchFriend({ id: "1" });
  }, []);

  const allPost = useFriendsByQuery("all") || [];
  const [{ loading, error, value }, getData] = useAsyncFn(async () => {
    requestGetFriendList();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Header>
        <Headerleft>
          <Friend>Bạn Bè</Friend>
          <Ftext>50 người bạn</Ftext>
        </Headerleft>
        <Headerright>
          <FriendButton onPress={openSearchFriendModal}>
            <SFriend>
              Tìm bạn bè
            </SFriend>
          </FriendButton>
        </Headerright>
      </Header>
      <Sixitems>
        {allPost.slice(0, 6).map((item, i) => (
          <Friendsection id={item.toString()} key={i} />
        ))}
      </Sixitems>
      <BotFriends>
        <AllFriend onPress={openFriendModal}>
          <Des>Xem tất cả bạn bè </Des>
        </AllFriend>
      </BotFriends>
      <Divider height={12} />
    </Container>
  );
});