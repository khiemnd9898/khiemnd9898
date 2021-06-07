import React, {memo, useState} from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{color?: any}>`
  background: ${(p) => (p.color ? p.color : p.theme.backgroundColor1)};
  padding: 7px 16px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ViewLeft = styled.View`
  flex: 1;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  tint-color: ${(p) => p.theme.gray1};

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

export const NotifyItem = memo(function NotifyItem() {
  const [isSeen, setIsSeen] = useState(true);

  return (
    <Container color={isSeen ? false : 'rgba(66, 149, 246, 0.2)'}>
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
