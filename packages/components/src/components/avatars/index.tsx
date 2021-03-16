import React, { PropsWithChildren } from 'react'
import {
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
} from 'react-native'
import overlay from '../../../assets/person-overlay.png'
import person1 from '../../../assets/person1.png'
import person2 from '../../../assets/person2.png'
import person3 from '../../../assets/person3.png'
import person4 from '../../../assets/person4.png'

function Avatar(props) {
  const { source, isOverlay, left = 0 } = props
  return (
    <View style={[avatarStyles.container, { marginLeft: left }]}>
      <Image source={source} style={avatarStyles.image} />
      {isOverlay
        ? [
            <Image key="image" source={overlay} style={avatarStyles.overlay} />,
            <View key="text" style={avatarStyles.textWrapper}>
              <Text style={avatarStyles.text}>+25</Text>
            </View>,
          ]
        : undefined}
    </View>
  )
}

interface Person {
  source: ImageSourcePropType
}

const avatarStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 100,
  },
  image: {
    width: 18,
    height: 18,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  textWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 6,
    lineHeight: 7,
    color: '#fff',
  },
})

export function Avatars(props: PropType) {
  return (
    <View style={avatarsStyles.container}>
      <Avatar source={person1} isOverlay={false} />
      <Avatar source={person2} isOverlay={false} left={-6} />
      <Avatar source={person3} isOverlay={false} left={-6} />
      <Avatar source={person4} isOverlay left={-6} />
    </View>
  )
}

interface PropType extends PropsWithChildren<any> {
  people: Person[]
}

const avatarsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})
