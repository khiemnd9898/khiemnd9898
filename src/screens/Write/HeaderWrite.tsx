import React, {memo, useCallback, useState} from 'react';
import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {Fonts} from "@/assets/fonts";
import {Gray1Icon} from "@/components";
import {IC_CLOCK, IC_CLOSE, IC_DROPDOWN, IC_GLOBAL, IC_USER} from "@/assets";
import {BottomMenuSelector} from "@/components/BottomMenu";
import useBoolean from "@/hooks/useBoolean";
import {RoleNameEnum} from "@/screens/Write/index";
import {goBack} from "@/utils/navigation";

const Header = styled.View`
  height: ${56 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 0.7px;
  border-bottom-color: ${p => p.theme.gray5};
`;

const Left = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Center = styled.View`
  flex: 1
`;

const Right = styled.View`
  width: 60px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const PostNow = styled.Text`
  font-size: 15px;
  color: #0077cc;
  font-family: ${Fonts.Medium};
`;

const BtnRole = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const TextRole = styled.Text`
  font-size: 15px;
  color: ${p => p.theme.gray1};
`;
const TextSub = styled.Text`
  font-size: 12px;
  color: ${p => p.theme.gray4};
`;

const IconDropdown = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1}
`;


const options = [
    {
        label: 'Công khai',
        value: RoleNameEnum.public,
        icon: IC_GLOBAL
    },
    {
        label: 'Chỉ mình tôi',
        value: RoleNameEnum.private,
        icon: IC_CLOCK
    },
    {
        label: 'Bạn bè',
        value: RoleNameEnum.friendly,
        icon: IC_USER
    },
];

const RoleName: { [id: string]: string } = {
    public: 'Công khai',
    private: 'Chỉ mình tôi',
    friendly: 'Bạn bè'
};
const RoleSub: { [id: string]: string } = {
    public: 'Mọi người có thể xem',
    private: 'Chỉ mình tôi được xem',
    friendly: 'Chỉ bạn bè được xem'
};

export const HeaderWrite = memo(function HeaderWrite() {
    const [visible, showMenu, hideMenu] = useBoolean(false);
    const [role, setRole] = useState<string>(RoleNameEnum.public);

    const onSelectOption = useCallback((keyName: string, value: string) => {
        setRole(value)
    }, []);

    return (
        <>
            <Header>
                <Left onPress={goBack}>
                    <Gray1Icon source={IC_CLOSE}/>
                </Left>
                <Center>
                    <BtnRole onPress={showMenu}>
                        <TextRole>
                            {RoleName[role]}
                        </TextRole>
                        <IconDropdown resizeMode={"contain"} source={IC_DROPDOWN}/>
                    </BtnRole>
                    <TextSub>
                        {RoleSub[role]}
                    </TextSub>
                </Center>
                <Right>
                    <PostNow>Đăng</PostNow>
                </Right>
            </Header>
            <BottomMenuSelector
                visible={visible}
                onHide={hideMenu}
                options={options}
                onSelectOption={onSelectOption}
                inputName={"keyname"}
                selectedValue={role}
                label={""}
            />
        </>
    )
});
