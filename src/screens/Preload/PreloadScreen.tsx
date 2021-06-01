import React, {memo, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {ActivityIndicator} from 'react-native';
import {replaceToLoginScreen, replaceWithMainScreen} from '@/utils/navigation';
import {useToken} from '@/store/constant';
import SplashScreen from 'react-native-splash-screen';
import {BaseStyles} from "@/themes/BaseStyles";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;
export const PreloadScreen = memo(function HomeScreen() {
    const token = useToken();

    const getData = useCallback(async () => {
        setTimeout(() => {
            if (token) {
                setTimeout(async() => {

                }, 1000);
                replaceWithMainScreen()
            } else {
                replaceToLoginScreen()
            }
        }, 1000);
    }, [token]);

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        getData()
    }, []);
    return (
        <Container>
            <Logo source={require('@/assets/images/home_logo.png')} resizeMode={"contain"}/>
            <ActivityIndicator style={BaseStyles.mt12} color={Colors.white}/>
        </Container>
    );
});