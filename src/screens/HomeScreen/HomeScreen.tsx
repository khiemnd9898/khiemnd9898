import React, {memo} from 'react';
import styled from "styled-components/native";
import {Colors} from "@/themes/Colors";
import {HomeHeader} from "@/components/HomeHeader";
import {Fonts} from "@/assets/fonts";
import {BaseStyles} from "@/themes/BaseStyles";
import {Divider} from "@/components";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

const SScrollView = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 100
    }
})`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 21px;
  color: ${Colors.gray1};
  padding: 12px 16px;
  font-family: ${Fonts.Medium};
`;

const SubTitle = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.Medium};
  color: ${Colors.backgroundColor3};
  line-height: 24px;
`;

const Between = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
  padding: 0 16px 12px 16px;
`;

export const HomeScreen = memo(function HomeScreen() {

    return (
        <Container>
            <HomeHeader title={"l"}/>
            <SScrollView>
            </SScrollView>
        </Container>
    )
});
