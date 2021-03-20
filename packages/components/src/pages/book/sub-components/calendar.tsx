import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateRangePicker from "../stacks/details-form/DateRangePicker";

export function CalendarPicker(props: PropType) {
  const { onCancel, onDone} = props;
  return (
    <View style={styles.container}>
      <View
          style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
          }}
      >
          <TouchableOpacity>
              <Text style={styles.calendarButton} onPress={onCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={[styles.calendarButton, { color: '#EF4339'}]} onPress={onDone}>Done</Text>
          </TouchableOpacity>
      </View>
      <View style={{ height: 1, borderBottomColor: '#E0E0E1', borderBottomWidth: 1, marginHorizontal: 18 }} />
      <View style={{ paddingHorizontal: 18 }}>
          {/* <Calendar
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
          /> */}
          <DateRangePicker
              initialRange={['2018-04-01', '2018-04-10']}
              onSuccess={(s, e) => console.log(s + '||' + e)}
              theme={{ markColor: '#EF4339', markTextColor: 'white', markColor2: 'rgba(239, 67, 57, .19)', markTextColor2: 'black' }}
          />
      </View>
    </View>
  );
}

interface PropType {
  onCancel: () => void,
  onDone  : () => void,
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 18,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  calendarButton: {
    fontSize: 15,
    lineHeight: 17,
    paddingVertical: 9,
    paddingHorizontal: 18,
  },
})