import React, { memo, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { defaultScreenOptions, navigationRef } from "@/utils/navigation";
import { LoginScreen } from "@/screens/Login/LoginScreen";
import { RegisterScreen } from "@/screens/Login/RegisterScreen";
import { PreloadScreen } from "@/screens/Preload/PreloadScreen";
import { RegisterManualScreen } from "./screens/Login/RegisterManualScreen";
import { OTPScreen } from "@/screens/Login/OTPScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar, TabBarIcon } from "@/components/CustomTabbar";
import { IC_TAB_ACCOUNT, IC_TAB_HOME, IC_TAB_MARKET, IC_TAB_MESSAGE, IC_TAB_NOTIFY, IC_TAI_KHOAN } from "@/assets";
import { VideoScreen } from "@/screens/VideoScreen";
import { SearchScreen } from "@/screens/Preload/SearchScreen";
import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { AccountScreen } from "@/screens/Account/AccountScreen";
import { MessScreen } from "@/screens/MessScreens/MessageScreen";
import { CommentScreen } from "@/screens/Comment/CommentScreen";
import { WritePostScreen } from "@/screens/Write/WritePostScreen";
import { NotifyScreen } from "@/screens/NotifyScreen/NotifyScreen";
import { FriendlyRequestScreen } from "@/screens/NotifyScreen/FriendlyRequestScreen";
import { ProfileScreen } from "@/screens/ProfileScreen/ProfileScreen";
import { PostComponent } from "@/components/PostComponent";
import { ChatScreen } from "@/screens/MessScreens/components/ChatScreen";
import { FriendlySuggestScreen } from "@/screens/NotifyScreen/FriendlySuggestScreen";
import { MarketScreen } from "@/screens/Market/MarketScreen";
import {MarketDetailScreen} from "@/screens/Market/MarketDetailScreen";
import { ListFriend } from "@/screens/ProfileScreen/components/ListFriend";
import { Friendly } from "@/screens/ProfileScreen/components/Friendly";

import { SearchFriends } from "@/screens/ProfileScreen/components/SearchFriends";

import {SelectAlbumScreen} from '@/screens/SelectAlbum/SelectAlbumScreen';
import {CreateAlbumScreen} from '@/screens/CreateAlbum/CreateAlbumScreen';

import { ChangeProfile } from "@/ChangeProfile/ChangeProfileScreen";


import {PageScreen} from '@/screens/Page/PageScreen';
import {GroupScreen} from '@/screens/Group/GroupScreen';
import { SearchFullScreen } from "@/screens/SearchScreen/SearchFullScreen";



const RootStack = createStackNavigator();
const ModalStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const MainStack = createStackNavigator();
const TabBarStack = createBottomTabNavigator();

const TabBarStackComponent = memo(function TabBarStackComponent() {
  return (
    <TabBarStack.Navigator
      tabBar={(props: any) => <CustomTabBar {...props} />}
      initialRouteName={"Center"}>
      <TabBarStack.Screen
        name={"Home"}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }: any) => (
            <TabBarIcon isFocused={focused} icon={IC_TAB_HOME} />
          )
        }}
        component={HomeScreen}
      />
      <TabBarStack.Screen
        name={"Market"}
        options={{
          title: "Market",
          tabBarIcon: ({ focused }: any) => (
            <TabBarIcon isFocused={focused} icon={IC_TAB_MARKET} />
          )
        }}
        component={MarketScreen}
      />
      <TabBarStack.Screen
        name={"Messenger"}
        options={{
          title: "Message",
          tabBarIcon: ({ focused }: any) => (
            <TabBarIcon isFocused={focused} icon={IC_TAB_MESSAGE} />
          )
        }}
        component={MessScreen} />

      <TabBarStack.Screen
        name={"Notify"}
        options={{
          title: "Notify",
          tabBarIcon: ({ focused }: any) => (
            <TabBarIcon isFocused={focused} icon={IC_TAB_NOTIFY} />
          )
        }}
        component={NotifyScreen}
      />

      <TabBarStack.Screen
        name={"Account"}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }: any) => (
            <TabBarIcon isFocused={focused} icon={IC_TAB_ACCOUNT} />
          )
        }}
        component={AccountScreen}
      />
    </TabBarStack.Navigator>
  );
});


const MainStackComponent = memo(function MainStackComponent() {
  return (
    <MainStack.Navigator
      initialRouteName={"HomeScreen"}
      headerMode={"none"}
      screenOptions={defaultScreenOptions}>
      <RootStack.Screen name={"HomeScreen"} component={PreloadScreen} />
      <MainStack.Screen name={"LoginScreen"} component={LoginScreen} />
      <MainStack.Screen name={"RegisterManualScreen"} component={RegisterManualScreen} />
      <MainStack.Screen name={"OTPScreen"} component={OTPScreen} />
      <MainStack.Screen name={"RegisterScreen"} component={RegisterScreen} />
      <MainStack.Screen name={"MessScreen"} component={MessScreen} />
      <MainStack.Screen name={"PostComponent"} component={PostComponent} />
    </MainStack.Navigator>
  );
});

export const ModalStackComponent = memo(function ModalStackComponent() {
  return (
    <ModalStack.Navigator
      initialRouteName={"Routes"}
      headerMode={"none"}
      screenOptions={defaultScreenOptions}>
      <ModalStack.Screen name={"Routes"} component={MainStackComponent} />
      <ModalStack.Screen name={"Main"} component={TabBarStackComponent} />
      <ModalStack.Screen name={"SearchScreen"} component={SearchScreen} />
      <ModalStack.Screen name={"CommentScreen"} component={CommentScreen} />
      <ModalStack.Screen name={"FriendlyRequestScreen"} component={FriendlyRequestScreen} />
      <ModalStack.Screen name={"MessengerScreen"} component={ChatScreen} />
      <ModalStack.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <ModalStack.Screen name={"FriendlySuggestScreen"} component={FriendlySuggestScreen} />
      <ModalStack.Screen name={"SearchFullScreen"} component={SearchFullScreen}/>

      <ModalStack.Screen name={'ListFriend'} component={ListFriend}/>
      <ModalStack.Screen name={'SearchFriends'} component={SearchFriends}/>
      <ModalStack.Screen name={'ChangeProfile'} component={ChangeProfile}/>

      <ModalStack.Screen name={"PageScreen"} component={PageScreen} />
      <ModalStack.Screen name={"GroupScreen"} component={GroupScreen} />
    </ModalStack.Navigator>
  );
});

export const Routes = memo(function Routes() {
  const routeNameRef = React.useRef<string>("");
  const onStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current;
    // @ts-ignore
    let currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (currentRouteName && previousRouteName !== currentRouteName) {
      // analytics().setCurrentScreen(currentRouteName);
      routeNameRef.current = currentRouteName;
    }
  }, []);

    return (
        <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
            <RootStack.Navigator initialRouteName={'Root'} headerMode={'none'} mode={'modal'}>
                <RootStack.Screen name={'Root'} component={ModalStackComponent}/>
                <RootStack.Screen name={'VideoScreen'} component={VideoScreen}/>
                <RootStack.Screen name={'WritePostScreen'} component={WritePostScreen} />
                <RootStack.Screen name={'SelectAlbumScreen'} component={SelectAlbumScreen}/>
                <RootStack.Screen name={'CreateAlbumScreen'} component={CreateAlbumScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
});
// sao 3 file tên khác nhau thế này
// mà nó là dấu cộng sao lại đặt tên là close
export default Routes;
