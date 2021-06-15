import React, { memo } from "react";
import styled from "styled-components/native";
import {Divider} from "@/components";
import { IC_CART, IC_DOCUMENT1, IC_DOCUMENT2, IC_DOWNLOAD } from "@/assets";
import {ChangeThemes} from "@/screens/Account/components/ChangeThemes";
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor1};
`;
const Icon=styled.Image`
  width: 24px;
  height: 24px;
`;
const Icondownload = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};
`;
const Name = styled.Text`
  font-size: 14px;
  color: ${p => p.theme.gray1};
  padding-left: 18px;
  line-height: 44px;
`;
const Header = styled.View`
  flex-direction: column;
`;
const ButtonIcon=styled.TouchableOpacity`
  width: 100%;
  flex-direction:row;
  align-items: center;
  padding-left: 16px;
  height: 50px;
  border-bottom-width: 0.7px;
  border-bottom-color: ${p => p.theme.divider};
`;
const STextInput = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.Bold};
  padding-left: 16px;
  color: ${p => p.theme.gray1};
`;
const SText=styled.Text`
  font-size: 14px;
  color: ${p => p.theme.gray3};
  padding-left: 16px;
`;
const FbUrl = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${p => p.theme.gray1};
  padding-left: 16px;
  line-height: 44px;
`;


export const MenuChangeFrofile= memo(function MenuChangeFrofile() {
  return (
    <Container>
      <Header>
        <ButtonIcon>
          <Icondownload source={IC_DOCUMENT1}/>
          <Name>Chỉnh sửa trang cá nhân </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Trạng thái tài khoản</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_CART} />
          <Name>Kho lưu trữ</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icondownload
            source={IC_DOWNLOAD} />
          <Name>Chế độ xem </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Trạng thái tài khoản</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Nhật ký hoạt động</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Quản lí bài viết</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Xem lại bài viết và thẻ</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Xem lối tắt và quyền riêng tư</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_DOCUMENT2} />
          <Name>Tìm kiếm trên trang cá nhân</Name>
        </ButtonIcon>
      </Header>
      <Divider height={12} />
      <Header>
        <STextInput>Liên kết đến trang cá nhân của bạn</STextInput>
        <SText>Liên kết của riêng bạn trên Facebook </SText>
        <Divider height={0.7} />
        <FbUrl>https://www.facebook.com/khiem.khuat.3</FbUrl>

      </Header>
    </Container>
  );
});
