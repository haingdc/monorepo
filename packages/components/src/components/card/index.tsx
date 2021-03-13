import React, { PropsWithChildren } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native'
import blackSign from '../../../assets/currency.png'
import redSign from '../../../assets/currency-discount.png'
import { Currency } from '../text-currency'

export function HotelSmallCard(props: HotelSmallCardPropType) {
  const {
    source,
    price,
    priceDiscount,
    isDiscount,
    children,
    type = 'default',
  } = props
  return (
    <View style={styles.container}>
      <Image style={styles.smallImage} source={source} />
      <View style={hotelCardStyles.container}>
        <Text style={hotelCardStyles.name}>{children}</Text>
        <View style={{ flexDirection: 'row' }}>
          {isDiscount ? (
            <Currency
              currencyPhoto={blackSign}
              isCut
              color="#000"
              style={{ marginRight: 10 }}
            >
              {priceDiscount}
            </Currency>
          ) : undefined}
          <Currency
            currencyPhoto={isDiscount ? redSign : blackSign}
            isCut={false}
            color={isDiscount ? '#EF4B41' : '#000'}
          >
            {price}
          </Currency>
        </View>
      </View>
    </View>
  )
}

interface HotelSmallCardPropType extends PropsWithChildren<any> {
  source: ImageSourcePropType
  price: string
  priceDiscount?: string
  isDiscount: boolean
  type?: 'red' | 'default'
}

const hotelCardStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    alignItems: 'flex-start',
  },
  name: {
    marginBottom: 6,
  },
})

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  smallImage: {
    width: 160,
    height: 100,
  },
})
