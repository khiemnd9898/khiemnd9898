import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {IC_LIKE, IC_ADD, IC_MORE} from '@/assets';
import {Colors} from '@/themes/Colors';
import {AvatarImage} from '@/components/AvatarImage';

const Container = styled.View`
    padding: 0 16px;
    border-bottom-width: 0.5;
    border-bottom-color: #ccc;
    padding-bottom: 10px;
`;
const Row = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
`;

const AvatarSection = styled.View`
    width: 56px;
    height: 100%;
`;

const InfoSection = styled.View`
    flex: 1;
    height: 100%;
    padding-left: 10px;
`;
const InfoSectionBrand = styled.Text`
    font-family: ${Fonts.Bold};
    font-size: 24px;
    color: ${(p) => p.theme.gray1};
`;
const InfoSectionSub = styled.Text`
    font-size: 14px;
    color: ${(p) => p.theme.gray3};
`;
const InfoSectionSub2 = styled(InfoSectionSub)`
    margin-left: 5px;
`;
const LikeSection = styled.TouchableOpacity`
    width: 60px;
    padding: 5px 0;
    align-items: center;
    justify-content: center;
`;
const LikeSectionText = styled.Text<{isLiked?: boolean}>`
    font-size: 12px;
    color: ${(p) => (p.isLiked ? Colors.red0 : p.theme.gray1)};
    font-family: ${Fonts.Medium};
`;
const LikeIcon = styled.Image<{liked?: boolean}>`
    width: 21px;
    height: 21px;
    tint-color: ${(p) => (p.liked ? Colors.red0 : p.theme.gray1)};
`;
const ActionBtn = styled.TouchableOpacity<{color?: string}>`
    background-color: ${(p) => (p.color ? p.color : p.theme.gray6)};
    padding: 5px 10px;
    margin-left: 5px;
    width: 50px;
    height: 35px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
`;
const FollowBtn = styled(ActionBtn)`
    flex: 1;
    flex-direction: row;
    margin-left: 0px;
`;
const ButtonText = styled.Text`
    color: #fff;
    margin-left: 5px;
`;
const Icon = styled.Image<{color?: string}>`
    width: 21px;
    height: 21px;
    tint-color: ${(p) => (p.color ? p.color : p.theme.gray1)};
`;

export const ActionSection = memo(function ActionSection() {
    return (
        <Container>
            <Row>
                <AvatarSection>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={56}
                    />
                </AvatarSection>

                <InfoSection>
                    <InfoSectionBrand>Smartmen</InfoSectionBrand>
                    <InfoSectionSub>Cửa hàng giày dép</InfoSectionSub>
                </InfoSection>

                <LikeSection>
                    <LikeIcon source={IC_LIKE} />
                    <LikeSectionText>Đã thích</LikeSectionText>
                </LikeSection>
            </Row>

            <Row>
                <FollowBtn color="#1877f2">
                    <Icon source={IC_ADD} color={'#fff'} />
                    <ButtonText>Theo dõi</ButtonText>
                </FollowBtn>
                <ActionBtn>
                    <Icon source={IC_ADD} />
                </ActionBtn>
                <ActionBtn>
                    <Icon source={IC_MORE} />
                </ActionBtn>
            </Row>

            <Row>
                <AvatarImage
                    uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                    width={32}
                />
                <InfoSectionSub2>601.284 người thích trang này</InfoSectionSub2>
            </Row>
        </Container>
    );
});
