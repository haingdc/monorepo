import React, { PropsWithChildren, ReactNode } from 'react'
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native'
import { BlurView } from 'expo-blur'
import chevron from '../../../assets/chevron-right.png'

export function ViewButton(props: ViewPropType) {
  const { style, intensity = 0, tint = 'default', children } = props
  return (
    <View style={[viewButtonStyles.container, style]}>
      <BlurView
        tint={tint}
        style={viewButtonStyles.blurview}
        intensity={intensity}
      >
        <Text style={viewButtonStyles.text}>{children}</Text>
        <Image style={viewButtonStyles.image} source={chevron} />
      </BlurView>
    </View>
  )
}
interface ViewPropType extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>
  intensity?: number
  tint?: 'default' | 'light' | 'dark'
  children: ReactNode
}

const viewButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  blurview: {
    flexDirection: 'row',
    paddingLeft: 26,
    paddingRight: 18,
    paddingVertical: 9,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
    // letterSpacing: 1.1,
    marginRight: 9,
  },
  image: {
    width: 8,
    height: 14,
  },
})
