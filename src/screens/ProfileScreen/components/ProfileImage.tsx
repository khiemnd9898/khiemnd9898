import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import {
    IC_CAMERA,
    IC_FACEBOOK_WHITE,
    IC_FLAG,
    IC_IMAGE,
    IC_UP_SQUARE,
    IC_URL,
    IC_USER,
    IC_VIDEO_CAMERA
} from "@/assets";
import { Dimensions } from "react-native";
import { UserInfomation } from "@/screens/ProfileScreen/components/UserInfomation";
import { BottomMenuSelector } from "@/components/BottomMenu";
import useBoolean from "@/hooks/useBoolean";
import { Divider } from "@/components";
import FastImage from "react-native-fast-image";

const {width} = Dimensions.get("window");

const AvatarSize = 160;
const LeftAvatar = (width - AvatarSize) / 2;
const HeaderBgHeight = 260;
const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};

`;
const ImageView = styled.View`
  height: ${HeaderBgHeight + AvatarSize * (1 / 2)}px;
  padding: 12px 16px 0px 16px;
`;

const BgProfileView = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${HeaderBgHeight}px;
  z-index: -1;
`;

const BgImage = styled(FastImage)`
  width: 100%;
  height: 100%;
`;

const BtnChangeBg = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${p => p.theme.gray5};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;


const AvatarProfileView = styled.TouchableOpacity`
  position: absolute;
  left: ${LeftAvatar}px;
  top: ${HeaderBgHeight - AvatarSize / 2}px;
  width: ${AvatarSize}px;
  height: ${AvatarSize}px;
`;

const AvatarImage = styled(FastImage)`
  width: ${AvatarSize}px;
  height: ${AvatarSize}px;
  border-radius: ${AvatarSize / 2}px;
  border-width: 3px;
  border-color: ${p => p.theme.backgroundColor};
`;

const BtnChangeAvatar = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
  background-color: ${p => p.theme.gray5};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const IconCamera = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1}
`;
const menuOptions = [
    {
        icon: IC_IMAGE,
        label: "Xem ???nh b??a",
        value: "save"
    },
    {
        icon: IC_UP_SQUARE,
        label: "T???i ???nh l??n",
        value: "report"
    },
    {
        icon: IC_FACEBOOK_WHITE,
        label: "Ch???n ???nh Facebook",
        value: "hide"
    },
    {
        icon: IC_FLAG,
        label: "T???o nh??m tr??n ???nh b??a",
        value: "hide"
    },
    {
        icon: IC_URL,
        label: "Ch???n ???nh ngh??? thu???t",
        value: "website"
    }
];
const menuOptions1 = [
    {
        icon: IC_IMAGE,
        label: "Th??m Khung",
        value: "save"
    },
    {
        icon: IC_VIDEO_CAMERA,
        label: "Quay video ?????i di???n m???i",
        value: "report"
    },
    {
        icon: IC_FACEBOOK_WHITE,
        label: "Ch???n video ?????i di???n",
        value: "hide"
    },
    {
        icon: IC_FLAG,
        label: "Ch???n ???nh ?????i di???n",
        value: "hide"
    },
    {
        icon: IC_USER,
        label: "?????t avatar l??m ???nh ?????i di???n",
        value: "website"
    }
];
export const ProfileImage = memo(function ProfileImage() {
    const [isShowMenu, setShowMenu, setHideMenu] = useBoolean(false);
    const [isShowMenu1, setShowMenu1, setHideMenu1] = useBoolean(false);
    const onSelectOption = useCallback((keyName: string, value: string) => {
        if (value === "save") {
            // do something
        }
    }, []);
    return (
        <Container>
            <ImageView>
                <BgProfileView onPress={setShowMenu}>
                    <BgImage source={{uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-1.jpg"}}/>
                    <BtnChangeBg onPress={setShowMenu}>
                        <IconCamera source={IC_CAMERA}/>
                    </BtnChangeBg>
                </BgProfileView>
                <AvatarProfileView activeOpacity={0.95} onPress={setShowMenu1}>
                    <AvatarImage source={{uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-1.jpg"}}/>
                    <BtnChangeAvatar onPress={setShowMenu1}>
                        <IconCamera source={IC_CAMERA}/>
                    </BtnChangeAvatar>
                </AvatarProfileView>
            </ImageView>

            <UserInfomation/>
            <BottomMenuSelector
                visible={isShowMenu}
                onHide={setHideMenu}
                options={menuOptions}
                onSelectOption={onSelectOption}
                inputName={"keyname"}
                label={"Menu"}
            />
            <BottomMenuSelector
                visible={isShowMenu1}
                onHide={setHideMenu1}
                options={menuOptions1}
                onSelectOption={onSelectOption}
                inputName={"keyname"}
                label={"Menu"}
            />
            <Divider height={1.5}/>
        </Container>
    );

});
