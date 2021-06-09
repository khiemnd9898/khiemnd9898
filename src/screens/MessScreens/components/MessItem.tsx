import React, { memo, useCallback, useState } from "react";
import styled from "styled-components/native";
import { Fonts } from "@/assets/fonts";
import { Colors } from "@/themes/Colors";
import FastImage from "react-native-fast-image";
import { navigateMessengerScreen, openCommentScreen } from "@/utils/navigation";

const Container = styled.TouchableOpacity<{ color?: any }>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor)};
`;
const ButtonIcon = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 16px 5px 16px;
`;
const Column = styled.View`
  width: 60px;
`;
const Column2 = styled.View`
  flex: 1;
  padding-left: 10px;
  flex-direction: column;
  justify-content: center;
`;
const Comlumn3 = styled.View`
  width: 60px;
  align-items: flex-end;
  justify-content: flex-end;

`;
const Avatar = styled(FastImage)`
  width: 50px;
  height: 50px;
  border-radius: ${60 / 2}px;
`;
const Name = styled.Text`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
  font-weight: 500;
`;
const Title = styled.Text`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.gray4};
  font-family: ${Fonts.Medium};
`;
const Time = styled.Text`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.gray4};
  font-family: ${Fonts.Medium};
`;

interface Props {
  id: string
}

export const MessItem = memo(function MessItem(props: Props) {
  const { id } = props;
  const openMessageModal = useCallback(() => {
    navigateMessengerScreen({id: '1'})
  }, []);
  return (
    <Container>
      <ButtonIcon onPress={openMessageModal}>
        <Column>
          <Avatar
            source={{ uri: "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg" }} />
        </Column>
        <Column2>
          <Name numberOfLines={1}>Hồ Ngọc Hà</Name>
          <Title numberOfLines={1}>Hi mình làm quen nhé anh!!!</Title>
        </Column2>
        <Comlumn3>
          <Time>7:19 am </Time>
        </Comlumn3>
      </ButtonIcon>
    </Container>

  );
});