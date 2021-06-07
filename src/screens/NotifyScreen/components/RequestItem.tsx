import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Colors} from '@/themes/Colors';
import {IC_MORE} from '@/assets';

const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 16px;
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
  color: ${(p) => p.theme.gray3};
  line-height: 20px;
`;

const RowInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const InfoSection = styled.View`
  flex: 6;
`;
const BtnMoreInfo = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;
  border-radius: 50px;
`;
const IconMore = styled.Image`
  width: 30px;
  height: 30px;
  tint-color: ${(p) => p.theme.gray1};
`;

const RowBtn = styled.View`
  margin: 5px 0 0 0;
  flex-direction: row;
  align-items: center;
`;
const StyledBtn = styled.TouchableOpacity<{suggestion?: boolean}>`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(p) =>
    p.suggestion ? 'rgba(66, 150, 246, 0.301)' : Colors.blue1};
  border-radius: 4px;
  margin-right: 5px;

  padding: 10px 0;
`;
const DeleteBtn = styled(StyledBtn)`
  background-color: ${(p) => p.theme.gray5};
`;
const TextBtn = styled.Text<{suggestion?: boolean}>`
  font-size: 14px;
  color: ${(p) => (p.suggestion ? '#449bff' : p.theme.gray1)};
`;

export const RequestItem = memo(function RequestItem(props: {
  suggestion?: boolean;
}) {
  return (
    <Row>
      <ViewLeft>
        <Avatar
          source={{
            uri: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
          }}
        />
      </ViewLeft>

      <ViewRight>
        <RowInfo>
          <InfoSection>
            <StyledText>Lương Thuỳ Linh sent you a friend request.</StyledText>
            <TimeText>10m</TimeText>
          </InfoSection>

          {!props.suggestion ? (
            <BtnMoreInfo
              onPress={() => {}}
              activeOpacity={0.6}
              underlayColor="#5f5f5f">
              <IconMore source={IC_MORE} />
            </BtnMoreInfo>
          ) : null}
        </RowInfo>

        <RowBtn>
          <StyledBtn suggestion={props.suggestion}>
            <TextBtn suggestion={props.suggestion}>Confirm</TextBtn>
          </StyledBtn>

          <DeleteBtn>
            <TextBtn>Delete</TextBtn>
          </DeleteBtn>
        </RowBtn>
      </ViewRight>
    </Row>
  );
});
