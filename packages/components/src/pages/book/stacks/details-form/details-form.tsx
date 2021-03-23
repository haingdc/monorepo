import React, { useEffect, useRef, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Button } from '../../../../components/button'
import { InputApp, RefInput } from '../../../../components/input'
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
  const [isVisible, setVisible] = useState(false)
  const [activeField, setActiveField] = useState<Field>();
  const  checkinRef = useRef<RefInput>(null);
  const checkoutRef = useRef<RefInput>(null);
  const    roomsRef = useRef<RefInput>(null);
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
  function handleInput(fieldName: Field) {
    return function showBottomSheets() {
      setActiveField(fieldName);
      if (fieldName == 'checkIn') {
        checkinRef.current?.blur();
        setVisible(true);
        setActiveField(fieldName);
      } else
      if (fieldName == 'checkOut') {
        checkoutRef.current?.blur();
        setVisible(true);
        setActiveField(fieldName);
      } else
      if (fieldName == 'rooms') {
        roomsRef.current?.blur();
        setVisible(true);
        setActiveField(fieldName);
      }
    }
  };

  function handleChange(fieldName: Field) {
    return function onChangeText(text) {
      setDetails(details => {
        return {
          ...details,
          [fieldName as string]: text,
        };
      });
    }
  }
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
            onChangeText={handleChange('name')}
            imageStyle={{ width: 15.83, height: 16.22 }}
          />
          <InputApp
            avatar={inactivePhone}
            style={styles.intput}
            value={details.contact}
            placeholder="Contact Number"
            onChangeText={handleChange('contact')}
            imageStyle={{ width: 18, height: 17 }}
          />
          <InputApp
            avatar={inactiveCalendar}
            style={styles.intput}
            value={details.checkIn}
            placeholder="Check In"
            onChangeText={() => {}}
            imageStyle={{ width: 15.87, height: 16.46 }}
            ref={checkinRef}
            onFocus={handleInput('checkIn')}
          />
          <InputApp
            avatar={inactiveCalendar}
            style={styles.intput}
            value={details.checkOut}
            placeholder="Check Out"
            onChangeText={() => {}}
            imageStyle={{ width: 15.87, height: 16.46 }}
            ref={checkoutRef}
            onFocus={handleInput('checkOut')}
          />
          <InputApp
            avatar={inactiveGroup}
            style={styles.intput}
            value={details.people}
            placeholder="People"
            onChangeText={() => {}}
            imageStyle={{ width: 17.57, height: 12.23 }}
          />
          <InputApp
            avatar={inactiveSofa}
            style={styles.intput}
            value={details.rooms}
            placeholder="Rooms"
            onChangeText={() => {}}
            imageStyle={{ width: 22.38, height: 16.61 }}
            ref={roomsRef}
            onFocus={handleInput('rooms')}
          />
        </View>
        <Button style={styles.submit}>Book Now</Button>
        { (isVisible && ( activeField == 'checkIn' || activeField == 'checkOut' ))  ? (
          <BottomSheet onDismiss={() => setVisible(false)}>
            <CalendarPicker onCancel={() => setVisible(false)} onDone={() => setVisible(false)} />
          </BottomSheet>
        ) : undefined}
        { (isVisible && activeField == 'rooms') ? (
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
