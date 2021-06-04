import React, {memo} from 'react';
import styled from "styled-components/native";
import {IC_COMMENT, IC_LIKE, IC_LOVE, IC_SHARE} from "@/assets";
import {Fonts} from "@/assets/fonts";
import {Colors} from "@/themes/Colors";

const Container = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  border-top-width: 0.7px;
  border-top-color: ${p => p.theme.divider};
`;

const IconAction = styled.Image<{liked?: boolean}>`
  width: 20px;
  height: 20px;
  tint-color: ${p => p.liked ? Colors.red0 : p.theme.gray1}
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ButtonText = styled.Text<{isLiked?: boolean}>`
  font-size: 13px;
  color: ${p => p.isLiked ? Colors.red0 : p.theme.gray1};
  font-family: ${Fonts.Medium};
  padding-left: 6px;
`;

interface Props {
    isLiked?: boolean,
    onLikePress?: () => void
}

export const EmotionComponent = memo(function EmotionComponent(props: Props) {
    const {isLiked, onLikePress} = props;

    return (
        <Container>
            <Button onPress={onLikePress}>
                <IconAction liked={isLiked} source={IC_LIKE}/>
                <ButtonText isLiked={isLiked}>
                    Thích
                </ButtonText>
            </Button>
            <Button>
                <IconAction source={IC_COMMENT}/>
                <ButtonText>
                    Bình luận
                </ButtonText>
            </Button>
            <Button>
                <IconAction source={IC_SHARE}/>
                <ButtonText>
                    Chia sẻ
                </ButtonText>
            </Button>
        </Container>
    )
});
