import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import {HeaderBack} from '@/components/HeaderBack';
import {AlbumItem} from '@/screens/SelectAlbum/components/AlbumItem';
import {FlatList} from 'react-native';
import {Fonts} from '@/assets/fonts';
import {IC_PLUS} from '@/assets';
import {Colors} from '@/assets/themes';
import {useNavigationParams} from '@/hooks/useNavigationParams';
import {ListAlbum} from '@/screens/Write/index';
import {navigateCreateAlbumScreen} from '@/utils/navigation';

const Container = styled.View`
    flex: 1;
    background-color: ${(p) => p.theme.backgroundColor};
`;
const HeaderSelectAlbum = styled.TouchableOpacity`
    height: 70px;
    width: 100%;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
`;
const Left = styled.View`
    width: 70px;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const IconAdd = styled.Image`
    width: 35px;
    height: 35px;
    tint-color: ${Colors.blue};
`;

const Right = styled.View`
    flex: 1;
`;
const TextHeaderSelectAlbum = styled.Text`
    margin-left: 10px;
    color: ${Colors.blue};
    font-size: 21px;
    font-family: ${Fonts.Regular};
`;

export interface SelectAlbumProps {
    onSelect: (id: string) => void;
}

const keyExtractor = (item: any) => item.toString();
export const SelectAlbumScreen = memo(function SelectAlbumScreen() {
    const {onSelect} = useNavigationParams<SelectAlbumProps>();

    const renderItem = useCallback(
        ({item}: any) => <AlbumItem id={item.toString()} onSelect={onSelect} />,
        [onSelect],
    );

    return (
        <Container>
            <HeaderBack title={'Chọn album'} />
            <FlatList
                data={Object.keys(ListAlbum)}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ListHeaderComponent={
                    <HeaderSelectAlbum onPress={navigateCreateAlbumScreen}>
                        <Left>
                            <IconAdd source={IC_PLUS} />
                        </Left>
                        <Right>
                            <TextHeaderSelectAlbum>
                                Tạo album mới
                            </TextHeaderSelectAlbum>
                        </Right>
                    </HeaderSelectAlbum>
                }
            />
        </Container>
    );
});
