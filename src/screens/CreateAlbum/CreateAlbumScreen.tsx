import {IC_CLOCK, IC_GLOBAL, IC_USER} from '@/assets';
import {Fonts} from '@/assets/fonts';
import {Colors} from '@/assets/themes';
import {BottomMenuSelector} from '@/components/BottomMenu';
import {HeaderBack} from '@/components/HeaderBack';
import useBoolean from '@/hooks/useBoolean';
import {RoleNameEnum} from '@/screens/Write';
import {
    navigateSelectAlbumScreen,
} from '@/utils/navigation';
import React, {memo, useCallback, useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: ${(p) => p.theme.backgroundColor};
`;
const InputSection = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${(p) => p.theme.gray5};
`;
const StyledTextInput = styled(TextInput).attrs((props) => ({
    placeholderTextColor: props.theme.gray3,
}))`
    margin: 0;
    padding: 5px 16px;
`;
const RoleSection = styled.TouchableOpacity`
    padding: 5px 16px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${(p) => p.theme.gray5};
`;
const RoleSectionText = styled.Text`
    font-size: 18px;
    font-family: ${Fonts.Regular};
    margin-left: 5px;
    color: ${(p) => p.theme.gray1};
`;
const RoleSectionImg = styled.Image`
    width: 26px;
    height: 26px;
    tint-color: ${(p) => p.theme.gray1};
`;
const RightSectionBtn = styled.TouchableOpacity``;
const RightSectionBtnText = styled.Text`
    font-family: ${Fonts.SemiBold};
    color: ${Colors.blue};
    font-size: 16px;
`;

const options = [
    {
        label: 'Công khai',
        value: RoleNameEnum.public,
        icon: IC_GLOBAL,
    },
    {
        label: 'Chỉ mình tôi',
        value: RoleNameEnum.private,
        icon: IC_CLOCK,
    },
    {
        label: 'Bạn bè',
        value: RoleNameEnum.friendly,
        icon: IC_USER,
    },
];
const RoleName: {[id: string]: {label: string; icon: any}} = {
    public: {label: 'Công khai', icon: IC_GLOBAL},
    private: {label: 'Chỉ mình tôi', icon: IC_CLOCK},
    friendly: {label: 'Bạn bè', icon: IC_USER},
};

export const CreateAlbumScreen = memo(function CreateAlbumScreen() {
    const [roleVisible, showRoleMenu, hideRoleMenu] = useBoolean(false);
    const [role, setRole] = useState<string>(RoleNameEnum.public);
    const [text, setText] = useState<string>('');

    const onSelectRoleOption = useCallback((keyName: string, value: string) => {
        setRole(value);
    }, []);
    const handleTextInput = useCallback((value) => {
        setText(value);
    }, []);

    return (
        <>
            <Container>
                <HeaderBack
                    title={'Tạo album'}
                    right={
                        <RightSectionBtn onPress={navigateSelectAlbumScreen}>
                            <RightSectionBtnText>Tạo</RightSectionBtnText>
                        </RightSectionBtn>
                    }
                />

                <InputSection>
                    <StyledTextInput
                        placeholder={'Tên album'}
                        onChangeText={handleTextInput}
                        onBlur={Keyboard.dismiss}
                        value={text}
                    />
                </InputSection>

                <RoleSection activeOpacity={0.5} onPress={showRoleMenu}>
                    <RoleSectionImg source={RoleName[role].icon} />
                    <RoleSectionText>{RoleName[role].label}</RoleSectionText>
                </RoleSection>
            </Container>
            <BottomMenuSelector
                visible={roleVisible}
                onHide={hideRoleMenu}
                options={options}
                onSelectOption={onSelectRoleOption}
                inputName={'keyname'}
                selectedValue={role}
                label={''}
            />
        </>
    );
});
