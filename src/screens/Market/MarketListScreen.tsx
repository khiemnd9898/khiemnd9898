import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components/native";
import {DataProvider, LayoutProvider, RecyclerListView} from "recyclerlistview";
import {Dimensions, StyleSheet} from "react-native";
import {useAsyncFn} from "@/hooks/useAsyncFn";
import FastImage from "react-native-fast-image";
import {Fonts} from "@/assets/fonts";
import {MarketLoadingComponent} from "@/screens/Market/MarketLoadingComponent";
import {navigateMarketDetailScreen} from "@/utils/navigation"; // 1.2.2

const {width} = Dimensions.get('window');
const SCREEN_WIDTH = width - 32;
const isSmallDevice = SCREEN_WIDTH <= 414;
const numColumns = isSmallDevice ? 2 : 3;
const PRODUCT_ITEM_OFFSET = 10;
const ITEM_WIDTH = SCREEN_WIDTH / numColumns;
const PRODUCT_ITEM_HEIGHT = ((4 / 3) * (ITEM_WIDTH - PRODUCT_ITEM_OFFSET)) + 30;

const Container = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const ItemContainer = styled.TouchableOpacity`
  overflow: hidden;
  width: ${ITEM_WIDTH - PRODUCT_ITEM_OFFSET}px;
  height: ${PRODUCT_ITEM_HEIGHT}px;
  flex-direction: column;
`;

const ItemImage = styled(FastImage)`
  width: ${ITEM_WIDTH - PRODUCT_ITEM_OFFSET}px;
  height: ${PRODUCT_ITEM_HEIGHT - 30}px;
  border-radius: 4px;
`;

const Price = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: ${Fonts.Medium};
  padding-top: 2px;
`;

const keyExtractor = (item: any) => {
    return item.toString();
};

interface Props {
    data: any
}
const Item = memo((props: Props) => {
    const {data} = props;
    const onDetail = useCallback(() => {
        navigateMarketDetailScreen({id: '1'})
    }, []);

    return (
        <ItemContainer onPress={onDetail}>
            <ItemImage
                source={{uri: data?.avatar || ""}}
                resizeMode={"cover"}
            />
            <Price numberOfLines={1}>
                500.000 VNĐ
            </Price>
        </ItemContainer>
    )
});

const renderItem = (type: any, data: any) => {
    return (
        <Item data={data}/>
    );
};

const avatars = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPel13kelodIToxSzKAXg8XTPSXd47RU5JeQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYTIzf_PFOUupav8QZvyXPY9fxMXFIK4aXw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow2_U3PEIh-ydyvNoYkI6Z21xjSDuiCeUQg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXc4n2HshL-dX50qjb922ayT3w6n3r_As00w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs6xCkhevpcP4K36Ny4NVArxr45ZfoYBfqg&usqp=CAU'
];

export const MarketListScreen = memo(function MarketListScreen() {
    const layoutProvider = useRef(new LayoutProvider(() => {
        return "DEFAULT"
    }, (type, dim) => {
        dim.width = ITEM_WIDTH;
        dim.height = PRODUCT_ITEM_HEIGHT + PRODUCT_ITEM_OFFSET;
    })).current;

    const [dataProvider, setDataProvider] = useState(new DataProvider((r1, r2) => {
        return r1 !== r2;
    }).cloneWithRows([]));

    const [{loading}, fetchData] = useAsyncFn(async () => {
        try {
            let result = [];

            for (let i = 0; i < 1000; i++) {
                const _index = Math.floor(Math.random() * avatars.length);
                result.push({
                    id: i.toString(),
                    avatar: avatars[_index]
                })
            }
            setDataProvider(new DataProvider((r1, r2) => {
                return r1 !== r2;
            }).cloneWithRows(result))

        } catch (error) {
            console.error(error);
        }
    }, []);


    useEffect(() => {
        fetchData().then();
    }, []);

    return (
        <Container>
            {
                loading
                    ? <MarketLoadingComponent/>
                    : <RecyclerListView
                        style={styles.listContainer}
                        renderAheadDistance={250}
                        dataProvider={dataProvider}
                        layoutProvider={layoutProvider}
                        keyExtractor={keyExtractor}
                        rowRenderer={renderItem}
                    />
            }

        </Container>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    listContainer: {
        flex: 1,
        paddingTop: 12
    },
    itemImage: {
        width: SCREEN_WIDTH / numColumns,
        height: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTitle: {
        flex: 1,
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0,0,0,0.15)',
    },
    itemPrice: {
        fontWeight: 'bold',
    },
    itemPriceClearance: {
        fontWeight: 'bold',
        color: 'red',
    },
});
