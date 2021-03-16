import {
  createStackNavigator,
  StackHeaderProps,
  StackScreenProps,
} from '@react-navigation/stack'
import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native'
import { hasNotch } from 'react-native-device-info'
import { ViewButton } from '../../components/button2-view'
import { Index } from './stacks/index'
import { TopHotels } from './stacks/top-hotels'
import { Book } from '../book'
import chevronLeftDark from '../../../assets/chevron-left-dark.png'
import chevronLeftLight from '../../../assets/chevron-left-light.png'
import pic from '../../../assets/book-park-plaza.png'
import { BookingDetails } from '../book/stacks/details'

const Stack = createStackNavigator()

export function Explore({ navigation }: StackScreenProps<any>) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen
        name="TopHotels"
        component={TopHotels}
        options={{
          headerLeft: () => {
            return (
              <Back
                mode="dark"
                style={{ marginLeft: 0, marginTop: 0 }}
                onPress={() => navigation.navigate('Index')}
              />
            )
          },
        }}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{
          header: (props: StackHeaderProps) => {
            return (
              <ImageBackground
                source={pic}
                style={[
                  headerStyles.imageBgr,
                  { display: props.navigation.isFocused() ? 'flex' : 'none' },
                ]}
              >
                <Back
                  mode="light"
                  style={{ marginLeft: 0, marginTop: hasNotch() ? 46 : 12 }}
                  onPress={() => navigation.navigate('TopHotels')}
                />
                <ViewButton style={headerStyles.view}>Gallery</ViewButton>
              </ImageBackground>
            )
          },
        }}
      />
      <Stack.Screen
        name="Book Details"
        component={BookingDetails}
        options={{
          header: () => {
            return (
              <Back
                mode="light"
                style={{ marginLeft: 0, marginTop: hasNotch() ? 46 : 12 }}
                onPress={() => {
                  navigation.navigate('Book')
                }}
              />
            )
          },
        }}
      />
    </Stack.Navigator>
  )
}

const headerStyles = StyleSheet.create({
  imageBgr: {
    width: '100%',
    height: 267,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    overflow: 'hidden',
  },
  view: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#EF4339',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
})

function BackBase(props: BackPropType) {
  const { onPress, style, mode } = props
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image
        source={mode == 'light' ? chevronLeftLight : chevronLeftDark}
        style={
          mode == 'light'
            ? { width: 14, height: 26.5 }
            : { width: 10, height: 19 }
        }
      />
    </TouchableOpacity>
  )
}

function Back(props: BackPropType) {
  let { style } = props
  const { mode, onPress } = props
  style = [
    { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
    style,
  ]
  return <BackBase mode={mode} style={style} onPress={onPress} />
}

interface BackPropType {
  style?: StyleProp<ViewStyle>
  mode: 'light' | 'dark'
  onPress?: (event: GestureResponderEvent) => void
}
