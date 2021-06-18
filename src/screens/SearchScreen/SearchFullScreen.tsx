import React, { memo, useCallback, useState } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { IC_ARROW } from "@/assets";
import { goBack } from "@/utils/navigation";
import { Fonts } from "@/assets/fonts";
import { Colors } from "@/themes/Colors";
import { TabBar, TabBarIndicator, TabView } from "react-native-tab-view";
import { View } from "react-native";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { ListSearch } from "@/screens/SearchScreen/ListSearch";

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 8px 16px 8px 0;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 100px;
  height: 36px;
  padding-left: 16px;
  justify-content: center;
`;
const IconPlus = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const STextView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const STextInput = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.Bold};
  color: ${p => p.theme.gray1};
`;
const ButtonText = styled.TouchableOpacity`
  width: 100px;
  justify-content: center;
  align-items: flex-end;
`;
const TextBnt = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.Light};
  color: ${Colors.blue1};
`;
const Row2 = styled.View`
  flex: 1;
  flex-direction: column;
`;
const STabBar = styled(TabBar).attrs((props) => ({
  tabStyle: {
    width: "auto",
    borderRadius: 20,
    marginRight: 10,
    marginleft: 10,
    backgroundColor: "${p => p.Colors.gray5}"
  },
  indicatorStyle: {
    backgroundColor: "${p => p.theme.backgroundColor}"
  },
  labelStyle: {
    textTransform: "capitalize",
    fontFamily: Fonts.Bold
  },
  activeColor: "#1877f2",
  inactiveColor: props.theme.gray3,
  scrollEnabled: false
}))`
  background-color: ${p => p.theme.backgroundColor};
`;

const STabBarIndicator = styled(TabBarIndicator)`
  background-color: ${p => p.theme.gray1};
`;

export interface SearchFullScreenProps {
  id: string
}

export const SearchFullScreen = memo(function SearchFullScreen() {

  const { id } = useNavigationParams();
  const [route, setRoute] = useState({
    index: 0,
    routes: [
      { key: "first", title: "Tất cả" },
      { key: "second", title: "Lượt tìm kiếm" },
      { key: "333", title: "Lượt truy cập" }
    ]
  });
  const renderScene = ({ route }: any) => {
    return <ListSearch />;
  };

  const handleIndexChange = (_index: number) => setRoute({ ...route, index: _index });

  const renderTabBarIndicator = useCallback((props) => {
    return (
      <STabBarIndicator {...props} />
    );
  }, []);

  const renderTabBar = useCallback((props) => {
    return (
      <STabBar scrollEnabled={true}
               lazy={true}
               renderIndicator={renderTabBarIndicator}
               {...props} />
    );
  }, [renderTabBarIndicator]);

  const renderLazyPlaceholder = useCallback(() => {
    return <View />;
  }, []);
  return (
    <Container>
      <Row>
        <ButtonIcon onPress={goBack}>
          <IconPlus source={IC_ARROW} />
        </ButtonIcon>
        <STextView>
          <STextInput>Lịch sử tìm kiếm </STextInput>
        </STextView>
        <ButtonText>
          <TextBnt>Xóa tất cả</TextBnt>
        </ButtonText>
      </Row>
      <TabView
        navigationState={route}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
        renderTabBar={renderTabBar}
        renderLazyPlaceholder={renderLazyPlaceholder}
        swipeEnabled={false}

      />
    </Container>
  );
});