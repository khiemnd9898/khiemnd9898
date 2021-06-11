import React, {memo} from "react";
import styled from "styled-components/native";
import {useNavigationParams} from "@/hooks/useNavigationParams";
import {Dimensions, ScrollView} from "react-native";
import FastImage from "react-native-fast-image";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {Gray1Icon} from "@/components";
import {IC_BACK} from "@/assets";

const {width} = Dimensions.get("window");

const HeaderImageWidth = width;
const HeaderImageHeight = (16 / 9) * width;

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const BackAbsolute = styled.TouchableOpacity`
  position: absolute;
  top: ${getStatusBarHeight()}px;
  left: 0;
  width: 60px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;


const HeaderImage = styled(FastImage)`
  width: ${HeaderImageWidth}px;
  height: ${HeaderImageHeight}px;
`;

export interface MarketDetailScreenProps {
    id: string
}

export const MarketDetailScreen = memo(function MarketDetailScreen() {
    const {id} = useNavigationParams<MarketDetailScreenProps>();

    return (
        <Container>
            <BackAbsolute>
                <Gray1Icon source={IC_BACK} />
            </BackAbsolute>
            <ScrollView>
                <HeaderImage source={{uri: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg'}} />
            </ScrollView>
        </Container>
    )
});
