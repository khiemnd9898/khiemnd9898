import React, {memo} from "react";
import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import { useNavigationParams } from "@/hooks/useNavigationParams";
const Container = styled.View`
  width: 100%;
  
  background-color: ${p => p.theme.backgroundColor};

`;
const ImageView=styled.View`
  padding: 12px 16px 12px 16px;
`;
const ImageView1 = styled.View`
  height: 200px;
  border-radius:10px;
  background-color: red;
`;
const ImageView2=styled.View`
  position: absolute;
  width:100px;
  height:100px;
  border-radius:50px;
  background-color: aqua;
`;
export const ProfileImage=memo(function ProfileImage() {
  return(
    <Container>
      <ImageView>
        <ImageView1></ImageView1>
        <ImageView2></ImageView2>
      </ImageView>


    </Container>
  )

})