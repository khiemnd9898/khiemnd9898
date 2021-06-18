import React, { memo } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { IC_SEACH } from "@/assets";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};

`;
const SHeader = styled.View`
  justify-content: center;
  height: 50px;
  padding-left: 16px;
`;
const HeaderText = styled.Text`
  font-size: 20px;
  font-family: ${Fonts.Bold};
  color: ${p=>p.theme.gray1};
`;
const SFooter = styled.View`
  flex-direction: column;
  padding: 0 16px;
  padding-bottom: 12px;
`;
const SButtonFooter = styled.TouchableOpacity`
  flex-direction: row;
  padding: 4px 0 4px 0;
  height: 44px;
  align-items: center;
`;
const SIcon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.theme.gray1};
`;
const Stext = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
  padding-left: 12px;

`;
export const FooterSearchScreen = memo(function FooterSearchScreen() {

  return (
    <Container>
      <SHeader>
        <HeaderText>Dành riêng cho bạn</HeaderText>
      </SHeader>
      <SFooter>
        <SButtonFooter>
          <SIcon source={IC_SEACH} />
          <Stext>bài viết bạn đã xem</Stext>
        </SButtonFooter>
        <SButtonFooter>
          <SIcon source={IC_SEACH} />
          <Stext>những người bạn có thể biết</Stext>
        </SButtonFooter>
        <SButtonFooter>
          <SIcon source={IC_SEACH} />
          <Stext>video bạn có thể thích</Stext>
        </SButtonFooter>
        <SButtonFooter>
          <SIcon source={IC_SEACH} />
          <Stext>nhóm bạn có thể thích</Stext>
        </SButtonFooter>
        <SButtonFooter>
          <SIcon source={IC_SEACH} />
          <Stext>sự kiện bạn có thể thích</Stext>
        </SButtonFooter>
      </SFooter>
    </Container>
  );
});