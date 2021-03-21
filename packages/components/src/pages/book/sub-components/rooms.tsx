import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateRangePicker from "../stacks/details-form/DateRangePicker";

export function Rooms(props: PropType) {
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
          <Text>Rooms</Text>
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