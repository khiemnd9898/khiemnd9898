import React, {memo} from 'react';
import styled from 'styled-components/native';
import {HeaderBack} from '@/components/HeaderBack';
import {FlatList} from 'react-native';
import {RequestItem} from '@/screens/NotifyScreen/components/RequestItem';

const Container = styled.View`
    flex: 1;
    background-color: ${(p) => p.theme.backgroundColor};
`;

const DATA = [
    {
        id: 1,
        title: 'Ninh Dương Lan Ngọc',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh',
        subTitle: '1 mutual friend',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: true,
    },
];

const renderItem = ({item}: any) => (
    <RequestItem
        id={item.id}
        title={item.title}
        avatar={item.avatar}
        subTitle={item.subTitle}
        suggestion={item.suggestion}
    />
);
const keyExtractor = (item: any) => item.toString();

export const FriendlySuggestScreen = memo(function FriendlySuggestScreen() {
    return (
        <Container>
            <HeaderBack title={'Tất cả gợi ý'} />
            <FlatList
                contentContainerStyle={{paddingVertical: 16}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    );
});
