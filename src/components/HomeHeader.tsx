import React, {memo, ReactElement, useCallback} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from "@/themes/Colors";
import {IC_CHAT_FILL, IC_HOME_SEARCH} from "@/assets";
import {Fonts} from "@/assets/fonts";
import {BaseStyles} from "@/themes/BaseStyles";
import {TextStyle, TouchableOpacity} from "react-native";
import {navigateChatScreen, navigateMessengerScreen, openSearchScreen} from "@/utils/navigation";
import {isUserStaff} from "@/store/constant";

const Container = styled.View`
  height: ${getStatusBarHeight() + 62}px;
  background-color: ${Colors.white};
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  border-bottom-width: 0.3px;
  border-bottom-color: #eee;
`;

const Left = styled.TouchableOpacity`
  width: 80px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

const Center = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding-left: 16px;
`;

const Right = styled.View`
  width: 80px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
`;

const IconBell = styled.Image`
  width: 24px;
  height: 24px;
`;

const BannerText = styled.Text`
  font-size: 26px;
  font-family: ${Fonts.Medium};
  color: ${Colors.backgroundColor};
`;

interface Props {
    title?: string,
    right?: ReactElement,
    textStyle?: TextStyle
}

export const HomeHeader = memo(function HomeHeader(props: Props) {
    const {title, right, textStyle} = props;
    const isStaff = isUserStaff();

    const goToChat = useCallback(() => {
        if (isStaff) {
            navigateMessengerScreen();
        } else {
            navigateChatScreen({dialogId: ''})
        }
    }, [isStaff]);

    return (
        <Container>
            <Center>
                <BannerText style={textStyle}>
                    {title || 'Tên ứng dụng'}
                </BannerText>
            </Center>
            <Right>
                {right
                    ? right
                    : <>
                        <TouchableOpacity onPress={openSearchScreen}>
                            <IconBell source={IC_HOME_SEARCH}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goToChat} style={BaseStyles.ml8}>
                            <IconBell source={IC_CHAT_FILL}/>
                        </TouchableOpacity>

                    </>
                }
            </Right>
        </Container>
    )
});
