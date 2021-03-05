import React from 'react';
import { ScrollView, View } from 'react-native';
import { ProductList } from '../../containers/product-list';
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
          paddingTop: 30,
          alignItems: 'center',
          alignSelf: 'center',
          width: 375,
          paddingBottom: 40,
        }}
      >
        <ProductList data={list} key="Hotels1" onViewAll={() => {}}>Top Hotels</ProductList>
        <ProductList data={list} key="Hotels2" onViewAll={() => {}}
                     style={{ marginVertical: 20, marginHorizontal: 20 }}>Top Deals</ProductList>
      </View>
    </ScrollView>
  );
}
