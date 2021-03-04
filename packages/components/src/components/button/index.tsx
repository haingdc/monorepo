import { mergeRight } from 'ramda';
import React, { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { AnyType } from '../../utils';

export function Button(props: AppButtonPropType) {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
      <Text style={buttonStyles.appButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}

export function Button2(props: AppButtonPropType) {
  const { children, onPress } = props;
  const style = mergeRight(originalStyle, props.style as AnyType);
  return (
    <TouchableOpacity onPress={onPress} style={style} >
      <Text style={buttonStyles.appButtonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const originalStyle = {
  elevation: 8,
  backgroundColor: '#fff',
  borderRadius: 4,
  paddingVertical: 12,
  paddingHorizontal: 12,
  width: 45,
  height: 40,
};

interface AppButtonPropType extends PropsWithChildren<any> {
  style? : StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const buttonStyles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#EF4339',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 280,
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: '#EF4339',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
});
