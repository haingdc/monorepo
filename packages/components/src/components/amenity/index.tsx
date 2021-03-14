import React from 'react'
import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import wifi from '../../../assets/amenity-wifi.png'
import breakfast from '../../../assets/amenity-breakfast.png'
import pets from '../../../assets/amenity-pets.png'
import bar from '../../../assets/amenity-bar.png'
import pool from '../../../assets/amenity-pool.png'
import more from '../../../assets/amenity-more.png'

function AmenityBase(props: AmenityBasePropType) {
  const { source, width, height } = props
  return (
    <View style={baseStyles.container}>
      <Image source={source} style={{ width, height }} />
    </View>
  )
}

const baseStyles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

interface AmenityBasePropType {
  source: ImageSourcePropType
  width: number
  height: number
}

export function Amenity(props: PropType) {
  const { type, style } = props
  return (
    <View style={style}>
      <AmenityBase source={sources[type]} width={22} height={16} />
    </View>
  )
}

interface PropType {
  type: 'wifi' | 'breakfast' | 'pets' | 'bar' | 'pool' | 'more'
  style?: StyleProp<ViewStyle>
}

const sources = {
  wifi,
  breakfast,
  pets,
  bar,
  pool,
  more,
}
