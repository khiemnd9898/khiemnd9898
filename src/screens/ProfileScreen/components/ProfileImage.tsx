import React, { memo } from "react";
import styled from "styled-components/native";
import { IC_CAMERA, IC_VIDEO_CAMERA } from "@/assets";
import { TouchableOpacity, View } from "react-native";
import { UserInfomation } from "@/screens/ProfileScreen/components/UserInfomation";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};

`;
const ImageView = styled.View`
  height: 370px;
  padding: 12px 16px 12px 16px;
`;
const ImageView1 = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: ${p => p.theme.backgroundColor2};
  top: 56%;
  right: 10%;
`;
const ImageView2a = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: ${p => p.theme.backgroundColor2};
  top: 90%;
  right: 28%;
`;
const ImageView2 = styled.View`
  position: absolute;
  top: 48%;
  left: 29%;
`;
const Imagesd = styled.Image`
  height: 250px;
  border-radius: 10px;
`;
const Imagefd = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};

`;
const Imagesb = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border-width: 3px;
  border-color: aliceblue;

`;
const ButtonImage = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
export const ProfileImage = memo(function ProfileImage() {
  return (
    <Container>

      <ImageView>
        <View>
          <ButtonImage>
            <Imagesd source={{ uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-1.jpg" }} />
          </ButtonImage>
        </View>

        <ImageView1>
          <TouchableOpacity>
            <Imagefd source={IC_CAMERA} />
          </TouchableOpacity>
        </ImageView1>
        <ImageView2>
          <ButtonImage>
            <Imagesb source={{ uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-1.jpg" }} />
          </ButtonImage>
        </ImageView2>

        <ImageView2a>
          <TouchableOpacity>
            <Imagefd source={IC_CAMERA} />
          </TouchableOpacity>
        </ImageView2a>
      </ImageView>
      <UserInfomation></UserInfomation>
    </Container>
  );

});