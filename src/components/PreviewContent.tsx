import React, {memo, useCallback} from 'react';
import {Linking} from "react-native";
import styled from "styled-components/native";
import {Fonts} from "@/assets/fonts";
import FastImage from "react-native-fast-image";

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${p => p.theme.gray5};
`;

const ImagePreview = styled(FastImage)`
  width: 100%;
  height: 250px;
`;

const Title = styled.Text`
  font-size: 15px;
  color: ${p => p.theme.gray3};
  font-family: ${Fonts.Medium};
  line-height: 20px;
`;

const Domain = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray3}
`;

interface Props {
    image: string,
    url: string,
    title: string,
    description: string
}

export const PreviewContent = memo(function PreviewContent(props: Props) {
    const {image, url, title, description} = props;

    const openWeb = useCallback(() => {
        Linking.openURL(url)
    }, [url]);

    return (
        <Container onPress={openWeb}>
            <ImagePreview source={{uri: image}}/>
            <Title>
                {title}
            </Title>
            <Domain>
                {description}
            </Domain>
        </Container>
    )
});
