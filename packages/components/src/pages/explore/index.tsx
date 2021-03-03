import React, { useState, useLayoutEffect, useContext, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { InputApp } from '../sign-in';
import location from '../../../assets/place.png';
import group from '../../../assets/group.png';
import calendar from '../../../assets/calendar.png';
import { HotelSmallCard } from '../../components/card';
import cardPic1 from '../../../assets/card_s_taj-vista.png';
import cardPic2 from '../../../assets/card_s_sheraton.png';

const list = [
  { title: 'Sheraton Grand', source: cardPic1, price: '5999' },
  { title: 'Taj Vista'     , source: cardPic2, price: '6999' },
  { title: 'Taj Vista'     , source: cardPic2, price: '6999' },
];

export function Explore() {
  const [place  , setPlace  ] = useState('Bangalore');
  const [goStart, setGoStart] = useState('27 May, 2020');
  const [goEnd  , setGoEnd  ] = useState('30 May, 2020');
  const [members, setMembers] = useState('1 Adult');

  function renderItem({item, index}) {
    return (
      <View style={carouselStyles.slide}>
        <View style={carouselStyles.slideInnerContainer}>
          <HotelSmallCard source={item.source} price={item.price}>{item.title}</HotelSmallCard>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
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
      <View style={carouselStyles.slideWrapper}>
        <Carousel
          data={list}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={carouselStyles.container}
          contentContainerStyle={carouselStyles.content}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          activeSlideAlignment="start"
          removeClippedSubviews={false}
        />
      </View>
    </View>
  );
}

const horizontalMargin = 7;
const slideWidth = 160;
const itemHeight = 168;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

const carouselStyles = StyleSheet.create({
  container: {},
  content: {},
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

const styles = StyleSheet.create({
  title: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  link: {
    color: '#1D3AF2',
    textDecorationLine: 'underline',
    fontWeight: 'normal',
  },
  intput: {
    width: 335,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.5)',
    borderStyle: 'solid',
    shadowColor: 'rgba(56,56,56,0.75)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 4,
  },
})
