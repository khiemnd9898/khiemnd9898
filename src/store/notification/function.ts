import {Fetch} from '@/utils/fetch';
import {RawNotification} from '@/types';
import {syncAllNotifications} from '@/store/notification/index';

const fakeData: RawNotification[] = [
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: false,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T12:48:25.625Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T12:48:25.625Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T12:48:25.625Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T12:48:25.625Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T12:48:25.625Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
    {
        id: '',
        content: 'Kỳ Duyên, Lương Thuỳ Linh and others added to their stories.',
        created_at: '2021-06-03T21:24:02.868Z',
        image: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/20210314-hinh-gai-xinh-1-835x1253.jpg',
        seen: true,
    },
];

export const requestGetNotificationList = async () => {
    /*
    const {data} = await Fetch.get<{result: RawNotification[]}>(
        'notification/list',
        {
            params: {
                limit: 99999,
                level: 0,
                active: 1,
                page: 1,
            },
        },
    );

    if (!data || !data?.result || !data?.result) {
        return [];
    }
    */
    let sortedFakeData = fakeData.sort((x, y) => +new Date(y.created_at) - +new Date(x.created_at));
    let result: RawNotification[] = [];

    for (let i = 0; i < sortedFakeData.length; i++) {
        result.push({
            ...sortedFakeData[i],
            id: i.toString(),
        });
    }

    syncAllNotifications(result);
    return result.map((item) => item.id);
};
