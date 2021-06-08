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
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '4d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
    },
    {
        id: 2,
        title: 'Lương Thuỳ Linh sent you a friend request.',
        subTitle: '3d',
        avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        suggestion: false,
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

export const FriendlyRequestScreen = memo(function FriendlyRequestScreen() {
    return (
        <Container>
            <HeaderBack title={'Tất cả lời mời'} />
            <FlatList
                contentContainerStyle={{paddingVertical: 16}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </Container>
    );
});
