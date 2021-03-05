import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Button, Button2 } from "../../components/button";
import calendar from '../../../assets/calendar.png';
import drop     from '../../../assets/drop.png';
import location from '../../../assets/place.png';
import group    from '../../../assets/group.png';
import { InputApp } from '../../components/input';
import { ProductList } from '../../containers/product-list';
import cardPic1 from '../../../assets/card_s_taj-vista.png';
import cardPic2 from '../../../assets/card_s_sheraton.png';

export const list = [
  { title: 'Sheraton Grand', source: cardPic1, price: '5999' },
  { title: 'Taj Vista'     , source: cardPic2, price: '6999' },
  { title: 'Taj Vista'     , source: cardPic2, price: '6999' },
];

export function Explore() {
  const [place  , setPlace  ] = useState('Bangalore');
  const [goStart, setGoStart] = useState('27 May, 2020');
  const [goEnd  , setGoEnd  ] = useState('30 May, 2020');
  const [members, setMembers] = useState('1 Adult');

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
        <InputApp
          type="location"
          avatar={location}
          style={styles.intput}
          value={place}
          onChangeText={setPlace}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <InputApp
            type="location"
            avatar={calendar}
            style={styles.intput}
            value={goStart}
            onChangeText={setGoStart}
            imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <InputApp
            type="location"
            avatar={calendar}
            style={styles.intput}
            value={goEnd}
            onChangeText={setGoEnd}
            imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <InputApp
            type="location"
            avatar={group}
            style={styles.intput}
            value={members}
            onChangeText={setMembers}
            imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Button>Search</Button>
          <Button2 style={{ width: 45, height: 40, marginLeft: 10 }}>
            <Image source={drop} style={{ width: 15, height: 20 }} />
          </Button2>
        </View>
        <ProductList data={list} onViewAll={() => {}}>Hotels</ProductList>
        <ProductList data={list} onViewAll={() => {}} style={{ marginVertical: 20, marginHorizontal: 20 }}>Hotels</ProductList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  intput: {
    marginHorizontal: 20,
    marginBottom    : 20,
    flexDirection   : 'row',
    alignSelf       : 'stretch',
    alignItems      : 'center',
    borderWidth     : 1,
    borderColor     : 'rgba(112, 112, 112, 0.5)',
    borderStyle     : 'solid',
    shadowColor     : 'rgba(56,56,56,0.75)',
    shadowOffset    : {
      width : 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius : 6.27,
    elevation    : 10,
    borderRadius : 4,
  },
})
