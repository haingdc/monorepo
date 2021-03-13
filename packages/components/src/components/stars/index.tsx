import React, { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle, Image, StyleSheet } from 'react-native'
import star0 from '../../../assets/star-0.png'
import star50 from '../../../assets/star-50.png'
import star100 from '../../../assets/star-100.png'

export function Star(props: PropType) {
  const { percent } = props
  let list = [star0, star0, star0, star0, star0]
  const divide = Math.floor(percent / 20)
  const modular = percent % 20

  list = list.map((_n, index) => {
    if (index < divide) return star100
    else if (index == divide && modular) return star50
    return star0
  })
  return (
    <View style={styles.container}>
      <Image source={list[0]} style={{ width: 7, height: 7 }} />
      <Image source={list[1]} style={{ width: 7, height: 7 }} />
      <Image source={list[2]} style={{ width: 7, height: 7 }} />
      <Image source={list[3]} style={{ width: 7, height: 7 }} />
      <Image source={list[4]} style={{ width: 7, height: 7 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})

interface PropType extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>
  percent: number
}
