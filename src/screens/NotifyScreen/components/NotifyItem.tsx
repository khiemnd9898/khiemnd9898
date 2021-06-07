import React, {memo, useState} from 'react';
import styled from 'styled-components/native';
import FastImage from "react-native-fast-image";

const Container = styled.TouchableOpacity<{color?: any}>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor)};
  padding: 7px 16px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ViewLeft = styled.View`
  flex: 1;
`;
const Avatar = styled(FastImage)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;
const ViewRight = styled.View`
  flex: 6;
  padding-left: 18px;
`;
const StyledText = styled.Text`
  color: ${(p) => p.theme.gray1};
  line-height: 20px;
`;
const TimeText = styled.Text`
  color: ${(p) => p.theme.gray4};
  line-height: 20px;
`;

interface Props {
  id: string
}

export const NotifyItem = memo(function NotifyItem(props: Props) {
  const {id} = props;

  const [isSeen, setIsSeen] = useState(true);

  return (
    <Container>
      <Row>
        <ViewLeft>
          <Avatar
            source={{
              uri: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
            }}
          />
        </ViewLeft>

        <ViewRight>
          <StyledText>
            Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.
          </StyledText>
          <TimeText>10m</TimeText>
        </ViewRight>
      </Row>
    </Container>
  );
});
