import React, {memo} from 'react';
import styled from "styled-components/native";
import {useNavigationParams} from "@/hooks/useNavigationParams";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import {HeaderComment} from "@/components/HeaderComment";
import { InsertChat } from "@/screens/MessScreens/components/InsertChat";
import { ChatEmotion } from "@/screens/MessScreens/components/ChatEmotion";


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

export interface ChatScreenProps {
  id: string
}
export const ChatScreen = memo(function ChatScreen() {
  const {id} = useNavigationParams();

  return (
    <Container>
      <View style={{height:44}}>
        <ChatEmotion />
      </View>
      <View style={{flex:1}}>

      </View>


      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <InsertChat/>
        </KeyboardAvoidingView>
      </View>
    </Container>
  )
});
