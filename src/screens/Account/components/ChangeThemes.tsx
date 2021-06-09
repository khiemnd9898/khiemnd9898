import React, { memo, useCallback, useState } from "react";
import styled from "styled-components/native";
import { setThemeAction, useTheme } from "@/store/constant";
import { StatusBar, Switch } from "react-native";
import { View } from "react-native-animatable";

const Container = styled.View`
  flex: 1;
`;

const BtnChangeTheme = styled.TouchableOpacity`
  width: 120px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor2};
`;

const TextChangeTheme = styled.Text`
  font-size: 14px;
  color: ${p => p.theme.gray1};
`;

export const ChangeThemes = memo(function ChangeThemes() {
  const currentTheme = useTheme();

  const onChangeTheme = useCallback(() =>{
    setThemeAction(currentTheme === "dark" ? "light" : "dark");
    StatusBar.setBarStyle(currentTheme === "light" ? "light-content" : "dark-content");
  }, [currentTheme]);

  // cái current theme này thay đổi dựa vào cái useTheme
  console.log('vcurrentTheme ', currentTheme)
  return (
    <Container>
      <View style={{ justifyContent: "flex-end" }}>
        <Switch trackColor={{ false: "#999", true: "#eee" }}
                thumbColor={currentTheme === 'dark' ? "#999" : "#111"}
                onValueChange={onChangeTheme}
                value={currentTheme === 'dark'}
        />
        {/* <BtnChangeTheme onPress={onChangeTheme}>
          <TextChangeTheme>
            Change theme
          </TextChangeTheme>
        </BtnChangeTheme>*/}
      </View>
    </Container>
  );
});