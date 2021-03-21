import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Button } from '../../../../components/button'
import { InputApp } from '../../../../components/input'
import inactiveHuman from '../../../../../assets/human-inactive.png'
import inactivePhone from '../../../../../assets/phone-inactive.png'
import inactiveCalendar from '../../../../../assets/calendar-inactive.png'
import inactiveGroup from '../../../../../assets/group-inactive.png'
import inactiveSofa from '../../../../../assets/sofa-inactive.png'
import { BottomSheet } from './BottomSheet'
import { CalendarPicker } from '../../sub-components/calendar'
import { Rooms } from '../../sub-components/rooms'

type Field = 'name' | 'contact' | 'checkIn' | 'checkOut' | 'people' | 'rooms' | undefined;

export function BookingDetails(props: StackScreenProps<any>) {
  const { navigation } = props;
  const [isVisible, setVisible] = useState(false)
  const [activeField, setActiveField] = useState<Field>();
  const [details, setDetails] = useState({
    name: '',
    contact: '',
    checkIn: '',
    checkOut: '',
    people: '',
    rooms: '',
  });
  useEffect(() => {

  })
  function handleDateInput(fieldName: Field) {
    return function showDatePicker() {
      setActiveField(fieldName);
      if (fieldName == 'checkIn' || fieldName == 'checkOut') {
        // if (inputRef) {
        //   (inputRef.current as any).blur();
        // }
        setVisible(true);
      }
    }
  };
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
            onFocus={handleDateInput('checkOut')}
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
        <Button style={styles.submit} onPress={() => setVisible(true)}>Book Now</Button>
        {/* {isVisible ? (
          <BottomSheet onDismiss={() => setVisible(false)}>
            <CalendarPicker onCancel={() => setVisible(false)} onDone={() => setVisible(false)} />
          </BottomSheet>
        ) : undefined} */}
        {isVisible ? (
          <BottomSheet onDismiss={() => setVisible(false)}>
            <Rooms onCancel={() => setVisible(false)} onDone={() => setVisible(false)} />
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
    paddingBottom: 0
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
    alignSelf: 'center',
    marginTop: 48,
  },
  calendarButton: {
    fontSize: 15,
    lineHeight: 17,
    paddingVertical: 9,
    paddingHorizontal: 18,
  },
})
