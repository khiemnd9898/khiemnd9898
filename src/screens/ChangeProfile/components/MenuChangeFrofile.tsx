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
          <Name>Ch???nh s???a trang c?? nh??n </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_WARNING} />
          <Name>Tr???ng th??i t??i kho???n</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_BOX} />
          <Name>Kho l??u tr???</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icondownload
            source={IC_EYE} />
          <Name>Ch??? ????? xem </Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_MENU} />
          <Name>Nh???t k?? ho???t ?????ng</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_ACCEPT} />
          <Name>Qu???n l?? b??i vi???t</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_TEXT_DOCUMENT} />
          <Name>Xem l???i b??i vi???t v?? th???</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_LOCK} />
          <Name>Xem l???i t???t v?? quy???n ri??ng t??</Name>
        </ButtonIcon>
        <ButtonIcon>
          <Icon
            source={IC_SEACH} />
          <Name>T??m ki???m tr??n trang c?? nh??n</Name>
        </ButtonIcon>
      </Header>
      <Divider height={8} />
      <Footer>
        <STextInput>Li??n k???t ?????n trang c?? nh??n c???a b???n</STextInput>
        <SText>Li??n k???t c???a ri??ng b???n tr??n Facebook </SText>
        <Divider height={0.7} />
        <FbUrl>https://www.facebook.com/khiem.khuat.3</FbUrl>
        <CopyView>
          <CopyButton>
            <FbUrl1>Sao ch??p li??n k???t</FbUrl1>
          </CopyButton>
        </CopyView>
      </Footer>
    </Container>
  );
});
