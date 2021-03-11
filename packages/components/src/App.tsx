import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Welcome } from './pages/welcome'
import { SignUp } from './pages/sign-up'
import { SignIn } from './pages/sign-in'
import { AuthContext, AuthTypes } from './contexts/auth'
import { SplashScreen } from './pages/loading'
import { BottomTabs } from './containers/bottom-tabs'
import { SafeAreaViewVisualizer } from './DataView'

const Stack = createStackNavigator()

interface AppState {
  isLoading: boolean
  isSignout: boolean
  isSignup: boolean
  userToken?: string
}

interface AppAction {
  type: string
  token?: string
}

export function App({ navigation }) {
  const initialState = {
    isLoading: true,
    isSignout: false,
    isSignup: false,
    userToken: '',
  }
  const [state, dispatch] = React.useReducer<
    (prevState: AppState, action: AppAction) => AppState
  >((prevState, action) => {
    switch (action.type) {
      case AuthTypes.RESTORE_TOKEN:
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case AuthTypes.SIGN_IN:
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        }
      case AuthTypes.SIGN_OUT:
        return {
          ...prevState,
          isSignout: true,
          userToken: undefined,
        }
      case AuthTypes.SIGN_UP:
        return {
          ...prevState,
          isSignout: false,
          userToken: undefined,
          isSignup: true,
        }
      default:
        return prevState
    }
  }, initialState)

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: AuthTypes.RESTORE_TOKEN, token: userToken })
    }
    bootstrapAsync()
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: { address: string; password: string }) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: AuthTypes.SIGN_IN, token: 'dummy-auth-token' })
      },
      signOut: () => {
        AsyncStorage.removeItem('userToken', () => {
          dispatch({ type: AuthTypes.SIGN_OUT })
        })
      },
      signUp: async (data: {
        address: string
        password: string
        account: string
      }) => {
        const dummyToken = 'dummy-auth-token'
        AsyncStorage.setItem('userToken', dummyToken, () => {
          dispatch({ type: AuthTypes.SIGN_UP, token: dummyToken })
        })
      },
    }),
    [],
  )

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider /* style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} */
      >
        <NavigationContainer>
          <Stack.Navigator
            mode="modal"
            headerMode="screen"
            screenOptions={{ headerShown: false, gestureEnabled: true }}
          >
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : !state.userToken ? (
              // No token found, user isn't signed in
              [
                <Stack.Screen
                  key="Welcome"
                  name="Welcome"
                  component={Welcome}
                />,
                <Stack.Screen
                  key="SignIn"
                  name="SignIn"
                  options={{
                    title: 'Sign in',
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push', // When logging out, a pop animation feels intuitive
                  }}
                  component={SignIn}
                />,
                <Stack.Screen name="SignUp" component={SignUp} key="SignUp" />,
              ]
            ) : (
              // User is signed in
              <Stack.Screen
                name="Explore"
                options={{ headerShown: false }}
                component={BottomTabs}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  )
}
