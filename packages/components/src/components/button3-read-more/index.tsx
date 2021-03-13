import React, { PropsWithChildren } from 'react'
import {
  GestureResponderEvent,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import icon from '../../../assets/read-more.png'

export function ReadMoreButton(props: PropType) {
  const { style, isMore, children, onPress } = props
  return (
    <View style={[styleReadMore.container, style]}>
      <Text style={styleReadMore.text} onPress={onPress}>
        {children}
      </Text>
      <Image
        source={icon}
        style={{
          width: 7,
          height: 4,
          marginTop: 4,
          marginLeft: 3,
          transform: [{ rotate: `${isMore ? 0 : 180}deg` }],
        }}
      />
    </View>
  )
}
const styleReadMore = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#EF4339',
    fontSize: 12,
    lineHeight: 14,
  },
})

interface PropType extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>
  isMore: boolean
  onPress?: (event: GestureResponderEvent) => void
}
