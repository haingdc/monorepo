import React, { PropsWithChildren } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
} from 'react-native'

export function Currency(props: CurrencyTypeProp) {
  const { children, style, color, isCut, currencyPhoto } = props
  return (
    <View style={[style, styles.container]}>
      {isCut ? <View style={styles.line} /> : undefined}
      <Image source={currencyPhoto} style={styles.sign} />
      <Text style={{ color }}> {children} </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  sign: {
    width: 5.5,
    height: 10,
  },
  line: {
    height: 2,
    backgroundColor: '#EF4339',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transform: [{ rotate: '6deg' }, { translateY: 8 }, { translateX: 2 }],
  },
})

export function BigCurrency(props: CurrencyTypeProp) {
  const { children, style, color, currencyPhoto } = props
  return (
    <View style={[style, stylesBig.currency]}>
      <Image source={currencyPhoto} style={stylesBig.currencySign} />
      <Text style={[stylesBig.text, { color }]}> {children} </Text>
    </View>
  )
}

const stylesBig = StyleSheet.create({
  currency: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  currencySign: {
    width: 9.35,
    height: 17,
  },
  text: {
    fontSize: 24,
  },
})

interface CurrencyTypeProp extends PropsWithChildren<any> {
  isCut?: boolean
  style?: StyleProp<ViewStyle>
  color: '#EF4B41' | '#000' | '#fff'
  currencyPhoto: ImageSourcePropType
}
