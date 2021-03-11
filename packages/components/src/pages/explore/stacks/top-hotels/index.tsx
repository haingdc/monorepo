import React, { useState } from 'react'
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native'
import useToggle from '../../../../hooks/useToggle'
import pic from '../../../../../assets/parkPlaza.png'
import thumbup from '../../../../../assets/thumbup.png'
import currency from '../../../../../assets/currency-white.png'
import { BigCurrency } from '../../../../components/card'
import bookmark from '../../../../../assets/bookmark.png'
import bookmarkWhite from '../../../../../assets/bookmark-white.png'

export function TopHotels() {
  const [flag, toggleFlag] = useToggle(false)
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          width: 375,
          paddingTop: 30,
          paddingBottom: 40,
        }}
      >
        <View style={styles.container}>
          <ImageBackground source={pic} style={styles.image}>
            <View nativeID="todo" style={styles.innerContainer}>
              <View>
                <Text style={styles.title}>Sarovar Portico</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.desc}>4 star hotel</Text>
                  <Text style={[styles.desc, styles.dot]}>•</Text>
                  <Text style={[styles.desc, styles.percent]}>96%</Text>
                  <Image
                    source={thumbup}
                    style={{ width: 13.63, height: 12.66 }}
                  />
                </View>
              </View>
              <View style={styles.price}>
                <BigCurrency
                  isCut={false}
                  color="#fff"
                  currencyPhoto={currency}
                >
                  4999
                </BigCurrency>
                <Text style={styles.desc}>per night</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.ctaContainer}>
            <BookmarkButton checked={flag} onPress={toggleFlag} />
            <Text style={styles.cta} onPress={() => {}}>
              Book Now
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

function BookmarkButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={stylesBookmark.container}>
      <Image
        source={props.checked ? bookmark : bookmarkWhite}
        style={{ width: 13.63, height: 17.53 }}
      />
      <Text style={stylesBookmark.text}>Save</Text>
    </TouchableOpacity>
  )
}

const stylesBookmark = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingRight: 10,
  },
  text: {
    marginLeft: 4,
  },
})

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 335,
    height: 171,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 23,
  },
  desc: {
    color: '#bebec0',
  },
  dot: {
    marginHorizontal: 4,
  },
  percent: {
    marginRight: 4,
  },
  price: {
    alignItems: 'center',
  },
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
  },
  cta: {
    borderRadius: 4,
    borderColor: '#EF4339',
    borderWidth: 1,
    color: '#EF4339',
    paddingHorizontal: 14,
    paddingVertical: 4,
    display: 'flex',
    alignItems: 'center',
  },
})
