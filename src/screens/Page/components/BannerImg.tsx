import React, {memo} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

const ImgBanner = styled(FastImage)`
    height: 150px;
    width: 100%;
`;

interface Props {
    uri: string;
}

export const BannerImg = memo(function BannerImg(props: Props) {
    const {uri} = props;
    return <ImgBanner source={{uri: uri}} resizeMode="cover" />;
});
