import React, { PropsWithChildren } from 'react'
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageURISource,
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
    <View style={[baseStyles.container, baseStyles.shadow]}>
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
    borderRadius: 4,
  },
  shadow: {
    overflow: 'visible',
    shadowColor: '#000',
    backgroundColor: '#fff',
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
  const { children, type, style } = props
  const [source, width, height] = sources[type]
  return (
    <View style={[styles.container, style]}>
      <AmenityBase source={source} width={width} height={height} />
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

interface PropType extends PropsWithChildren<any> {
  type: 'wifi' | 'breakfast' | 'pets' | 'bar' | 'pool' | 'more'
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginTop: 7,
    fontSize: 10,
    lineHeight: 10,
  },
})

const sources: Record<string, [ImageURISource, number, number]> = {
  wifi: [wifi, 22, 16],
  breakfast: [breakfast, 20, 18],
  pets: [pets, 20, 19],
  bar: [bar, 11, 20],
  pool: [pool, 20, 18],
  more: [more, 20, 5],
}
