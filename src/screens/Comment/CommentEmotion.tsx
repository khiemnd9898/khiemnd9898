import React, {memo} from 'react';
import styled from "styled-components/native";
import {Fonts} from "@/assets/fonts";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

const Time = styled.Text`
  font-size: 12px;
  color: ${p => p.theme.gray4}
`;

const Like = styled.Text`
  font-size: 13px;
  color: ${p => p.theme.gray3};
  font-family: ${Fonts.Medium};
  padding-left: 12px;
`;

export const CommentEmotion = memo(function CommentEmotion() {
    return (
        <Container>
            <Time>
                10 giờ
            </Time>
            <TouchableOpacity>
                <Like>
                    Thích
                </Like>
            </TouchableOpacity>
            <TouchableOpacity>
                <Like>
                    Trả lời
                </Like>
            </TouchableOpacity>
        </Container>
    )
});
