import React, {memo} from 'react';
import styled from "styled-components/native";
import {HeaderModal} from "@/components/HeaderModal";
import {useNavigationParams} from "@/hooks/useNavigationParams";
import {FlatList, KeyboardAvoidingView, Platform, TextInput, View} from "react-native";
import {HeaderBack} from "@/components/HeaderBack";
import {PostComponent} from "@/components/PostComponent";
import {HeaderComment} from "@/components/HeaderComment";
import {CommentItem} from "@/screens/Comment/CommentItem";
import {InsertComment} from "@/screens/Comment/InsertComment";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const SWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const WrapHeader = styled.View`
  margin-bottom: 12px;
`;

const WrapItem = styled.View`
  width: 100%;
  padding: 0 16px
`;

export interface CommentScreenProps {
    id: string
}

const renderItem = ({item, index}: any) => <WrapItem><CommentItem commentId={item.toString()}/></WrapItem>;

const keyExtractor = (item: any) => item.toString();

export const CommentScreen = memo(function CommentScreen() {
    const {id} = useNavigationParams();

    return (
        <Container>
            <HeaderComment
                avatar={"https://i.pinimg.com/736x/a7/25/da/a725dac01ff8cefe0143d5e2091c9131.jpg"}
                description={"12/02/2020 19:59"}
                title={"Nhóm những người yêu thích lập trình viên mobile"}/>
            <Container>
                <SWrapper>
                    <FlatList
                        ListHeaderComponent={
                            <WrapHeader>
                                <PostComponent
                                    hideHeader={true}
                                    fullContent={true}
                                    id={'1'}/>
                            </WrapHeader>
                        }
                        data={Array.from(new Array(20).keys())}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        keyboardShouldPersistTaps={"always"}
                    />
                </SWrapper>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <InsertComment/>
                </KeyboardAvoidingView>
            </Container>
        </Container>
    )
});
