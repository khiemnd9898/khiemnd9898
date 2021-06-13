import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import {
  IC_CAMERA,
  IC_FACEBOOK_WHITE,
  IC_FLAG, IC_IMAGE,
  IC_UP_SQUARE,
  IC_URL, IC_USER,
  IC_VIDEO_CAMERA
} from "@/assets";
import { TouchableOpacity, View } from "react-native";
import { UserInfomation } from "@/screens/ProfileScreen/components/UserInfomation";
import { BottomMenuSelector } from "@/components/BottomMenu";
import useBoolean from "@/hooks/useBoolean";
import { Divider } from "@/components";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};

`;
const ImageView = styled.View`
  height: 340px;
  padding: 12px 16px 0px 16px;
`;
const ImageView1 = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  position: absolute;
  background-color: ${p => p.theme.backgroundColor2};
  top: 58%;
  right: 10%;
`;
const ImageView2a = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  position: absolute;
  background-color: ${p => p.theme.backgroundColor2};
  top: 85%;
  right: 33%;
`;
const ImageView2 = styled.View`
  position: absolute;
  top: 46%;
  left: 32%;
`;
const Imagesd = styled.Image`
  height: 220px;
  border-radius: 10px;
`;
const Imagefd = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};

`;
const Imagesb = styled.Image`
  width: 170px;
  height: 170px;
  border-radius: 85px;
  border-width: 3px;
  border-color: aliceblue;

`;
const ButtonImage = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
const menuOptions = [
  {
    icon: IC_IMAGE,
    label: "Xem ảnh bìa",
    value: "save"
  },
  {
    icon: IC_UP_SQUARE,
    label: "Tải ảnh lên",
    value: "report"
  },
  {
    icon: IC_FACEBOOK_WHITE,
    label: "Chọn ảnh Facebook",
    value: "hide"
  },
  {
    icon: IC_FLAG,
    label: "Tạo nhóm trên ảnh bìa",
    value: "hide"
  },
  {
    icon: IC_URL,
    label: "Chọn ảnh nghệ thuật",
    value: "website"
  }
];
const menuOptions1 = [
  {
    icon: IC_IMAGE,
    label: "Thêm Khung",
    value: "save"
  },
  {
    icon: IC_VIDEO_CAMERA,
    label: "Quay video đại diện mới",
    value: "report"
  },
  {
    icon: IC_FACEBOOK_WHITE,
    label: "Chọn video đại diện",
    value: "hide"
  },
  {
    icon: IC_FLAG,
    label: "Chọn ảnh đại diện",
    value: "hide"
  },
  {
    icon: IC_USER,
    label: "Đặt avatar làm ảnh đại diện",
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
        <View>
          <ButtonImage>
            <Imagesd source={{ uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-1.jpg" }} />
          </ButtonImage>
        </View>
        <ImageView1>
          <TouchableOpacity onPress={setShowMenu}>
            <Imagefd source={IC_CAMERA} />
          </TouchableOpacity>
        </ImageView1>
        <ImageView2>
          <ButtonImage>
            <Imagesb source={{ uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-1.jpg" }} />
          </ButtonImage>
        </ImageView2>
        <ImageView2a>
          <TouchableOpacity onPress={setShowMenu1}>
            <Imagefd source={IC_CAMERA} />
          </TouchableOpacity>
        </ImageView2a>
      </ImageView>
      <UserInfomation />
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
      <Divider height={1.5} />
    </Container>
  );

});