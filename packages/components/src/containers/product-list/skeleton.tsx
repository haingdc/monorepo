import React from 'react'
import { View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import ContentLoader, { Rect } from 'react-content-loader/native'
import {
  ProductListTypeProp,
  Item,
  listStyles,
  carouselStyles,
  itemWidth,
  sliderWidth,
} from './product-list'

export function ProductListSkeleton(props: ProductListTypeProp<Item>) {
  const { style, data, children, onViewAll } = props
  return (
    <View style={style}>
      <View style={listStyles.header}>
        <Text style={listStyles.title}>{children}</Text>
        <Text style={listStyles.cta} onPress={onViewAll}>
          Select All
        </Text>
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
  )

  function renderItem() {
    return (
      <View style={carouselStyles.slide}>
        <View style={carouselStyles.slideInnerContainer}>
          <Skeleton />
        </View>
      </View>
    )
  }
}
const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={160}
    height={168}
    viewBox="0 0 160 168"
    backgroundColor="#e7e3e3"
    foregroundColor="#fafafa"
    {...props}
  >
    <Rect x="0" y="0" rx="4" ry="4" width="160" height="100" />
    <Rect x="0" y="115" rx="3" ry="3" width="127" height="20" />
    <Rect x="0" y="145" rx="3" ry="3" width="60" height="15" />
  </ContentLoader>
)
