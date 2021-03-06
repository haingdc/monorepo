import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { ProductList } from '../../containers/product-list';
import cursor   from '../../../assets/cursor.png';
import chevron  from '../../../assets/chevron-right.png';
import cardPic1 from '../../../assets/card_s_taj-vista.png';
import cardPic2 from '../../../assets/card_s_sheraton.png';



export const list = [
  { title: 'Sheraton Grand', source: cardPic1, price: '5999' },
  { title: 'Taj Vista'     , source: cardPic2, price: '6999' },
  { title: 'Taj Vista'     , source: cardPic2, price: '6999' },
];

export function Wishlist() {
  return (
    <ScrollView>
      <View
        nativeID="todo"
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          width: 375,
          paddingTop: 30,
          paddingBottom: 40,
        }}
      >
        <View nativeID="todoBanner" style={bannerStyles.container}>
          <Image style={bannerStyles.cursor} source={cursor}/>
          <Text style={bannerStyles.text}>We have deals for your favorite and relaxing stay. </Text>
          <ViewButton style={bannerStyles.cta} />
        </View>
        <ProductList data={list} key="Hotels1" onViewAll={() => {}}>Top Hotels</ProductList>
        <ProductList data={list} key="Hotels2" onViewAll={() => {}}
                     style={{ marginVertical: 20, marginHorizontal: 20 }}>Top Deals</ProductList>
      </View>
    </ScrollView>
  );
}


function ViewButton(props) {
  const style = StyleSheet.compose(viewButtonStyles.container, props.style);
  return (
    <View nativeID="todoView" style={style}>
      <Text style={viewButtonStyles.text}>View All</Text>
      <Image style={viewButtonStyles.image} source={chevron} />
    </View>
  )
}

const viewButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    paddingLeft: 26,
    paddingRight: 18,
    paddingVertical: 11,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1.1,
    marginRight: 9,
  },
  image: {
    width: 8,
    height: 14,
  },
});

const bannerStyles = StyleSheet.create({
  container: {
    borderRadius   : 4,
    flexDirection  : 'row',
    backgroundColor: '#EF4339',
    marginHorizontal: 20,
    paddingLeft: 8,
    paddingTop: 12,
    paddingBottom: 5,
  },
  text: {
    fontSize     : 20,
    lineHeight   : 30,
    letterSpacing: 1.1,
    color:    '#fff',
    paddingRight: 28,
  },
  cursor: {
    width : 48,
    height: 50,
    marginRight: 20,
  },
  cta: {
    right   : 0,
    bottom  : 0,
    position: 'absolute',
  },
});
