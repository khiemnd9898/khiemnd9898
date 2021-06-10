import React, {memo} from 'react';
import styled from "styled-components/native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {Dimensions} from "react-native";
const {width} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
`;


export const MarketLoadingComponent = memo(function () {
    return (
        <Container>
            <SkeletonPlaceholder highlightColor="#eee" backgroundColor="#DDD" speed={1500}>
                {
                    [1,2,3].map(item => {
                        return (
                            <SkeletonPlaceholder.Item
                                key={item.toString()}
                                flexDirection="row"
                                width={width - 32}
                                marginTop={12}
                                alignItems="center">
                                <SkeletonPlaceholder.Item
                                    borderRadius={8}
                                    width={width / 2 - 24}
                                    height={250}
                                />
                                <SkeletonPlaceholder.Item
                                    borderRadius={8}
                                    width={width / 2 - 24}
                                    height={250}
                                    marginLeft={12} />
                            </SkeletonPlaceholder.Item>
                        )
                    })
                }
            </SkeletonPlaceholder>
        </Container>
    )
})
