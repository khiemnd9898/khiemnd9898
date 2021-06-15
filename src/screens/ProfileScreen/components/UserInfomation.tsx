import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { IC_CLOCK, IC_GRADUATED, IC_HEART, IC_LOCATION, IC_MORE, IC_PLUS, IC_TAB_HOME } from "@/assets";
import { Fonts } from "@/assets/fonts";
import { Divider } from "@/components";
import { navigateChangeProfileScreen, navigateProfileScreen } from "@/utils/navigation";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
`;
const Nameuser = styled.View`
  padding: 5px 0 10px 0;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

`;
const TextName = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
`;
const TextName1 = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.Medium};
  padding-left: 5px;
  color: ${p => p.theme.gray1};
`;
const ViewButton = styled.View`
  flex-direction: row;
  padding: 10px 16px 10px 16px;
`;
const Buttonleft = styled.TouchableOpacity`
  height: 44px;
  width: 40px;
  background-color: ${p => p.theme.gray5};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
const Des = styled.Text`
  font-size: 13px;
  padding-left: 10px;
  line-height: 19px;
  color: #fff;
  font-family: ${Fonts.Medium};
`;
const ButtonImage = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #fff;
`;
const ButtonImage1 = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1}
`;
const ViewInfo = styled.View`
  flex-direction: column;
  padding-top: 10px;
`;
const TextViewInfo = styled.View`
  flex: 1;
  padding: 10px 16px 10px 16px;
  flex-direction: row;
  align-items: center;
`;
const Tex = styled.Text`
  font-size: 16px;
  padding-left: 10px;
  line-height: 19px;
  color: ${p => p.theme.gray1};
`;
const Buttonabc = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 44px;
  background-color: #253391;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const UserInfomation = memo(function UserInfomation() {
  const openChangeProfile  = useCallback(() => {
    navigateChangeProfileScreen({ id: "1" })
  }, []);
  return (
    <Container>
      <Nameuser>
        <TextName>Định Pu</TextName>
        <TextName1>(OK OK OK)</TextName1>
      </Nameuser>
      <ViewButton>
        <Buttonabc>
          <ButtonImage source={IC_PLUS} />
          <Des>Thêm vào tin</Des>
        </Buttonabc>
        <Buttonleft onPress={openChangeProfile}>
          <ButtonImage1 source={IC_MORE} />
        </Buttonleft>
      </ViewButton>
      <Divider height={1} />
      <ViewInfo>
          <TextViewInfo>
            <ButtonImage1 source={IC_GRADUATED} />
            <Tex>Đã từng học ở Hà Nội </Tex>
          </TextViewInfo>
          <TextViewInfo>
            <ButtonImage1 source={IC_TAB_HOME} />
            <Tex>Sống tại Hà Nội </Tex>
          </TextViewInfo>
          <TextViewInfo>
            <ButtonImage1 source={IC_LOCATION} />
            <Tex>Đến từ Hà Nội</Tex>
          </TextViewInfo>
          <TextViewInfo>
            <ButtonImage1 source={IC_HEART} />
            <Tex>Độc thân </Tex>
          </TextViewInfo>
          <TextViewInfo>
            <ButtonImage1 source={IC_CLOCK} />
            <Tex>Tham gia tháng 6 2020 </Tex>
          </TextViewInfo>
          <TextViewInfo>
            <ButtonImage1 source={IC_MORE} />
            <Tex>Xem thông tin giới thiệu của bạn </Tex>
          </TextViewInfo>
        <TextViewInfo>
          <Buttonabc>
            <Des>Chỉnh sửa chi tiết công khai</Des>
          </Buttonabc>
        </TextViewInfo>
      </ViewInfo>
      <Divider height={1}/>
    </Container>
  );
});