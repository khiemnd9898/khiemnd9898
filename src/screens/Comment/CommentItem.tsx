import React, {memo, useState} from 'react';
import styled from "styled-components/native";
import {Fonts} from "@/assets/fonts";
import FastImage from "react-native-fast-image";
import {TouchableOpacity, View} from "react-native";
import {BaseStyles} from "@/themes/BaseStyles";
import {CommentEmotion} from "@/screens/Comment/CommentEmotion";
import PhotoViewModal from "@/components/PhotoView/PhotoViewModal";
import useBoolean from "@/hooks/useBoolean";


const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;
`;

const BannerText = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
`;

const Description = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray3};
  padding-top: 2px;
  line-height: 17px;
`;

const Avatar = styled(FastImage)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${p => p.theme.gray5};
`;

const ImagePreview = styled(FastImage)`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  background-color: #DEDEDE;
  margin-top: 4px;
`;
const fakeData = [
    {
        name: 'Định Pu',
        content: 'Ai là những người yêu thích lập trình viên nhất Ai là những người yêu thích lập trình viên nhất ',
        avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg'
    },
    {
        name: 'Duy Khiêm',
        content: 'Like like like',
        avatar: 'https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-g%C3%A1i-d%E1%BB%85-th%C6%B0%C6%A1ng-l%C3%A0m-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-xinh-x%E1%BA%AFn.jpg'
    },
    {
        name: 'Đức Thuần',
        content: 'Ok men phết',
        avatar: 'https://1.bp.blogspot.com/-W-9CzXMSpXo/XxF9zR5uqQI/AAAAAAAAqUk/4JakrdrekC0BnNcmBjdiprK3efvCVsNKACLcBGAsYHQ/s1600/anh-dai-dien-gai-dep%2B%25283%2529.jpg'
    },
    {
        name: 'Quân Quân',
        content: 'Content with image image image',
        avatar: 'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/beautiful-girl_025102199.jpg',
        image: 'https://1.bp.blogspot.com/-W-9CzXMSpXo/XxF9zR5uqQI/AAAAAAAAqUk/4JakrdrekC0BnNcmBjdiprK3efvCVsNKACLcBGAsYHQ/s1600/anh-dai-dien-gai-dep%2B%25283%2529.jpg'
    },
];

interface Props {
    commentId: string
}


export const CommentItem = memo(function CommentItem(props: Props) {
    const {commentId} = props;
    const [data, ] = useState(fakeData[Math.floor(Math.random() * fakeData.length)]);
    const [visibleImage, showImage, hideImage] = useBoolean(false);
    return (
        <Container>
            <Avatar source={{uri: data.avatar}}/>
            <View style={[BaseStyles.flex1, BaseStyles.pl8]}>
                <BannerText numberOfLines={2}>
                    {data.name}
                </BannerText>
                <Description>
                    {data.content}
                </Description>
                {
                    data?.image
                        ? <TouchableOpacity onPress={showImage}>
                            <ImagePreview
                                resizeMode={"cover"}
                                source={{uri: data.image}}/>
                        </TouchableOpacity>
                        : null
                }
                <CommentEmotion/>
            </View>
            {
                data?.image
                    ? <PhotoViewModal
                        initialIndex={0}
                        images={[data.image]}
                        isVisible={visibleImage}
                        onCloseRequest={hideImage}
                    />
                    : null
            }
        </Container>
    )
});
