import React, { PropsWithChildren } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native'

export function Texticon(props: PropType) {
  const { children, source, imgHeight, imgWidth, style } = props
  return (
    <View style={[styles.container, style]}>
      <Image
        source={source}
        style={{ width: imgWidth, height: imgHeight, marginRight: 5 }}
      />
      <Text>{children}</Text>
    </View>
  )
}

interface PropType extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>
  source: ImageSourcePropType
  imgWidth: number
  imgHeight: number
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export function TextCell(props: TextPropType) {
  const { label, children, style } = props
  return (
    <View style={[stylesText.container, style]}>
      <Text style={stylesText.label}>{label}</Text>
      <Text>{children}</Text>
    </View>
  )
}

interface TextPropType extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>
  label: string
}

const stylesText = StyleSheet.create({
  container: {},
  label: {
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 5,
  },
})
