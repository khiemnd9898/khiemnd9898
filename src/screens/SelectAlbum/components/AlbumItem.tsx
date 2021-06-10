import {Fonts} from '@/assets/fonts';
import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {IC_USER} from '@/assets';
import {StyleSheet} from 'react-native';
import {ListAlbum} from '@/screens/Write/index';

const Container = styled.TouchableOpacity`
    height: 70px;
    width: 100%;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;
const ImageAlbum = styled(FastImage)`
    width: 70px;
    height: 70px;
    border-radius: 3px;
    background-color: ${(p) => p.theme.gray5};
`;
const Content = styled.View`
    flex: 1;
    height: 100%;
    padding-left: 16px;
    justify-content: center;
`;
const AlbumName = styled.Text`
    color: ${(p) => p.theme.gray1};
    font-size: 18px;
    font-family: ${Fonts.SemiBold};
`;
const StyledText = styled.Text`
    color: ${(p) => p.theme.gray1};
    font-size: 13px;
`;
const RoleSection = styled.View`
    flex-direction: row;
`;
const Icon = styled.Image`
    width: 15px;
    height: 15px;
    tint-color: ${(p) => p.theme.gray1};
    margin-right: 5px;
`;

interface Props {
    id: string;
    onSelect: (id: string) => void;
}

export const AlbumItem = memo(function AlbumItem(props: Props) {
    const {id, onSelect} = props;
    const album = ListAlbum[id];
    const handleSelect = useCallback(() => {
        onSelect(id);
    }, []);

    return (
        <Container activeOpacity={0.5} onPress={handleSelect}>
            <ImageAlbum
                source={{
                    uri: 'https://th.bing.com/th/id/R859ee27e113224cb26bab1a5d69a1967?rik=Cwm5sJmsxxKNHg&pid=ImgRaw',
                }}
            />
            <Content style={styles.borderTop}>
                <AlbumName>{album}</AlbumName>
                <StyledText>26 bài viết</StyledText>
                <RoleSection>
                    <Icon source={IC_USER} />
                    <StyledText>Bạn bè</StyledText>
                </RoleSection>
            </Content>
        </Container>
    );
});

const styles = StyleSheet.create({
    borderTop: {
        borderTopColor: '#ccc',
        borderTopWidth: 0.5,
    },
});
