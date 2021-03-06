import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native'
import ReadMore from 'react-native-read-more-text'
import { StackScreenProps } from '@react-navigation/stack'
import { SafeAreaViewVisualizer } from '../../DataView'
import { ReadMoreButton } from '../../components/button3-read-more'
import { TextCell, Texticon } from '../../components/text-icon'
import { Button, Button2 } from '../../components/button'
import mail from '../../../assets/mail2.png'
import phone from '../../../assets/phone.png'
import { blackSign, Currency } from '../../components/text-currency'
import { Star } from '../../components/stars'
import { Avatars } from '../../components/avatars'
import { Amenity } from '../../components/amenity'
import bookmark from '../../../assets/bookmark-white.png'

export function Book(props: StackScreenProps<any>) {
  const { navigation } = props
  return (
    <SafeAreaViewVisualizer>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.innerContainer1}>
            <Text style={styles.name}>Park Plaza</Text>
            <Text style={styles.mostView}>Most viewed</Text>
          </View>
          <View style={styles.innerContainer1}>
            <Text style={styles.address}>Marathalli, Bangalore</Text>
            <Text style={styles.line}>-</Text>
            <Text style={styles.showMap}>Show in Map</Text>
          </View>
          <View style={styles.readMoreWrapper}>
            <ReadMore
              numberOfLines={4}
              onReady={handleTextReady}
              renderRevealedFooter={(cb) => (
                <ReadMoreButton
                  style={{ marginTop: 2 }}
                  isMore={false}
                  onPress={cb}
                >
                  Read Less
                </ReadMoreButton>
              )}
              renderTruncatedFooter={(cb) => (
                <ReadMoreButton style={{ marginTop: 2 }} isMore onPress={cb}>
                  Read More
                </ReadMoreButton>
              )}
            >
              <Text style={styles.cardText}>
                Nestled in the heart of Bengaluru, the Park Plaza provides an
                upscale home base with easy access to Bengaluru&rsquo;s Central
                Business District. Our stylish hotel is conveniently located
                within a 5km radius of business and entertainment hot spots and
                approx. 40-minute drive from Kempegowda International Aiport
                (BLR).
              </Text>
            </ReadMore>
          </View>
          <View style={[styles.innerContainer1, { marginTop: 14 }]}>
            <Texticon source={mail} imgWidth={9.88} imgHeight={9.88}>
              parkplaza@gmail.com
            </Texticon>
            <Texticon source={phone} imgWidth={9.88} imgHeight={9.88}>
              +91-8729838721
            </Texticon>
          </View>
          <View style={[styles.innerContainer1, { marginTop: 9 }]}>
            <TextCell label="Price">
              <Currency color="#000" photo={blackSign}>
                6999
              </Currency>
            </TextCell>
            <TextCell label="Ratings">
              <Star percent={25} />
            </TextCell>
            <TextCell label="Reviews">
              <Avatars people={[]} />
            </TextCell>
          </View>
          <Text style={styles.amenitiesLabel}>Amenities</Text>
          <View style={[styles.innerContainer1, { marginTop: 9 }]}>
            <Amenity type="wifi">Free WiFi</Amenity>
            <Amenity type="breakfast">Breakfast</Amenity>
            <Amenity type="pets">Pets</Amenity>
            <Amenity type="bar">Bar</Amenity>
            <Amenity type="pool">Pool</Amenity>
            <Amenity type="more">More</Amenity>
          </View>
          <View style={[styles.innerContainer1, { marginVertical: 18 }]}>
            <Button onPress={() => navigation.push('Book Details')}>
              Book Now
            </Button>
            <Button2 style={{ width: 45, height: 40, marginLeft: 10 }}>
              <Image source={bookmark} style={{ width: 15, height: 20 }} />
            </Button2>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewVisualizer>
  )

  function handleTextReady() {
    console.log('ready!')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  readMoreWrapper: {
    marginVertical: 11,
  },
  cardText: {
    fontSize: 14,
  },
  innerContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  mostView: {
    fontSize: 8,
    lineHeight: 10,
    color: '#EF4339',
    marginLeft: 6,
  },
  address: {
    fontSize: 14,
    lineHeight: 16,
  },
  showMap: {
    fontSize: 12,
    fontWeight: '100',
    lineHeight: 15,
  },
  line: {
    marginHorizontal: 4,
  },
  amenitiesLabel: {
    marginTop: 20,
    fontSize: 10,
    lineHeight: 20,
    fontWeight: '700',
  },
})
