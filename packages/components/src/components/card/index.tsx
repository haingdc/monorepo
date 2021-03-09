import React, { PropsWithChildren, ReactNode } from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType, ViewStyle, StyleProp } from 'react-native';
import blackSign from '../../../assets/currency.png';
import redSign from '../../../assets/currency-discount.png';

export function HotelSmallCard(props: HotelSmallCardPropType) {
  const { source, price, priceDiscount, isDiscount, children, type = 'default' } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.smallImage} source={source} />
      <View style={hotelCardStyles.container}>
        <Text style={hotelCardStyles.name}>{children}</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            isDiscount
                ?
                  <Currency currencyPhoto={blackSign} isCut color="#000" style={{ marginRight: 10 }}>{priceDiscount}</Currency>
                :
                  undefined
          }
          <Currency currencyPhoto={isDiscount ? redSign : blackSign} isCut={false} color={isDiscount ? '#EF4B41' : '#000'}>{price}</Currency>
        </View>
      </View>
    </View>
  )
}

interface HotelSmallCardPropType extends PropsWithChildren<any>{
  source        : ImageSourcePropType;
  price         : string;
  priceDiscount?: string;
  isDiscount    : boolean;
  type?         : 'red' | 'default'
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

function Currency(props: CurrencyTypeProp) {
  const { children, style, color , isCut, currencyPhoto } = props;
  return (
    <View style={[style, styles.currency ]}>
        {isCut ? <View style={styles.line}/> : undefined}
        <Image source={currencyPhoto} style={styles.currencySign}/>
        <Text style={{ color }}> {children} </Text>
    </View>
  );
}

interface CurrencyTypeProp extends PropsWithChildren<any> {
  isCut  : boolean;
  color  : '#EF4B41' | '#000';
  style? : StyleProp<ViewStyle>;
  currencyPhoto: ImageSourcePropType;
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