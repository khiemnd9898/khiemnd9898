import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { navigateSearchFull } from "@/utils/navigation";
import useAsyncFn from "@/hooks/useAsyncFn";
import { useSearchsByQuery } from "@/store/ListSearch";
import { requestGeTSearchList } from "@/store/ListSearch/functions";
import { SearchSection } from "@/screens/SearchScreen/SearchSection";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};

`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
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
const FriendButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const SFriend = styled.Text`
  font-size: 14px;
  padding: 10px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
`;
const Headerright = styled.View`
  align-items: flex-end;
`;
const Sixitems = styled.View`
  flex-direction: column;
`;
export const CenterSeachScreen = memo(function CenterSeachScreen() {
  const openSearchFullModal = useCallback(() => {
    navigateSearchFull({ id: "1" });
  }, []);
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
          <FriendButton onPress={openSearchFullModal}>
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
