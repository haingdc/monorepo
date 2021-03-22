import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateRangePicker from "../stacks/details-form/DateRangePicker";
import minus from '../../../../assets/minus.png';
import plus from '../../../../assets/plus.png';
import { color } from "react-native-reanimated";

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
      <View style={styles.category}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.desc}>16+ years</Text>
          </View>
          <Quantity />
      </View>
      <View style={{ height: 1, borderBottomColor: '#E0E0E1', borderBottomWidth: 1, marginHorizontal: 18 }} />
      <View style={styles.category}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Teens</Text>
            <Text style={styles.desc}>12-15 years</Text>
          </View>
          <Quantity />
      </View>
      <View style={{ height: 1, borderBottomColor: '#E0E0E1', borderBottomWidth: 1, marginHorizontal: 18 }} />
      <View style={styles.category}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.desc}>2-11 years</Text>
          </View>
          <Quantity />
      </View>
      <View style={{ height: 1, borderBottomColor: '#E0E0E1', borderBottomWidth: 1, marginHorizontal: 18 }} />
      <View style={styles.category}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.desc}>under 2 years</Text>
          </View>
          <Quantity />
      </View>
    </View>
  );
}

function Quantity() {
  return (
    <View style={quantityStyles.container}>
      <Image source={minus} style={quantityStyles.sign} />
      <Text style={quantityStyles.text}>1</Text>
      <Image source={plus} style={quantityStyles.sign} />
    </View>
  );
}

const quantityStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 112,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sign: {
    width: 24,
    height: 24,
  },
  text: {
    width: 20,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 29,
  },
});

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
  category: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 17,
  },
  titleWrap: {
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: 'rgb(51,51,51)',
  },
  desc: {
    fontSize: 12,
    lineHeight: 14,
    color: 'rgba(51, 51, 51, 0.5)',
  },
})