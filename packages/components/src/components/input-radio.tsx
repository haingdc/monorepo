import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'

export default class RadioButton extends Component<RadioProps, any> {
  render() {
    const { button, onClick } = this.props
    const { label = '' } = button
    return (
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={0.8}
        style={styles.radioButton}
      >
        <View
          style={[
            styles.radioButtonHolder,
            {
              height: button.size,
              width: button.size,
              borderColor: button.color,
            },
          ]}
        >
          {button.selected ? (
            <View
              style={[
                styles.radioIcon,
                {
                  height: button.size / 2,
                  width: button.size / 2,
                  backgroundColor: button.color,
                },
              ]}
            />
          ) : null}
        </View>
        <Text style={[styles.label, { color: button.color }]}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonHolder: {
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioIcon: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
  },
})

export interface RadioProps {
  button: {
    color   : string
    size    : number
    selected: boolean
    label?  : string
  }
  onClick: ((event: GestureResponderEvent) => void) | undefined
}
