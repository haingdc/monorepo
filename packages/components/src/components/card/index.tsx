import React, { PropsWithChildren, ReactNode } from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType } from 'react-native';
import currencyPic from '../../../assets/currency.png';

export function HotelSmallCard(props: HotelSmallCardPropType) {
  const { source, price, children } = props;
  return (
    <Container>
      <Image style={styles.smallImage} source={source} />
      <View style={hotelCardStyles.container}>
        <Text style={hotelCardStyles.name}>{children}</Text>
        <Currency>{price}</Currency>
      </View>
    </Container>
  )
}

const hotelCardStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 13,
    paddingLeft: 15,
  },
  name: {
    marginBottom: 6,
  },
});

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
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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