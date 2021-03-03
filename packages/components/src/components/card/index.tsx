import React, { PropsWithChildren, ReactNode } from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType } from 'react-native';
import currencyPic from '../../../assets/currency.png';

export function HotelSmallCard(props: HotelSmallCardPropType) {
  const { source, price, children } = props;
  return (
    <Container>
      <Image style={styles.smallImage} source={source} />
      <View>
        <Text>{children}</Text>
        <Currency>{price}</Currency>
      </View>
    </Container>
  )
}

interface HotelSmallCardPropType extends PropsWithChildren<any>{
  source: ImageSourcePropType;
  price : string;
}

function Currency(props: PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <View style={styles.currency}>
      <Image source={currencyPic} style={styles.currencySign}/>
      <Text>{children}</Text>
    </View>
  );
}

function Container(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow    : 'hidden',
  },
  smallImage: {
    width : 160,
    height: 100,
  },
  currency: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySign: {
    width : 5.5,
    height: 10,
  }
});