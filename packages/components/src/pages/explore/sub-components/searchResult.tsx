import React from 'react'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import { ProductList } from '../../../containers/product-list'
import { ViewButton } from '../../../components/button2-view'
import cursor from '../../../../assets/cursor.png'
import cardPic1 from '../../../../assets/card_s_taj-vista.png'
import cardPic2 from '../../../../assets/card_s_sheraton.png'

export const list = [
  {
    title: 'Sheraton Grand',
    source: cardPic1,
    price: '5988',
    isDiscount: true,
    priceDiscount: '6067',
  },
  {
    title: 'Taj Vista',
    source: cardPic2,
    price: '6999',
    isDiscount: true,
    priceDiscount: '6067',
  },
  {
    title: 'Taj Vista',
    source: cardPic2,
    price: '6999',
    isDiscount: true,
    priceDiscount: '6067',
  },
]

export function SearchResult() {
  return (
    <>
      <Banner />
      <ProductList data={list} key="Hotels1" onViewAll={() => {}}>
        Top Hotels
      </ProductList>
      <ProductList
        data={list}
        key="Hotels2"
        onViewAll={() => {}}
        style={{ marginVertical: 20, marginHorizontal: 20 }}
      >
        Top Deals
      </ProductList>
    </>
  )
}

function Banner() {
  return (
    <View style={bannerStyles.container}>
      <Image style={bannerStyles.cursor} source={cursor} />
      <View style={bannerStyles.textWrapper}>
        <Text style={bannerStyles.text}>We have deals for</Text>
        <Text style={bannerStyles.text}>your favorite and relaxing</Text>
        <Text style={bannerStyles.text}>stay.</Text>
      </View>
      <ViewButton
        style={bannerStyles.cta}
        tint={Platform.OS == 'ios' ? 'light' : 'default'}
        intensity={Platform.OS == 'ios' ? 10 : 100}
      >
        View
      </ViewButton>
    </View>
  )
}

const bannerStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#EF4339',
    width: 326,
    paddingTop: 12,
    paddingBottom: 7,
    paddingLeft: 5,
    marginBottom: 15,
  },
  textWrapper: {},
  text: {
    fontSize: 20,
    lineHeight: 30,
    // letterSpacing: 1.1,
    color: '#fff',
    flex: 0,
  },
  cursor: {
    flex: 0,
    width: 48,
    height: 50,
    marginRight: 20,
  },
  cta: {
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
})
