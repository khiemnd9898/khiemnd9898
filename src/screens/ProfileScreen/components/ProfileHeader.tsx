import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { IC_ARROW, IC_SEACH } from "@/assets";
import { goBack, navigateSearchScreen } from "@/utils/navigation";
import { Divider } from "@/components";
import { Fonts } from "@/assets/fonts";

const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${p => p.theme.backgroundColor};
`;

const Row = styled.View`
  flex-direction: row;
  padding: 8px 16px 8px 0;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 50px;
  height:36px;
  padding-left: 16px;
  justify-content: center;
`;
const IconPlus = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1};
`;
const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
const STextInput = styled.Text`
  font-size: 13px;
  padding-left: 12px;
  font-family: ${Fonts.Medium};
  color: ${p => p.theme.gray1};
`;
const ButtonInput = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 36px;
  border-radius: 18px;
  background-color: ${p => p.theme.gray5};
  padding: 0 12px
`;
export const ProfileHeader = memo(function ProfileHeader() {
  const openSearchScreenModal = useCallback(() => {
    navigateSearchScreen({ id: "1" });
  }, []);
  return (
    <Container>
      <Row>
        <ButtonIcon onPress={goBack}>
          <IconPlus source={IC_ARROW} />
        </ButtonIcon>
        <ButtonInput onPress={openSearchScreenModal}>
          <SearchIcon source={IC_SEACH} />
         <STextInput>Seach.... </STextInput>
        </ButtonInput>
      </Row>
      <Divider height={1.5} />
    </Container>
  );
});
