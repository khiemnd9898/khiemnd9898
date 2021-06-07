import React, {memo, useCallback, useEffect, useMemo} from 'react';
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
import {syncPosts, usePost} from "@/store/post";
import {getPreviewData} from "@/utils/preview";
import {PreviewContent} from "@/components/PreviewContent";

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
  font-size: 14px;
  line-height: 19px;
  color:${p => p.theme.gray2}
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

const PreviewWrap = styled.View`
  width: 100%;
  background-color: ${p => p.theme.gray5};
`;

interface Props {
    id: string,
    hideHeader?: boolean,
    fullContent?: boolean
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


export const PostComponent = memo(function PostComponent(props: Props) {
    const {id, hideHeader, fullContent} = props;
    const post = usePost(id);
    const [isLiked, setLike, setUnLike] = useBoolean(false);
    const [isShowMenu, setShowMenu, setHideMenu] = useBoolean(false);


    const goToDetail = useCallback(() => {
    }, [id]);

    const onLikePress = useCallback(() => {
    }, [id]);

    const onSelectOption = useCallback((keyName: string, value: string) => {
        if (value === 'save') {
            // do something
        }
    }, []);

    const getPreview = useCallback(async () => {
        if (post && !post?.preview) {
            const preview = await getPreviewData(post?.content || "");
            syncPosts([{...post, preview: preview}])
        }
    }, [post]);

    useEffect(() => {
        if (post && !post?.preview) {
            getPreview().then()
        }
    }, [post]);

    const preview = useMemo(() => {
        if (!post) {
            return null
        }
        return post?.preview
    }, [post]);

    return (
        <Container>
            <ContentContainer>
                {!hideHeader && <Row style={BaseStyles.alignItemCenter}>
                    <Avatar source={{uri: post?.avatar || ""}}/>
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
                </Row>}
                <TouchableOpacity onPress={goToDetail}>
                    <Des numberOfLines={fullContent ? undefined : 3}>
                        {post?.content || ""}
                    </Des>
                </TouchableOpacity>
                {
                    post?.images?.length
                        ? <TouchableOpacity
                            onPress={goToDetail}
                            style={{
                                width: itemWidth,
                                height: itemWidth * 3 / 4,
                                marginTop: 12
                            }}>
                            <ImageFbGrid
                                style={{}}
                                images={post?.images || []}/>
                        </TouchableOpacity>
                        : preview
                        ? <PreviewContent
                            title={preview?.title || ""}
                            url={preview?.link ||""}
                            image={preview?.image?.url || ""}
                            description={preview?.description || ""}
                        />
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
