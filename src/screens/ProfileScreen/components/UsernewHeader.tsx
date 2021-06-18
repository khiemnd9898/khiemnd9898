import React, { memo, useCallback } from "react";
import styled from "styled-components/native";
import { IC_CONTROL, IC_MENU, IC_SETTINGS, IC_VIDEO_CAMERA, IMG_PHOTOS } from "@/assets";
import { Fonts } from "@/assets/fonts";
import { openWritePostScreen } from "@/utils/navigation";
import ImagePicker from "react-native-image-crop-picker";


const Container = styled.View`
  width: 100%;
  background-color: ${p => p.theme.backgroundColor};
  border-bottom-width: 12px;
  border-bottom-color: ${p => p.theme.divider};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  height: 44px;
  padding: 0 16px;
`;

const Row2 = styled(Row)`
  height: 56px;
`;

const TextHeader = styled.Text`
  font-family: ${Fonts.Bold};
  padding-right: 10px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.gray1};
`;
const TextView = styled.View`
  flex: 1;
  justify-content: center;
`;
const IconView = styled.View`
  width: 90px;
  flex-direction: row;
  justify-content: space-between;
`;
const SettingView = styled.TouchableOpacity`
  width: 40px;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.gray5};
`;
const IconSearch = styled.Image`
  width: 16px;
  height: 16px;
  tint-color: ${p => p.theme.gray1}
`;

const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: ${36 / 2}px;
  background-color: #fff;
`;

const ViewFull = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
`;

const TextMind = styled.Text`
  padding-left: 12px;
  padding-right: 10px;
  font-size: 13px;
  line-height: 20px;
  font-family: ${Fonts.Medium};
  letter-spacing: -0.24px;
  color: #A8A8A8;
`;

const IconAction = styled.Image`
  width: 20px;
  height: 20px;
`;

const IconMenu = styled(IconAction)`
  tint-color: ${p => p.theme.gray1}
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ButtonText = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray1};
  font-family: ${Fonts.Medium};
  padding-left: 10px;
`;

const Footer = styled(Row)`
  border-top-width: 0.7px;
  border-top-color: ${p => p.theme.gray5};
`;

const DividerVertical = styled.View`
  width: 1px;
  height: 32px;
  background-color: ${p => p.theme.gray5};
`;
export const UsernewHeader = memo(function UsernewHeader() {
  const openWritePost = useCallback(() => {
    openWritePostScreen({images: [], videos: []})
  }, []);

  const onImagePicker = useCallback(() => {
    ImagePicker.openPicker({
      mediaType: "photo",
      multiple: true,
      compressImageQuality: 0.6
    }).then((values) => {
      const urls = values.map(item => item.path);
      openWritePostScreen({images: urls, videos: []})
    })
  }, []);

  const onVideoPicker = useCallback(() => {
    ImagePicker.openPicker({
      mediaType: "video",
      multiple: true,
      compressImageQuality: 0.6
    }).then((values) => {
      const urls = values.map(item => item.path);
      openWritePostScreen({images: [], videos: urls})
    })
  }, []);
  return (
    <Container>
      <Row>
        <TextView>
          <TextHeader>Bài Viết</TextHeader>
        </TextView>
        <IconView>
          <SettingView><IconSearch source={IC_CONTROL} /></SettingView>
          <SettingView><IconSearch source={IC_SETTINGS} /></SettingView>
        </IconView>
      </Row>
      <Row2>
        <Avatar
          source={{ uri: "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg" }} />
        <ViewFull onPress={openWritePost}>
          <TextMind numberOfLines={1}>
            What is on your mind? #Hashtag.. @Mention.. Link..
          </TextMind>
        </ViewFull>
      </Row2>
      <Footer>
        <Button onPress={onImagePicker}>
          <IconAction source={IMG_PHOTOS} />
          <ButtonText>
            Photo
          </ButtonText>
        </Button>
        <DividerVertical />
        <Button onPress={onVideoPicker}>
          <IconAction source={IC_VIDEO_CAMERA} />
          <ButtonText>
            Video
          </ButtonText>
        </Button>
        <DividerVertical />
        <Button>
          <IconMenu source={IC_MENU} />
          <ButtonText>
            More
          </ButtonText>
        </Button>
      </Footer>
    </Container>
  );
});
