import {IC_BOOK_MARK, IC_EYE_HIDE, IC_FLAG, IC_MORE} from '@/assets';
import {BottomMenuSelector} from '@/components/BottomMenu';
import useBoolean from '@/hooks/useBoolean';
import {useRequest} from '@/store/request';
import {useSuggestion} from '@/store/suggestion';
import {Colors} from '@/themes/Colors';
import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import {AvatarImage} from '@/components/AvatarImage';
import {TouchableOpacity, TouchableHighlight} from 'react-native';

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6px 16px;
`;
const ViewLeft = styled.View`
    width: 55px;
    justify-content: center;
    align-items: center;
`;

const ViewRight = styled.View`
    flex: 1;
    padding-left: 18px;
`;
const StyledText = styled.Text`
    color: ${(p) => p.theme.gray1};
    line-height: 20px;
`;
const StyledTextBold = styled(StyledText)`
    font-weight: bold;
`;
const SubTitle = styled.Text`
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
const RowInfoText = styled.View`
    flex-direction: row;
`;
const BtnMoreInfo = styled(TouchableHighlight).attrs(props => ({
    underlayColor: props.theme.gray5,
}))`
    justify-content: center;
    align-items: flex-end;
    border-radius: 18px;
    width: 35px;
    height: 35px;
`;
const IconMore = styled.Image`
    width: 35px;
    height: 35px;
    tint-color: ${(p) => p.theme.gray1};
`;

const RowBtn = styled.View`
    margin: 5px 0 0 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const StyledBtn = styled.TouchableOpacity<{suggestion?: boolean}>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(p) => (p?.suggestion ? '#1d87cc' : '#0077cc')};
    border-radius: 4px;
    padding: 8px 0;
`;
const DeleteBtn = styled(StyledBtn)`
    background-color: ${Colors.grey2};
    margin-left: 5px;
`;
const TextBtn = styled.Text`
    font-size: 14px;
    color: #fff;
`;

const menuOptions = [
    {
        icon: IC_BOOK_MARK,
        label: 'Đánh dấu là đã xem',
        value: 'save',
    },
    {
        icon: IC_EYE_HIDE,
        label: 'Gỡ thông báo',
        value: 'hide',
    },
    {
        icon: IC_FLAG,
        label: 'Báo cáo',
        value: 'hide',
    },
];

interface Props {
    id: string;
    suggestion?: boolean;
}

export const RequestItem = memo(function RequestItem(props: Props) {
    const {id, suggestion} = props;
    const item = suggestion ? useSuggestion(id) : useRequest(id);
    const [isShowMenu, setShowMenu, setHideMenu] = useBoolean(false);

    const onSelectOption = useCallback((keyName: string, value: string) => {
        if (value === 'save') {
            // do something
        }
    }, []);

    if (!item) return null;
    return (
        <>
            <Row>
                <ViewLeft>
                    <AvatarImage uri={item?.image} width={50} />
                </ViewLeft>

                <ViewRight>
                    <RowInfo>
                        <InfoSection>
                            <RowInfoText>
                                <TouchableOpacity>
                                    <StyledTextBold>
                                        {item?.title}
                                    </StyledTextBold>
                                </TouchableOpacity>
                                {!suggestion ? (
                                    <StyledText>
                                        &nbsp;sent you a friend request.
                                    </StyledText>
                                ) : null}
                            </RowInfoText>
                            <SubTitle>
                                {suggestion
                                    ? `${item?.subTitle} bạn chung`
                                    : `${moment(item?.subTitle)
                                          .startOf('day')
                                          .fromNow()}`}
                            </SubTitle>
                        </InfoSection>

                        {!suggestion ? (
                            <BtnMoreInfo
                                activeOpacity={0.5}
                                onPress={setShowMenu}>
                                <IconMore source={IC_MORE} />
                            </BtnMoreInfo>
                        ) : null}
                    </RowInfo>

                    {suggestion ? (
                        <RowBtn>
                            <StyledBtn suggestion={true}>
                                <TextBtn>Thêm bạn bè</TextBtn>
                            </StyledBtn>
                            <DeleteBtn>
                                <TextBtn>Xóa</TextBtn>
                            </DeleteBtn>
                        </RowBtn>
                    ) : (
                        <RowBtn>
                            <StyledBtn>
                                <TextBtn>Đồng ý</TextBtn>
                            </StyledBtn>

                            <DeleteBtn>
                                <TextBtn>Xóa</TextBtn>
                            </DeleteBtn>
                        </RowBtn>
                    )}
                </ViewRight>
            </Row>

            <BottomMenuSelector
                visible={isShowMenu}
                onHide={setHideMenu}
                options={menuOptions}
                onSelectOption={onSelectOption}
                inputName={'keyname'}
                label={'Tùy chọn'}
            />
        </>
    );
});
