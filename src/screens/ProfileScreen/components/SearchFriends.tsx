import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  IC_ARROW
} from "@/assets";
import { goBack, navigateFriendlySuggestScreen, navigateListFriendScreen } from "@/utils/navigation";
import { Divider } from "@/components";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { FlatList, View } from "react-native";
import { Fonts } from "@/assets/fonts";
import { AddFriends } from "@/screens/ProfileScreen/components/AddFriends";
import { useSuggestionsByQuery } from "@/store/suggestion";
import useAsyncFn from "@/hooks/useAsyncFn";
import { requestSuggestList } from "@/store/suggestion/function";
import { RequestItem } from "@/screens/NotifyScreen/components/RequestItem";

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()};
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 7px 16px;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 30px;
  justify-content: center;
`;
const IconPlus = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
const STextInput = styled.Text`
  font-size: 18px;
  padding-left: 12px;
  color: ${p => p.theme.gray1};
`;
const ButtonInput = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${Fonts.Medium};
  height: 36px;
  padding: 0 12px
`;
const IconView = styled.View`
  width: 170px;
  padding-left: 16px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
const SettingView = styled.TouchableOpacity`
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.gray5};
`;
const BuutonTest = styled.Text`
  font-size: 13px;
  margin: 5px;
  font-weight: bold;
  color: ${p => p.theme.gray1};
`;

export interface SearchFriendProps {
  id: string
}
const renderItem = ({item}: any) => (
  <RequestItem id={item.toString()} suggestion={true} />
);
const keyExtractor = (item: any) => item.toString();

export const SearchFriends = memo(function SearchFriends() {
  const { id } = useNavigationParams();
  const allSuggest = useSuggestionsByQuery('all') || [];
  const [{}, getData] = useAsyncFn(async () => {
    requestSuggestList();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Row>
        <ButtonIcon onPress={goBack}>
          <IconPlus source={IC_ARROW} />
        </ButtonIcon>
        <ButtonInput>
          <STextInput>Bạn bè</STextInput>
        </ButtonInput>
        <View style={{ width: 30 }}></View>
      </Row>
      <IconView>
        <SettingView onPress={navigateFriendlySuggestScreen}>
          <BuutonTest>Gợi ý</BuutonTest>
        </SettingView>
        <SettingView onPress={navigateListFriendScreen}>
          <BuutonTest>Tất cả bạn bè</BuutonTest>
        </SettingView>
      </IconView>
      <Divider height={2} />
      <FlatList
        ListHeaderComponent={<AddFriends />}
        contentContainerStyle={{paddingVertical: 16}}
        data={allSuggest}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
});