import React from 'react'
import { Text, TouchableOpacity, View, Button } from 'react-native'
import Swiper from 'react-native-web-swiper'

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Swiper
          from={1}
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
            DotComponent: class DotComponent extends React.Component {
              render() {
                const { index, isActive, onPress } = this.props as any
                return (
                  <Text onPress={onPress}>Your Custom Dot {index + 1}</Text>
                )
              }
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
