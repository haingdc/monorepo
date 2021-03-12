import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReadMore from 'react-native-read-more-text'
import { SafeAreaViewVisualizer } from '../../DataView'
import { ReadMoreButton } from '../../components/button3-read-more'

export class Book extends React.Component {
  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <SafeAreaViewVisualizer>
        <View style={styles.container}>
          <View style={styles.InnerContainer1}>
            <Text style={styles.name}>Park Plaza</Text>
            <Text style={styles.mostView}>Most viewed</Text>
          </View>
          <View style={styles.InnerContainer1}>
            <Text style={styles.address}>Marathalli, Bangalore</Text>
            <Text style={styles.line}>-</Text>
            <Text style={styles.showMap}>Show in Map</Text>
          </View>
          <View style={styles.card}>
            <ReadMore
              numberOfLines={4}
              // eslint-disable-next-line no-underscore-dangle
              onReady={this._handleTextReady}
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
        </View>
      </SafeAreaViewVisualizer>
    )
  }

  _handleTextReady = () => {
    console.log('ready!')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginVertical: 11,
  },
  cardText: {
    fontSize: 14,
  },
  InnerContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
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
})
