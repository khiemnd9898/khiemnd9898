import { Fonts } from "@/assets/fonts";
import { MarketListScreen } from "@/screens/Market/MarketListScreen";
import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { ActionSection } from "@/screens/Group/components/ActionSection";
import { GroupHeader } from "@/screens/Group/components/GroupHeader";
import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { TabBar, TabBarIndicator, TabView } from "react-native-tab-view";
import styled from "styled-components/native";
import { BannerImg } from "@/screens/Page/components/BannerImg";

const Container = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.backgroundColor};
`;

const STabBar = styled(TabBar).attrs((props) => ({
  tabStyle: {
    width: "auto"
  },
  indicatorStyle: {
    backgroundColor: "#1877f2"
  },
  labelStyle: {
    textTransform: "capitalize",
    fontFamily: Fonts.Bold
  },
  activeColor: "#1877f2",
  inactiveColor: props.theme.gray3,
  scrollEnabled: false
}))`
  background-color: ${(p) => p.theme.backgroundColor};
`;
const STabBarIndicator = styled(TabBarIndicator)`
  background-color: ${(p) => p.theme.gray1};
`;
const SViewLightBlue = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export const GroupScreen = memo(function GroupScreen() {
  const [route, setRoute] = useState({
    index: 0,
    routes: [
      { key: "first", title: "Trang chủ" },
      { key: "second", title: "Cửa hàng" },
      { key: "333", title: "Bài viết" },
      { key: "2", title: "Giới thiệu" }
    ]
  });

  const renderScene = ({ route }: any) => {
    return <SViewLightBlue />;
  };

  const handleIndexChange = (_index: number) =>
    setRoute({ ...route, index: _index });

  const renderTabBarIndicator = useCallback((props) => {
    return <STabBarIndicator {...props} />;
  }, []);

  const renderTabBar = useCallback(
    (props) => {
      return (
        <STabBar
          scrollEnabled={true}
          lazy={true}
          renderIndicator={renderTabBarIndicator}
          {...props}
        />
      );
    },
    [renderTabBarIndicator]
  );

  const renderLazyPlaceholder = useCallback(() => {
    return <View />;
  }, []);

  return (
    <Container>
      <GroupHeader />
      <BannerImg uri="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" />
      <ActionSection />
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
