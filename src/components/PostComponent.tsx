import React, {memo, useCallback, useMemo} from 'react';
import styled from "styled-components/native";
import {Dimensions, TouchableOpacity, View} from "react-native";
import {BaseStyles} from "@/themes/BaseStyles";
import {Colors} from "@/themes/Colors";
import {Divider, Row} from "@/components";
import {Fonts} from "@/assets/fonts";
import {ImageFbGrid} from "@/components/ImageFbGrid";
import {ButtonReply} from "@/components/ButtonReply";
import FastImage from "react-native-fast-image";

const {width} = Dimensions.get("window");
const itemWidth = width - 32;

const Container = styled.View`
  background: ${p => p.theme.backgroundColor};
  padding: 0
`;
const ContentContainer = styled.View`
    padding: 12px 16px
`;

const Name = styled.Text`
  color: ${p => p.theme.gray3};
  font-size: 16px;
  font-family: ${Fonts.Medium};
`;
const Time = styled.Text`
  color: ${Colors.gray4};
  font-size: 11px;
`;

const Avatar = styled(FastImage)`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${p => p.theme.gray5};
`;

const Des = styled.Text`
  padding-top: 8px;
  font-size: 15px;
  line-height: 19px;
  color:${Colors.brown1}
`;

interface Props {
    id: string
}

const images = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];
export const PostComponent = memo(function PostComponent(props: Props) {
    const {id} = props;
    const post = {};

    const goToDetail = useCallback(() => {
    }, [id]);

    const onLikePress = useCallback(() => {
    }, [id]);

    return (
        <Container>
            <ContentContainer>
                <Row style={BaseStyles.alignItemCenter}>
                    <Avatar source={{uri: "https://meta.vn/Data/image/2020/10/09/dat-ten-tieng-anh-cho-be-gai-1.jpg"}}/>
                    <View style={BaseStyles.ph9}>
                        <Name numberOfLines={1}>
                            Định Pu
                        </Name>
                        <Time>
                            20-10-2020
                        </Time>
                    </View>
                </Row>
                <TouchableOpacity onPress={goToDetail}>
                    <Des numberOfLines={3}>
                        Bộ Y tế cho biết đến trưa nay nước ta có 50 ca Covid-19 mới, nhiều nhất vẫn là Bắc Giang với 32 ca bệnh. Ngoài ra, Bắc Ninh cũng có 2 trường hợp được phát hiện qua sàng lọc sốt ho ở cộng đồng.
                    </Des>
                </TouchableOpacity>
                {
                    images && images.length
                        ? <TouchableOpacity
                            onPress={goToDetail}
                            style={{
                                width: itemWidth,
                                height: itemWidth * 3 / 4,
                                marginTop: 12
                            }}>
                            <ImageFbGrid
                                style={{}}
                                images={images}/>
                        </TouchableOpacity>
                        : null
                }

                <ButtonReply objectId={id}/>
            </ContentContainer>

            <Divider height={8}/>
        </Container>
    )
});
