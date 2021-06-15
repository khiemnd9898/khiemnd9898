import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Fonts} from '@/assets/fonts';
import {IC_GLOBAL, IC_ADD, IC_MORE} from '@/assets';
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
const InfoSection = styled.View`
    flex: 1;
    height: 100%;
`;
const InfoSectionBrand = styled.Text`
    font-family: ${Fonts.Bold};
    font-size: 24px;
    color: ${(p) => p.theme.gray1};
`;
const InfoSectionSub = styled.View`
    flex-direction: row;
    align-items: center;
`;
const StyledText = styled.Text<{color?: string}>`
    font-size: 14px;
    color: ${(p) => (p.color ? p.color : p.theme.gray3)};
`;
const StyledTextBold = styled(StyledText)`
    font-family: ${Fonts.Bold};
`;
const Icon = styled.Image<{color?: string}>`
    width: 21px;
    height: 21px;
    tint-color: ${(p) => (p.color ? p.color : p.theme.gray3)};
`;
const Icon2 = styled(Icon)`
    tint-color: ${(p) => p.theme.backgroundColor};
`;
const AvatarSection = styled.View`
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    border-radius: 32px;
    background-color: ${(p) => p.theme.gray2};
    border: 1px solid #fff;
`;
const InviteButton = styled.TouchableOpacity<{bgColor?: string}>`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${(p) => (p.bgColor ? p.bgColor : '#1877f2')};
    border-radius: 15px;
    padding: 5px 8px;
    margin-right: 5px;
`;
const InviteButton2 = styled(InviteButton)`
    margin-left: 5px;
`;

export const ActionSection = memo(function ActionSection() {
    return (
        <Container>
            <Row>
                <InfoSection>
                    <InfoSectionBrand>Smartmen</InfoSectionBrand>
                    <InfoSectionSub>
                        <Icon source={IC_GLOBAL} />
                        <StyledText>Nhóm công khai</StyledText>
                    </InfoSectionSub>
                </InfoSection>
            </Row>

            <Row>
                <AvatarSection>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={32}
                    />
                </AvatarSection>
                <AvatarSection>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={32}
                    />
                </AvatarSection>
                <AvatarSection>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={32}
                    />
                </AvatarSection>
                <AvatarSection>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={32}
                    />
                </AvatarSection>
                <AvatarSection>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={32}
                    />
                </AvatarSection>
                <AvatarSection>
                    <Icon2 source={IC_MORE} />
                </AvatarSection>

                <InviteButton2>
                    <Icon color={'#fff'} source={IC_ADD} />
                    <StyledTextBold color={'#fff'}>&nbsp;Mời</StyledTextBold>
                </InviteButton2>
            </Row>

            <Row>
                <InviteButton bgColor={Colors.gray6}>
                    <AvatarImage
                        uri="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/76651694_2478051872469137_6118006631969062912_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBSEGPfUgDoAX8h9sN9&_nc_oc=AQnhz5xWrasoGhOAuFIA1o86I-ZTmrMTQ89JK_ouVOc1JtulIeikjWYlOlYikoRIm00&_nc_ht=scontent.fhph1-2.fna&oh=c0968f0b07c855b490bc269a6fe1ceef&oe=60CBC926"
                        width={20}
                    />
                    <StyledTextBold color={Colors.gray1}>&nbsp;Bạn</StyledTextBold>
                </InviteButton>
                <InviteButton bgColor={Colors.gray6}>
                    <StyledTextBold color={Colors.gray1}>Chat</StyledTextBold>
                </InviteButton>
                <InviteButton bgColor={Colors.gray6}>
                    <StyledTextBold color={Colors.gray1}>Chủ đề</StyledTextBold>
                </InviteButton>
                <InviteButton bgColor={Colors.gray6}>
                    <StyledTextBold color={Colors.gray1}>Ảnh</StyledTextBold>
                </InviteButton>
                <InviteButton bgColor={Colors.gray6}>
                    <StyledTextBold color={Colors.gray1}>Sự kiện</StyledTextBold>
                </InviteButton>
            </Row>
        </Container>
    );
});
