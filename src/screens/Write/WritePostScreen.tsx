import React, {memo} from 'react';
import styled from "styled-components/native";
import {HeaderWrite} from "@/screens/Write/HeaderWrite";
import {KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity} from "react-native";
import {InsertComment} from "@/screens/Comment/InsertComment";
import {Gray1Icon} from "@/components";
import {IC_CAMERA, IC_IMAGE, IC_VIDEO_CAMERA} from "@/assets";

const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
`;

const Input = styled.TextInput`
  flex: 1;
  background-color: ${p => p.theme.backgroundColor};
  text-align-vertical: top;
  padding: 12px 16px;
  margin: 0;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-bottom: 8px;
`;

export const WritePostScreen = memo(function WritePostScreen() {
    return (
        <Container>
            <HeaderWrite/>
            <Container>
                <Input
                    placeholderTextColor={''}
                    placeholder={'Bạn đang nghĩ gì ... '}
                />
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <Row>
                        <TouchableOpacity>
                            <Gray1Icon source={IC_IMAGE} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Gray1Icon source={IC_CAMERA} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Gray1Icon source={IC_VIDEO_CAMERA} style={styles.icon}/>
                        </TouchableOpacity>
                    </Row>
                </KeyboardAvoidingView>
            </Container>
        </Container>
    )
});

const styles = StyleSheet.create({
    icon: {
        marginRight: 16
    }
});
