import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Explore } from '../../pages/explore';
import { Wishlist } from "../../pages/wishlist";
import { Profile } from '../../pages/profile';
import circle from '../../../assets/circle.png'
import circleInactive from '../../../assets/circle-inactive.png'
import bookmark from '../../../assets/bookmark.png'
import bookmarkInactive from '../../../assets/bookmark-inactive.png'
import human from '../../../assets/human.png'
import humanInactive from '../../../assets/human-inactive.png'

enum TABS {
  EXPLORE  = 'EXPLORE',
  WISHLIST = 'WISHLIST',
  PROFILE  = 'PROFILE',
}

const Tab = createBottomTabNavigator();
export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused/* , color, size */ }) => {
          const tabDictionary = {
            [TABS.EXPLORE ] : [circle  , circleInactive  ],
            [TABS.WISHLIST] : [bookmark, bookmarkInactive],
            [TABS.PROFILE ] : [human   , humanInactive   ],
          };
          return <Image source={tabDictionary[route.name][focused ? 0 : 1]} />;
        },
      })}
    >
      <Tab.Screen name={TABS.EXPLORE } component={Explore } />
      <Tab.Screen name={TABS.WISHLIST} component={Wishlist} />
      <Tab.Screen name={TABS.PROFILE } component={Profile } />
    </Tab.Navigator>
  );
}
