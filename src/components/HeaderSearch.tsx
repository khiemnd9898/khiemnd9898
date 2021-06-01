import React, {memo, ReactElement, useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from "@/themes/Colors";
import {IC_BACK, IC_CLOSE, IC_HOME_SEARCH} from "@/assets";
import {goBack} from "@/utils/navigation";
import {TextStyle, ViewStyle} from "react-native";
import {Fonts} from "@/assets/fonts";

const Container = styled.View`
  height: ${getStatusBarHeight() + 56}px;
  background-color: ${Colors.white};
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #DEDEDE;
`;

const Left = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;

const Center = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding-right: 20px;
`;

const Right = styled.View`
  width: 80px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
`;

const Icon = styled.Image<{ color?: string }>`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.color || Colors.orange1};
`;

const BannerText = styled.Text`
  font-size: 17px;
  color: ${Colors.gray1};
  font-family: ${Fonts.Medium};
  padding: 0 12px;
`;
const SearchBar = styled.View`
  height: 44px;
  width: 100%;
  background-color: #eee;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  padding: 0 32px 0 36px;
  margin: 0;
  border-radius: 12px;
  position: absolute;
  font-size: 15px;
  color: ${Colors.gray1};
`;
const IconSearch = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${Colors.gray5};
  margin-left: 8px;
`;

const IconClose = styled.Image`
  width: 16px;
  height: 16px;
  tint-color: ${Colors.gray3};
`;

const BtnClose = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 44px;
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
`;

interface Props {
    onTextChange?: (value: string) => void
}

export const HeaderSearch = memo(function HeaderSearch(props: Props) {
    const {onTextChange} = props;
    const textRef = useRef();
    const [value, setValue] = useState("");

    const onClear = useCallback(() => {
        setValue("")
    }, []);

    useEffect(() => {
        setTimeout(() => {
            textRef && textRef.current.focus()
        }, 300)
    }, []);

    useEffect(() => {
        if (value) {
            onTextChange && onTextChange(value)
        }
    }, [value, onTextChange]);

    return (
        <Container>
            <Left onPress={goBack}>
                <Icon source={IC_BACK} color={Colors.orange1}/>
            </Left>
            <Center>
                <SearchBar>
                    <IconSearch source={IC_HOME_SEARCH}/>
                    <TextInput
                        ref={textRef}
                        value={value}
                        autoFocus={true}
                        placeholder={'Tìm kiếm'}
                        onChangeText={setValue}/>
                    {
                        value ? <BtnClose onPress={onClear}>
                            <IconClose source={IC_CLOSE}/>
                        </BtnClose> : null
                    }
                </SearchBar>
            </Center>
        </Container>
    )
});
