import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Fonts} from '@/assets/fonts';
import {IC_CLOCK, IC_CLOSE, IC_DROPDOWN, IC_GLOBAL, IC_USER} from '@/assets';
import useBoolean from '@/hooks/useBoolean';
import {BottomMenuSelector} from '@/components/BottomMenu';
import {RoleNameEnum, AlbumNameEnum} from '@/screens/Write/index';

const Container = styled.View`
    justify-content: center;
    height: 64px;
    padding: 0 16px;
`;
const SubHeader = styled.View`
    flex-direction: row;
`;
const Left = styled.TouchableOpacity`
    justify-content: center;
`;
const Avatar = styled(FastImage)`
    width: 40px;
    height: 40px;
    border-radius: ${40 / 2}px;
    background-color: ${(p) => p.theme.gray5};
`;
const Right = styled.View`
    margin-left: 13px;
    flex-direction: column;
    align-items: flex-start;
`;
const StyledText = styled.Text`
    color: ${(p) => p.theme.gray1};
    font-family: ${Fonts.Medium};
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 3px;
`;
const ActionSection = styled.View`
    flex-direction: row;
`;
const ActionBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 0.6px solid gray;
    border-radius: 2px;
    font-size: 11px;
`;
const ActionBtnRight = styled(ActionBtn)`
    margin-left: 7px;
`;
const ActionBtnText = styled.Text`
    color: ${(p) => p.theme.gray3};
    padding: 0 5px;
`;
const IconDropdown = styled.Image`
    width: 24px;
    height: 24px;
    tint-color: ${(p) => p.theme.gray3};
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
const options2 = [
    {
        label: 'General',
        value: AlbumNameEnum.general,
        icon: IC_GLOBAL,
    },
    {
        label: 'Album 1',
        value: AlbumNameEnum.album1,
        icon: IC_GLOBAL,
    },
    {
        label: 'Album 2',
        value: AlbumNameEnum.album2,
        icon: IC_GLOBAL,
    },
    {
        label: 'Album 3',
        value: AlbumNameEnum.album3,
        icon: IC_GLOBAL,
    },
];

const AlbumName: {[id: string]: string} = {
    general: 'General',
    album1: 'Album1',
    album2: 'Album2',
    album3: 'Album3',
};
const RoleName: {[id: string]: string} = {
    public: 'Công khai',
    private: 'Chỉ mình tôi',
    friendly: 'Bạn bè',
};

const SubHeaderWrite = () => {
    const [roleVisible, showRoleMenu, hideRoleMenu] = useBoolean(false);
    const [albumVisible, showAlbumMenu, hideAlbumMenu] = useBoolean(false);
    const [role, setRole] = useState<string>(RoleNameEnum.public);
    const [album, setAlbum] = useState<string>(AlbumNameEnum.general);

    const onSelectRoleOption = useCallback((keyName: string, value: string) => {
        setRole(value);
    }, []);
    const onSelectAlbumOption = useCallback((keyName: string, value: string) => {
        setAlbum(value);
    }, []);

    return (
        <>
            <Container>
                <SubHeader>
                    <Left onPress={() => {}}>
                        <Avatar
                            source={{
                                uri: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
                            }}
                        />
                    </Left>

                    <Right>
                        <StyledText>Ninh Dương Lan Ngọc</StyledText>

                        <ActionSection>
                            <ActionBtn onPress={showAlbumMenu}>
                                <ActionBtnText>
                                    {AlbumName[album]}
                                </ActionBtnText>
                                <IconDropdown
                                    resizeMode={'contain'}
                                    source={IC_DROPDOWN}
                                />
                            </ActionBtn>

                            <ActionBtnRight onPress={showRoleMenu}>
                                <ActionBtnText>{RoleName[role]}</ActionBtnText>
                                <IconDropdown
                                    resizeMode={'contain'}
                                    source={IC_DROPDOWN}
                                />
                            </ActionBtnRight>
                        </ActionSection>
                    </Right>
                </SubHeader>
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
            <BottomMenuSelector
                visible={albumVisible}
                onHide={hideAlbumMenu}
                options={options2}
                onSelectOption={onSelectAlbumOption}
                inputName={'keyname'}
                selectedValue={role}
                label={''}
            />
        </>
    );
};

export default SubHeaderWrite;
