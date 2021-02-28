import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from './pages/home/home'
import { SignUp } from './pages/sign-up'
import { SignIn } from './pages/sign-in'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={AuthenStack} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Contact" component={ContactStack} />
    </Tab.Navigator>
  );
}

function AuthenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home"   component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

function ContactStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Contact" component={Home} />
    </Stack.Navigator>
  );
}

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

declare let global: {
  HermesInternal?: boolean
}
