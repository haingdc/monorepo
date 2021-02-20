import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native'
import Swiper from 'react-native-web-swiper'

const buttonStyles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#EF4339',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 280,
  },
  appButtonText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
})

const AppButton = (props) => {
  const { title, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
      <Text style={buttonStyles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
})


const dotStyles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EF4339',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    marginRight: 7,
  },
  activeDot: {
    width: 20,
    backgroundColor: '#EF4339',
  },
  lastDot: {
    marginRight: 0,
  },
});
class DotComponent extends React.Component {
  render() {
    const { index, isActive, onPress } = this.props as any
    // return <Text onPress={onPress}>{index + 1}</Text>
    return (
      <View
        nativeID="todo-silly"
        style={[dotStyles.dot, isActive ? dotStyles.activeDot : {}]}
       />
    )
  }
}

export function HomeScreen() {
  return (
    <View nativeID="todo" style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Swiper
          from={0}
          minDistanceForAction={0.1}
          controlsProps={{
            dotsTouchable: true,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: 'Next',
            nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
            PrevComponent: class PrevComponent extends React.Component {
              render() {
                const { onPress }: { onPress: never } = this.props as any
                return (
                  <TouchableOpacity onPress={onPress}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: '500',
                      }}
                    />
                  </TouchableOpacity>
                )
              }
            },
            NextComponent: class PrevComponent extends React.Component {
              render() {
                const { onPress }: { onPress: never } = this.props as any
                return (
                  <TouchableOpacity onPress={onPress}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: '500',
                      }}
                    />
                  </TouchableOpacity>
                )
              }
            },
            DotComponent,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,20,200,0.3)',
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={require('./Illustration.png')}
            />
            <Text style={styles.title}>Search and save your preference</Text>
            <Text style={styles.description}>
              Browse best hotels from 40,000+
            </Text>
            <Text>database that fits your unique needs</Text>
            <AppButton title="Next" onPress={() => {}} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,200,20,0.3)',
            }}
          >
            <Text style={styles.title}>Find the best deals</Text>
            <Text style={styles.description}>
              Find the best deals from any season and
            </Text>
            <Text>book from a curated list</Text>
            <AppButton title="Next" onPress={() => {}} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(200,20,20,0.3)',
            }}
          >
            <Text style={styles.title}>Book and enjoy your stay</Text>
            <Text style={styles.description}>
              Select the hotel and date as per your
            </Text>
            <Text>preference to book and have a pleasant stay</Text>
            <AppButton title="Get Started" onPress={() => {}} />
          </View>
        </Swiper>
      </View>
      {/* <View style={{ flex: 1 }}>
        <Swiper
          vertical
          loop
          timeout={-2.5}
          controlsProps={{
            dotActiveStyle: { backgroundColor: 'red' },
            cellsContent: {
              'bottom-left': <Text>SOME LOGO</Text>,
            },
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,20,200,0.3)',
            }}
          >
            <Text>Slide 1</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,200,20,0.3)',
            }}
          >
            <Text>Slide 2</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(200,20,20,0.3)',
            }}
          >
            <Text>Slide 3</Text>
          </View>
        </Swiper>
      </View> */}
    </View>
  )
}
