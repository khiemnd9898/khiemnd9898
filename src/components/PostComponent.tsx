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
import {EmotionComponent} from "@/components/EmotionComponent";
import useBoolean from "@/hooks/useBoolean";
import {IC_DEPARTMENT, IC_HANDED, IC_MENU, IC_TAB_ACCOUNT, IC_TAB_HOME, IC_TAB_MESSAGE} from "@/assets";
import {BottomMenuSelector} from "@/components/BottomMenu";

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

const BtnMoreMenu = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const IconMoreMenu = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${p => p.theme.gray1}
`;

interface Props {
    id: string
}

const menuOptions = [
    {
        icon: IC_TAB_HOME,
        label: 'Lưu bài viết',
        value: 'save'
    },
    {
        icon: IC_TAB_ACCOUNT,
        label: 'Báo cáo bài viết',
        value: 'report'
    },
    {
        icon: IC_TAB_MESSAGE,
        label: 'Ẩn bài viết',
        value: 'hide'
    },
];

const images = [
    "data:image/jpeg;base64,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",
    "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
    "https://photographer.com.vn/wp-content/uploads/2020/08/1598380289_Hinh-nen-Girl-Xinh-tit-mu-tap-cho-desktop-laptop.jpg",
    "https://wikihow.com.vn/wp-content/uploads/2020/07/anh-gai-xinh-trung-hoc-co-so.jpg",
    "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg",
    "https://lh3.googleusercontent.com/proxy/4iagsx5h4rOWEoA__8tOdsAUhxadZ94dvAee2ALJm03BhKSArXN1XghDvBSJjei614hA6htaTrCv1es6eNyqPl7Q5_fk1BDXtzYu839jBuPhu0j-j2HYGojqIfLNm4WRQrVsqQ"
];
export const PostComponent = memo(function PostComponent(props: Props) {
    const {id} = props;
    const [isLiked, setLike, setUnLike] = useBoolean(false);
    const [isShowMenu, setShowMenu, setHideMenu] = useBoolean(false);

    const post = {};

    const goToDetail = useCallback(() => {
    }, [id]);

    const onLikePress = useCallback(() => {
    }, [id]);

    const onSelectOption = useCallback((keyName: string, value: string) => {
        if (value === 'save') {
            // do something
        }
    }, []);
    return (
        <Container>
            <ContentContainer>
                <Row style={BaseStyles.alignItemCenter}>
                    <Avatar source={{uri: "https://meta.vn/Data/image/2020/10/09/dat-ten-tieng-anh-cho-be-gai-1.jpg"}}/>
                    <View style={[BaseStyles.ph9, BaseStyles.flex1]}>
                        <Name numberOfLines={1}>
                            Định Pu
                        </Name>
                        <Time>
                            20-10-2020
                        </Time>
                    </View>
                    <BtnMoreMenu onPress={setShowMenu}>
                        <IconMoreMenu source={IC_MENU}/>
                    </BtnMoreMenu>
                </Row>
                <TouchableOpacity onPress={goToDetail}>
                    <Des numberOfLines={3}>
                        Bộ Y tế cho biết đến trưa nay nước ta có 50 ca Covid-19 mới, nhiều nhất vẫn là Bắc Giang với 32
                        ca bệnh. Ngoài ra, Bắc Ninh cũng có 2 trường hợp được phát hiện qua sàng lọc sốt ho ở cộng đồng.
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
            </ContentContainer>
            <EmotionComponent
                isLiked={isLiked}
                onLikePress={isLiked ? setUnLike : setLike}
            />
            <Divider height={12}/>

            <BottomMenuSelector
                visible={isShowMenu}
                onHide={setHideMenu}
                options={menuOptions}
                onSelectOption={onSelectOption}
                inputName={"keyname"}
                label={"Menu"}
            />
        </Container>
    )
});
