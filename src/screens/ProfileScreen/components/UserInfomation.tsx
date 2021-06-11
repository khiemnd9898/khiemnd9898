import React, { memo } from "react";
import styled from "styled-components/native";
import { IC_HEART, IC_MORE, IC_PLUS } from "@/assets";
import { Fonts } from "@/assets/fonts";
import { Divider } from "@/components";

const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
`;
const Nameuser = styled.View`
  padding: 10px 0 5px 0;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

`;
const TextName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${p => p.theme.gray1};
`;
const TextName1 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-left: 5px;
  color: ${p => p.theme.gray1};
`;
const ViewButton = styled.View`
  flex-direction: row;
  padding: 10px 16px 20px 16px;
`;
const Buttoninfo = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 36px;
  background-color: #253391;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
const Buttonleft = styled.TouchableOpacity`
  height: 36px;
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
  color: ${p => p.theme.gray5};
  font-family: ${Fonts.Medium};
`;
const ButtonImage = styled.Image`
  width: 18px;
  height: 18px;
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
  padding: 10px 16px 15px 16px;
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
  height: 36px;
  background-color: #253391;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px 16px 5px 16px;
`;
export const UserInfomation = memo(function UserInfomation() {
  return (
    <Container>
      <Nameuser>
        <TextName>Định Pu</TextName>
        <TextName1>(OK OK OK)</TextName1>
      </Nameuser>
      <ViewButton>
        <Buttoninfo>
          <ButtonImage source={IC_PLUS} />
          <Des>Thêm vào tin</Des>
        </Buttoninfo>
        <Buttonleft>
          <ButtonImage1 source={IC_MORE} />
        </Buttonleft>
      </ViewButton>
      <Divider height={1} />
      <ViewInfo>
        <TextViewInfo>
          <ButtonImage source={IC_HEART} />
          <Tex>Đã từng học ở Hà Nội </Tex>
        </TextViewInfo>
        <TextViewInfo>
          <ButtonImage source={IC_HEART} />
          <Tex>Đã từng học ở Đại Học Công Ngiêp Hà Nội </Tex>
        </TextViewInfo>
        <TextViewInfo>
          <ButtonImage source={IC_HEART} />
          <Tex>Đã từng học ở Đại Học Công Ngiêp Hà Nội </Tex>
        </TextViewInfo>
        <TextViewInfo>
          <ButtonImage source={IC_HEART} />
          <Tex>Đã từng học ở Đại Học Công Ngiêp Hà Nội </Tex>
        </TextViewInfo>
        <TextViewInfo>
          <ButtonImage source={IC_MORE} />
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