import React, { PropsWithChildren, ReactNode } from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType } from 'react-native';
import currencyPic from '../../../assets/currency.png';
import currencyDiscountPic from '../../../assets/currency-discount.png';

export function HotelSmallCard(props: HotelSmallCardPropType) {
  const { source, price, children, type = 'default' } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.smallImage} source={source} />
      <View style={hotelCardStyles.container}>
        <Text style={hotelCardStyles.name}>{children}</Text>
        <Currency type={type}>{price}</Currency>
      </View>
    </View>
  )
}

const hotelCardStyles = StyleSheet.create({
  container: {
    paddingTop   : 15,
    paddingRight : 15,
    paddingBottom: 13,
    paddingLeft  : 15,
    alignItems: 'flex-start',
  },
  name: {
    marginBottom: 6,
  },
});

interface HotelSmallCardPropType extends PropsWithChildren<any>{
  source: ImageSourcePropType;
  price : string;
  type? : 'red' | 'default'
}

function Currency(props: PropsWithChildren<{ type?: 'red' | 'default' }>) {
  const { children, type = 'default'} = props;
  const pic   = type == 'default' ? currencyPic : currencyDiscountPic;
  const color = type == 'default' ? '#000' : '#EF4B41';
  return (
    <View nativeID="todoCurrency" style={[styles.currency ]}>
        <View style={styles.line}/>
        <Image source={pic} style={styles.currencySign}/>
        <Text style={{ color }}> {children} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius   : 4,
    overflow       : 'hidden',
    backgroundColor: '#fff',
    shadowColor    : "#000",
    shadowOffset   : {
      width : 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius : 2.22,
    elevation    : 3,
  },
  smallImage: {
    width : 160,
    height: 100,
  },
  currency: {
    flexDirection: 'row',
    alignItems   : 'center',
    position: 'relative',
  },
  currencySign: {
    width : 5.5,
    height: 10,
  },
  line: {
    height         : 2,
    backgroundColor: '#EF4339',
    position       : 'absolute',
    top            : 0,
    right          : 0,
    left           : 0,
    bottom         : 0,
    transform      : [{ rotate: '6deg' }, { translateY: 8 }, { translateX: 2 }],
  },
});