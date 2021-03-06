import React, { PropsWithChildren } from 'react';
import { View, Text, StyleProp, ViewStyle, StyleSheet, Dimensions, GestureResponderEvent } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { HotelSmallCard } from '../../components/card';

type Item = {
  title: string;
  source: any;
  price: string;
}

export function ProductList(props: ProductListTypeProp<Item>) {
  const { style, data, children, onViewAll } = props;
  return (
    <View style={style}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: '900', lineHeight: 19 }}>{children}</Text>
        <Text
          onPress={onViewAll}
          style={{
            color     : '#EF4339',
            fontSize  : 14,
            fontWeight: '400',
            lineHeight: 17,
          }}
        >Select All</Text>
      </View>
      <View style={carouselStyles.slideWrapper}>
        <Carousel
          data={data}
          renderItem={renderItem}
          itemWidth={itemWidth}
          sliderWidth={sliderWidth}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment="start"
          removeClippedSubviews={false}
        />
      </View>
    </View>
  );

  function renderItem({ item, index }) {
    return (
      <View style={carouselStyles.slide}>
        <View style={carouselStyles.slideInnerContainer}>
          <HotelSmallCard source={item.source} price={item.price}>{item.title}</HotelSmallCard>
        </View>
      </View>
    );
  }
}

interface ProductListTypeProp<T> extends PropsWithChildren<any> {
  children: string;
  style?: StyleProp<ViewStyle>;
  data: ReadonlyArray<T>;
  onViewAll: (event: GestureResponderEvent) => void;
}

// follow instruction from official website react-native-snap-carousel to have spacing between slides
const horizontalMargin =   7;
const slideWidth       = 160;
const itemHeight       = 168;
export const itemWidth   = slideWidth + horizontalMargin * 2;
export const sliderWidth = Dimensions.get('window').width;

export const carouselStyles = StyleSheet.create({
  slide: {
    paddingHorizontal: 0,
    width: itemWidth,
    height: itemHeight,
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1,
  },
  slideWrapper: {
    height: 168,
    width: 335,
  },
});