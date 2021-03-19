import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Calendar } from 'react-native-calendars'
import { StackScreenProps } from '@react-navigation/stack'
import { Button } from '../../../../components/button'
import { InputApp } from '../../../../components/input'
import inactiveHuman from '../../../../../assets/human-inactive.png'
import inactivePhone from '../../../../../assets/phone-inactive.png'
import inactiveCalendar from '../../../../../assets/calendar-inactive.png'
import inactiveGroup from '../../../../../assets/group-inactive.png'
import inactiveSofa from '../../../../../assets/sofa-inactive.png'
import { BottomSheet } from './BottomSheet'
import DateRangePicker from './DateRangePicker'

export function BookingDetails(props: StackScreenProps<any>) {
  const { navigation } = props
  const [isVisible, setVisible] = useState(false)
  const [dates, setDates] = useState<any>({})
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
            style={styles.intput}
            value={details.name}
            placeholder="Name"
            onChangeText={() => {}}
            imageStyle={{ width: 15.83, height: 16.22 }}
          />
          <InputApp
            avatar={inactivePhone}
            style={styles.intput}
            value={details.name}
            placeholder="Contact Number"
            onChangeText={() => {}}
            imageStyle={{ width: 18, height: 17 }}
          />
          <InputApp
            avatar={inactiveCalendar}
            style={styles.intput}
            value={details.name}
            placeholder="Check In"
            onChangeText={() => {}}
            imageStyle={{ width: 15.87, height: 16.46 }}
          />
          <InputApp
            avatar={inactiveCalendar}
            style={styles.intput}
            value={details.name}
            placeholder="Check Out"
            onChangeText={() => {}}
            imageStyle={{ width: 15.87, height: 16.46 }}
          />
          <InputApp
            avatar={inactiveGroup}
            style={styles.intput}
            value={details.name}
            placeholder="People"
            onChangeText={() => {}}
            imageStyle={{ width: 17.57, height: 12.23 }}
          />
          <InputApp
            avatar={inactiveSofa}
            style={styles.intput}
            value={details.name}
            placeholder="Rooms"
            onChangeText={() => {}}
            imageStyle={{ width: 22.38, height: 16.61 }}
          />
        </View>
        <Button style={styles.submit} onPress={() => setVisible(true)}>Book</Button>
        {isVisible ? (
          <BottomSheet
            onDismiss={() => {
              setVisible(false)
            }}
          >
            <View style={{ paddingBottom: 18, backgroundColor: '#fff', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
              <View
                  style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: '#fff',
                  }}
              >
                  <TouchableOpacity>
                      <Text style={styles.calendarButton} onPress={() => setVisible(false)}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={[styles.calendarButton, { color: '#EF4339'}]} onPress={() => setVisible(false)}>Done</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ height: 1, borderBottomColor: '#E0E0E1', borderBottomWidth: 1, marginHorizontal: 18 }} />
              <View style={{ paddingHorizontal: 18 }}>
                  <Calendar
                      markedDates={dates}
                      markingType="period"
                      onDayPress={(day) => {
                        setDates({
                            [day.dateString]: {
                              selected: true,
                              startingDay: true,
                              endingDay: true,
                              color: '#EF4339',
                              textColor: '#fff',
                            },
                        })
                      }}
                  />
                  <DateRangePicker
                  initialRange={['2018-04-01', '2018-04-10']}
                  onSuccess={(s, e) => console.log(s + '||' + e)}
                  theme={{ markColor: 'red', markTextColor: 'white' }}/>
              </View>
            </View>
          </BottomSheet>
        ) : undefined}
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
  submit: {
    margin: 'auto',
  },
  calendarButton: {
    fontSize: 15,
    lineHeight: 17,
    paddingVertical: 9,
    paddingHorizontal: 18,
  },
})
