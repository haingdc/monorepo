import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { InputApp } from '../sign-in';
import location from '../../../assets/place.png'
import group from '../../../assets/group.png'
import calendar from '../../../assets/calendar.png'

export function Explore() {
  const [place  , setPlace  ] = useState('Bangalore')
  const [goStart, setGoStart] = useState('27 May, 2020')
  const [goEnd  , setGoEnd  ] = useState('30 May, 2020')
  const [members, setMembers] = useState('1 Adult')

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
      }}
    >
      <InputApp
          type="location"
          avatar={location}
          style={styles.intput}
          value={place}
          onChangeText={setPlace}
          imageStyle={{ width: 13.43, height: 18.77 }}
      />
      <InputApp
          type="location"
          avatar={calendar}
          style={styles.intput}
          value={goStart}
          onChangeText={setGoStart}
          imageStyle={{ width: 13.43, height: 18.77 }}
      />
      <InputApp
          type="location"
          avatar={calendar}
          style={styles.intput}
          value={goEnd}
          onChangeText={setGoEnd}
          imageStyle={{ width: 13.43, height: 18.77 }}
      />
      <InputApp
          type="location"
          avatar={group}
          style={styles.intput}
          value={members}
          onChangeText={setMembers}
          imageStyle={{ width: 13.43, height: 18.77 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  slideTitle1: {
    color: '#EF4339',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    marginTop: 81,
    marginBottom: 20,
  },
  wrapper: {
    marginTop: 30,
  },
  description: {
    color: '#333333',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 41,
  },
  link: {
    color: '#1D3AF2',
    textDecorationLine: 'underline',
    fontWeight: 'normal',
  },
  slidePhoto1: {
    width: 219,
    height: 169,
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
  intput2: {
    width: 335,
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
  forgot: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 15,
    textAlign: 'right',
    marginTop: 8,
    marginBottom: 38,
  },
})
