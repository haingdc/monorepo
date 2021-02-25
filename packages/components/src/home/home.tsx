// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='../types.d.ts'/>
import React, { useRef } from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-web-swiper'
import slidePhoto1 from '../../assets/slidePhoto1.png'
import slidePhoto2 from '../../assets/slidePhoto2.png'
import slidePhoto3 from '../../assets/slidePhoto3.png'

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

export function AppButton(props) {
  const { title, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
      <Text style={buttonStyles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const stylesSlide = StyleSheet.create({
  title: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    marginTop: 81,
    marginBottom: 20,
  },
  description: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  descriptionBottom: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 80,
  },
})

const styles = StyleSheet.create({
  title: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  slideTitle1: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    marginTop: 81,
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
  imageWrapper: {
    width: 249,
    height: 211,
  },
  slidePhoto1: {
    width: 207,
    height: 210,
  },
  slidePhoto2: {
    width: 248,
    height: 211,
  },
  slidePhoto3: {
    width: 249,
    height: 109,
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
})
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

export function HomeScreen({ navigation }) {
  const swiperRef = useRef<Swiper>(null)
  function next() {
    if (swiperRef) {
      swiperRef.current?.goToNext()
    }
  }
  return (
    <View nativeID="todo" style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Swiper
          ref={swiperRef}
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
            }}
          >
            <View style={styles.imageWrapper}>
              <Image style={styles.slidePhoto1} source={slidePhoto1} />
            </View>
            <Text style={stylesSlide.title}>
              Search and save your preference
            </Text>
            <Text style={stylesSlide.description}>
              Browse best hotels from 40,000+
            </Text>
            <Text style={stylesSlide.descriptionBottom}>
              database that fits your unique needs
            </Text>
            <AppButton title="Next" onPress={next} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={styles.imageWrapper}>
              <Image style={styles.slidePhoto2} source={slidePhoto2} />
            </View>
            <Text style={stylesSlide.title}>Find the best deals</Text>
            <Text style={stylesSlide.description}>
              Find the best deals from any season and
            </Text>
            <Text style={stylesSlide.descriptionBottom}>
              book from a curated list
            </Text>
            <AppButton title="Next" onPress={next} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={styles.imageWrapper}>
              <Image style={styles.slidePhoto3} source={slidePhoto3} />
            </View>
            <Text style={stylesSlide.title}>Book and enjoy your stay</Text>
            <Text style={stylesSlide.description}>
              Select the hotel and date as per your
            </Text>
            <Text style={stylesSlide.descriptionBottom}>
              preference to book and have a pleasant stay
            </Text>
            <AppButton
              title="Get Started"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        </Swiper>
      </View>
    </View>
  )
}
