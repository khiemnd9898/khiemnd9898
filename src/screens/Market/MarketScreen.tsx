import React, {memo, useCallback, useState} from "react";
import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {Fonts} from "@/assets/fonts";
import {TouchableOpacity, View} from "react-native";
import {IC_HOME_SEARCH} from "@/assets";
import {TabBar, TabBarIndicator, TabView} from 'react-native-tab-view';
import {MarketListScreen} from "@/screens/Market/MarketListScreen";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const Header = styled.View`
  width: 100%;
  height: ${56 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px; 
`;

const HeaderTitle = styled.Text`
  font-size: 25px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1}
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1}
`;

const STabBar = styled(TabBar).attrs((props) => ({
    tabStyle: {
        paddingHorizontal: 20,
        width: 'auto'
    },
    activeColor: props.theme.gray1,
    inactiveColor: props.theme.gray3
}))`
  background-color: ${p => p.theme.backgroundColor};
`;

const STabBarIndicator = styled(TabBarIndicator)`
  background-color: ${p => p.theme.gray1};
`;

export const MarketScreen = memo(function MarketScreen() {
    const [route, setRoute] = useState({
        index: 0,
        routes: [
            {key: 'first', title: 'WOMAN FASHION'},
            {key: 'second', title: 'Bag'},
            {key: '333', title: 'Beauty'},
            {key: '2', title: 'Handbag'},
            {key: '22', title: 'Fashion'},
            {key: '11', title: 'Second'},
        ]
    });

    const renderScene = ({route}: any) => {
        return <MarketListScreen/>
    };

    const handleIndexChange = (_index: number) => setRoute({...route, index: _index});

    const renderTabBarIndicator = useCallback((props) => {
        return (
            <STabBarIndicator {...props}/>
        )
    }, []);

    const renderTabBar = useCallback((props) => {
        return (
            <STabBar scrollEnabled={true}
                     lazy={true}
                     renderIndicator={renderTabBarIndicator}
                     {...props} />
        )
    }, [renderTabBarIndicator]);

    const renderLazyPlaceholder = useCallback(() => {
        return <View/>
    }, []);

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Market
                </HeaderTitle>
                <TouchableOpacity>
                    <Icon source={IC_HOME_SEARCH}/>
                </TouchableOpacity>
            </Header>
                <TabView
                  navigationState={route}
                  renderScene={renderScene}
                  onIndexChange={handleIndexChange}
                  renderTabBar={renderTabBar}
                  renderLazyPlaceholder={renderLazyPlaceholder}
                />


        </Container>
    )
});
