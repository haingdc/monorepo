import React from 'react'
import { Button, StatusBar, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'
import { Welcome } from './pages/welcome'
import { SignUp } from './pages/sign-up'
import { SignIn } from './pages/sign-in'
import { AuthContext } from './contexts/auth'

// const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

// function RootNavigator({ isSignedIn }) {
//   return isSignedIn ? (
//     <View>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Contact" component={Contact} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </View>
//   ) : (
//     <View>
//       <Stack.Screen name="SignIn" component={SignIn} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//     </View>
//   )
// }

// function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={AuthenStack} /* options={{ tabBarVisible: false }} */ />
//       <Tab.Screen name="Contact" component={ContactStack} />
//     </Tab.Navigator>
//   );
// }

// function AuthenStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home"   component={Welcome} />
//       <Stack.Screen name="SignIn" component={SignIn} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//     </Stack.Navigator>
//   )
// }

// function Home() {
//   return <Text>Home</Text>
// }

// function Settings() {
//   return <Text>Settings</Text>
// }

// function Contact() {
//   return <Text>Contact</Text>
// }

// function ContactStack() {
//   return (
//     <Stack.Navigator screenOptions={{}}>
//       <Stack.Screen name="Contact" component={Contact} />
//     </Stack.Navigator>
//   );
// }

// export function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         {/* <StatusBar barStyle="dark-content" /> */}
//         <BottomTabNavigator />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   )
// }

// declare let global: {
//   HermesInternal?: boolean
// }

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

function SignInScreen() {
  const [address, setAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ address, password })} />
    </View>
  );
}

const Stack = createStackNavigator();

export function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    // eslint-disable-next-line consistent-return
    (prevState, action) => {
      // eslint-disable-next-line default-case
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            [
              <Stack.Screen name="Welcomd" component={Welcome} key="Welcome" />,
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  title: 'Sign in',
              // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
                key="SignIn"
              />,
              <Stack.Screen name="SignUp" component={SignUp} key="SignUp" />
            ]
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={HomeScreen} />
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
