import React, { memo } from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FastImage from "react-native-fast-image";
import { IC_CLOSE31, IC_HOME_SEARCH, IC_MENU, IC_PLUS, IC_VIDEO_CAMERA, IMG_LOGO_APP, IMG_PHOTOS } from "@/assets";
import { TextInput, View, Image, FlatList, StyleSheet } from "react-native";
import { Colors } from "@/themes/Colors";
import { Fonts } from "@/assets/fonts";
import { BaseStyles } from "@/themes/BaseStyles";
import { MessComponent } from "@/components/MessComponent";

const DATA = [
  {
    id: "1",
    title: "Hi minh làm quen nhé !",
    Name: "Hồ Ngoc Hà",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPx-jbFQSD-f8AsPqG6u5CQqjyYXQ0olQB7Q&usqp=CAU"
  },
  {
    id: "2",
    title: "Hi minh làm quen nhé !",
    Name: "Sơn Tùng MTP",
    image: "https://yt3.ggpht.com/ytc/AAUvwniNNRXsKcsAunIOF31uQCGXMaxGrK5m3Kjj_T9cMg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: "3",
    title: "Hi minh làm quen nhé !",
    Name: "Hiền Hồ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQMdxnAjxC2w4Tfn3JtOhtANgl0NdgBhaSA&usqp=CAU"
  },
  {
    id: "4",
    title: "Hi minh làm quen nhé !",
    Name: "Ning Dương Lan Ngọc",
    image: "https://dep.com.vn/wp-content/uploads/2021/03/ELASTEN-1.jpg"
  },
  {
    id: "5",
    title: "Hi minh làm quen nhé !",
    Name: "Linh 14 tỏi",
    image: "https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/5/22/photo1621685160841-16216851612101161903727.jpg"
  },
  {
    id: "6",
    title: "Hi minh làm quen nhé !",
    Name: "Noo Phước Thịnh",
    image: "https://vtv1.mediacdn.vn/thumb_w/650/2019/7/18/12654602101538696692846753128890951271157684n-1563420062461130424819-crop-15634200735851613593101.jpg"
  }
];

const Container = styled.View`
  flex:1;
  background: ${p => p.theme.backgroundColor};
`;
const Row = styled.View`
  padding: 0px 0px;
`;
const Column = styled.View`
  width: 60px;
`;
const Column2 = styled.View`
  flex: 1;
  padding-left: 10;
  flex-direction: column;
  justify-content: center;
`;
const Comlumn3 = styled.View`
  width: 60px;
  align-items: flex-end;
  justify-content: flex-end;

`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: ${60 / 2}px;
`;
const TextMind = styled.Text`
  padding: 12px 16px 12px 16px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-family: ${Fonts.Medium};
  color: ${Colors.gray6};
  font-weight: bold;
`;
const ButtonIcon = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 16px 5px 16px;
`;
const Name = styled.Text`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${Colors.gray6};
  font-family: ${Fonts.Medium};
  font-weight: 500;
`;
const Title = styled.Text`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.gray4};
  font-family: ${Fonts.Medium};
`;
const Time = styled.Text`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.gray4};
  font-family: ${Fonts.Medium};
`;
const Item = ({ item, index }: any) => {
  return (

    <ButtonIcon>
      <Column>
        <Avatar source={{ uri: item.image }} />
      </Column>
      <Column2>
        <Name numberOfLines={1}>{item.Name}</Name>
        <Title numberOfLines={1}>{item.title}</Title>
      </Column2>
      <Comlumn3>
        <Time>7:19 am </Time>
      </Comlumn3>
    </ButtonIcon>
  );
};
export const MessComponent1 = memo(function MessComponent1() {
  const renderItem = ({ item }: any) => {
    return (
      <Item
        item={item}
      />
    );
  };
  return (
    <Container>
      <View style={BaseStyles.flex1}>
        <FlatList data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  ListHeaderComponent={<MessComponent />}
        />
      </View>
    </Container>
  );
});
