import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Index } from './stacks/index'
import { TopHotels } from './stacks/top-hotels'
import chevronLeft from '../../../assets/chevron-left.png'

const Stack = createStackNavigator()

export function Explore({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Index} />
      <Stack.Screen
        name="TopHotels"
        component={TopHotels}
        options={{
          headerLeft: () => {
            return <Back onPress={() => navigation.goBack()} />
          },
        }}
      />
    </Stack.Navigator>
  )
}

function Back(props) {
  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={chevronLeft} style={{ width: 10, height: 19 }} />
    </TouchableOpacity>
  )
}
