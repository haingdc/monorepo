import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text } from 'react-native'
import { Explore } from '../../pages/explore'
import { Profile } from '../../pages/profile'
import human from '../../../assets/human.png'
import circle from '../../../assets/circle.png'
import bookmark from '../../../assets/bookmark.png'
import humanInactive from '../../../assets/human-inactive.png'
import circleInactive from '../../../assets/circle-inactive.png'
import bookmarkInactive from '../../../assets/bookmark-inactive.png'
import { WishList } from '../../pages/wishlist'

enum TABS {
  EXPLORE = 'EXPLORE',
  WISHLIST = 'WISHLIST',
  PROFILE = 'PROFILE',
}

const Tab = createBottomTabNavigator()
export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused /* , color, size */ }) => {
            const tabDictionary = {
              [TABS.EXPLORE]: [circle, circleInactive],
              [TABS.WISHLIST]: [bookmark, bookmarkInactive],
              [TABS.PROFILE]: [human, humanInactive],
            }
            return <Image source={tabDictionary[route.name][focused ? 0 : 1]} />
          },
        }
      }}
    >
      <Tab.Screen name={TABS.EXPLORE} component={Explore} />
      <Tab.Screen name={TABS.WISHLIST} component={WishList} />
      <Tab.Screen name={TABS.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}
