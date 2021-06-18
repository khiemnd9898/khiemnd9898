import React, { memo } from "react";
import styled from "styled-components/native";
import { Divider } from "@/components";
import { IC_ACCEPT, IC_BOX, IC_EYE, IC_LOCK, IC_MENU, IC_PEN, IC_SEACH, IC_TEXT_DOCUMENT, IC_WARNING } from "@/assets";
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor1};
`;
const Icon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};
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
const ButtonIcon = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  height: 48px;
  border-bottom-width: 0.7px;
  border-bottom-color: ${p => p.theme.divider};
`;
const Footer = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
`;
const STextInput = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.Bold};
  padding:4px 16px 0 16px;
  color: ${p => p.theme.gray1};
`;
const SText = styled.Text`
  font-size: 14px;
  padding:4px 16px 4px 16px;
  color: ${p => p.theme.gray3};
`;
const FbUrl = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding:0 16px 0 16px;
  color: ${p => p.theme.gray1};
  line-height: 44px;
`;
const CopyView = styled.View`
  padding:0 16px 0 16px;
`;
const CopyButton=styled.TouchableOpacity`
  height:36px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color:${p => p.theme.gray5};
`;
const FbUrl1 = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${p => p.theme.gray1};
`;
export const MenuChangeFrofile = memo(function MenuChangeFrofile() {
  return (
    <Container>
      <Header>
        <ButtonIcon>
          <Icondownload source={IC_PEN} />
          <Name>Chỉnh sửa trang cá nhân </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_WARNING} />
          <Name>Trạng thái tài khoản</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_BOX} />
          <Name>Kho lưu trữ</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icondownload
            source={IC_EYE} />
          <Name>Chế độ xem </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_MENU} />
          <Name>Nhật ký hoạt động</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_ACCEPT} />
          <Name>Quản lí bài viết</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_TEXT_DOCUMENT} />
          <Name>Xem lại bài viết và thẻ</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_LOCK} />
          <Name>Xem lối tắt và quyền riêng tư</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_SEACH} />
          <Name>Tìm kiếm trên trang cá nhân</Name>
        </ButtonIcon>
      </Header>
      <Divider height={8} />
      <Footer>
        <STextInput>Liên kết đến trang cá nhân của bạn</STextInput>
        <SText>Liên kết của riêng bạn trên Facebook </SText>
        <Divider height={0.7} />
        <FbUrl>https://www.facebook.com/khiem.khuat.3</FbUrl>
        <CopyView>
          <CopyButton>
            <FbUrl1>Sao chép liên kết</FbUrl1>
          </CopyButton>
        </CopyView>
      </Footer>
    </Container>
  );
});
