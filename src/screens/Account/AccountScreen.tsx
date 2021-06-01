import React, {memo, useCallback} from 'react';
import styled from "styled-components/native";
import {setThemeAction, useTheme} from "@/store/constant";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
  align-items: center;
  justify-content: center;
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


export const AccountScreen = memo(function AccountScreen() {
    const currentTheme = useTheme();
    const onChangeTheme = useCallback(() => {
        setThemeAction(currentTheme === 'dark' ? "light" : "dark")
    }, [currentTheme]);

    return (
        <Container>
            <BtnChangeTheme onPress={onChangeTheme}>
                <TextChangeTheme>
                    Change theme
                </TextChangeTheme>
            </BtnChangeTheme>
        </Container>
    )
});

