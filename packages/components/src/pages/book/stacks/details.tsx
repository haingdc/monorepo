import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from '../../../components/button'
import { InputApp } from '../../../components/input'
import inactiveHuman from '../../../../assets/human-inactive.png'
import inactivePhone from '../../../../assets/phone-inactive.png'
import inactiveCalendar from '../../../../assets/calendar-inactive.png'
import inactiveGroup from '../../../../assets/group-inactive.png'
import inactiveSofa from '../../../../assets/sofa-inactive.png'

export function BookingDetails(props) {
  const [details, setDetails] = useState({
    name: '',
    contact: '',
    checkIn: '',
    checkOut: '',
    people: '',
    rooms: '',
  })
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Booking Details</Text>
        <View style={styles.wrapper}>
          <InputApp
            avatar={inactiveHuman}
            type="emailAddress"
            style={styles.intput}
            value={details.name}
            onChangeText={() => {}}
            imageStyle={{ width: 15.83, height: 16.22 }}
          />
          <InputApp
            avatar={inactivePhone}
            type="emailAddress"
            style={styles.intput}
            value={details.name}
            onChangeText={() => {}}
            imageStyle={{ width: 18, height: 17 }}
          />
          <InputApp
            avatar={inactiveCalendar}
            type="emailAddress"
            style={styles.intput}
            value={details.name}
            onChangeText={() => {}}
            imageStyle={{ width: 15.87, height: 16.46 }}
          />
          <InputApp
            avatar={inactiveCalendar}
            type="emailAddress"
            style={styles.intput}
            value={details.name}
            onChangeText={() => {}}
            imageStyle={{ width: 15.87, height: 16.46 }}
          />
          <InputApp
            avatar={inactiveGroup}
            type="emailAddress"
            style={styles.intput}
            value={details.name}
            onChangeText={() => {}}
            imageStyle={{ width: 17.57, height: 12.23 }}
          />
          <InputApp
            avatar={inactiveSofa}
            type="emailAddress"
            style={styles.intput}
            value={details.name}
            onChangeText={() => {}}
            imageStyle={{ width: 22.38, height: 16.61 }}
          />
        </View>
        <Button onPress={() => {}}>Book</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    lineHeight: 23,
    color: '#333',
  },
  wrapper: {
    marginTop: 30,
  },
  intput: {
    width: 335,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.5)',
    borderStyle: 'solid',
    shadowColor: 'rgba(56,56,56,0.75)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 4,
  },
})
