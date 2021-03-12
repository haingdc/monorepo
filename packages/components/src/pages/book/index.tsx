import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ReadMore from 'react-native-read-more-text'
import { SafeAreaViewVisualizer } from '../../DataView'

export class Book extends React.Component {
  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <SafeAreaViewVisualizer>
        <View style={styles.container}>
          <View>
            <Text>Park Plaza</Text>
            <Text>Most viewed</Text>
          </View>
          <View>
            <Text>Marathalli, Bangalore -</Text>
            <Text>Show in Map</Text>
          </View>
          <View style={styles.card}>
            <ReadMore
              numberOfLines={2}
              // eslint-disable-next-line no-underscore-dangle
              onReady={this._handleTextReady}
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 14,
  },
})
