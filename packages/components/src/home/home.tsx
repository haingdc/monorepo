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

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
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
                    >
                      Prev
                    </Text>
                  </TouchableOpacity>
                )
              }
            },
            // DotComponent: class DotComponent extends React.Component {
            //   render() {
            //     const { index, isActive, onPress } = this.props as any
            //     return (
            //       <Text onPress={onPress}>Your Custom Dot {index + 1}</Text>
            //     )
            //   }
            // },
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
            <Button title="Next" onPress={() => {}} />
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
            <Button
              title="Left button"
              onPress={() => {
                alert('stupid')
              }}
            />
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
            <Button
              title="Left button"
              onPress={() => {
                alert('stupid')
              }}
            />
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
