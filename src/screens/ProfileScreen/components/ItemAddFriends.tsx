import { IC_BOOK_MARK, IC_EYE_HIDE, IC_FLAG, IC_MORE } from "@/assets";
import { BottomMenuSelector } from "@/components/BottomMenu";
import useBoolean from "@/hooks/useBoolean";
import { useSuggestion } from "@/store/suggestion";
import { Colors } from "@/themes/Colors";
import React, { memo, useCallback } from "react";
import FastImage from "react-native-fast-image";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 16px;
`;
const ViewLeft = styled.View`
  flex: 1;
`;
const Avatar = styled(FastImage)`
  width: 50px;
  height: 50px;
  border-radius: 32px;
  background-color: ${p => p.theme.gray5};
`;
const ViewRight = styled.View`
  flex: 6;
  padding-left: 18px;
`;
const StyledText = styled.Text`
  color: ${(p) => p.theme.gray1};
  line-height: 20px;
`;
const StyledTextBold = styled(StyledText)`
  font-family: ${Fonts.Bold};
`;
const SubTitle = styled.Text`
  color: ${(p) => p.theme.gray3};
  line-height: 20px;
`;

const RowInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const InfoSection = styled.View`
  flex: 6;
`;
const RowInfoText = styled.View`
  flex-direction: row;
`;
const BtnMoreInfo = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-end;
`;
const IconMore = styled.Image`
  width: 35px;
  height: 35px;
  tint-color: ${(p) => p.theme.gray1};
`;

const RowBtn = styled.View`
  margin: 5px 0 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledBtn = styled.TouchableOpacity<{ suggestion?: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p?.suggestion ? "#1d87cc" : "#0077cc")};
  border-radius: 4px;
  padding: 10px 0;
`;
const DeleteBtn = styled(StyledBtn)`
  background-color: ${Colors.grey2};
  margin-left: 5px;
`;
const TextBtn = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: ${Fonts.Medium};
`;

const menuOptions = [
  {
    icon: IC_BOOK_MARK,
    label: "Đánh dấu là đã xem",
    value: "save"
  },
  {
    icon: IC_EYE_HIDE,
    label: "Gỡ thông báo",
    value: "hide"
  },
  {
    icon: IC_FLAG,
    label: "Báo cáo",
    value: "hide"
  }
];

interface Props {
  id: string;
  suggestion?: boolean;
}

export const ItemAddFriends = memo(function ItemAddFriends(props: Props) {
  const { id } = props;
  const item = useSuggestion(id);
  const [isShowMenu, setShowMenu, setHideMenu] = useBoolean(false);

  const onSelectOption = useCallback((keyName: string, value: string) => {
    if (value === "save") {
      // do something
    }
  }, []);
  if (!item) return null;
  return (
    <>
      <Row>
        <ViewLeft>
          <Avatar source={{ uri: item?.image }} />
        </ViewLeft>
        <ViewRight>
          <RowInfo>
            <InfoSection>
              <RowInfoText>
                <StyledTextBold>{item?.title}</StyledTextBold>
                <StyledText>
                  &nbsp;sent you a friend request.
                </StyledText>

              </RowInfoText>
              <SubTitle>
                {item?.subTitle}
              </SubTitle>
            </InfoSection>
            <BtnMoreInfo
              activeOpacity={0.5}
              onPress={setShowMenu}>
              <IconMore source={IC_MORE} />
            </BtnMoreInfo>
          </RowInfo>
          <RowBtn>
            <StyledBtn suggestion={true}>
              <TextBtn>Thêm bạn bè</TextBtn>
            </StyledBtn>
            <DeleteBtn>
              <TextBtn>Xóa</TextBtn>
            </DeleteBtn>
          </RowBtn>
          <RowBtn>
            <StyledBtn>
              <TextBtn>Đồng ý</TextBtn>
            </StyledBtn>
            <DeleteBtn>
              <TextBtn>Xóa</TextBtn>
            </DeleteBtn>
          </RowBtn>
        </ViewRight>
      </Row>

      <BottomMenuSelector
        visible={isShowMenu}
        onHide={setHideMenu}
        options={menuOptions}
        onSelectOption={onSelectOption}
        inputName={"keyname"}
        label={"Tùy chọn"}
      />
    </>
  );
});
